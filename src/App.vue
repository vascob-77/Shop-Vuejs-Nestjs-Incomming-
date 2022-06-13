<script setup lang="ts">
import HeaderVue from "./components/Header.vue";
import ShopVue from "./components/Shop/Shop.vue";
import CartVue from "./components/Cart/Cart.vue";
import FooterVue from "./components/Footer.vue";
import { computed, reactive } from "vue";
import data from "./data/product";
import type { IFilters, IFilterUpdate, IProduct, IProductCart } from "./interfaces";
import { DEFAULT_FILTERS } from "./data/filter";
import product from "./data/product";

// const products = reactive<IProduct[]>(data)
// const cart = reactive([]);

// OU

const state = reactive<{
  products: IProduct[];
  cart: IProductCart[];
  filters: IFilters;
}>({
  products: data,
  cart: [],
  filters: { ...DEFAULT_FILTERS },
});

const addProductInCart = (productId: number): void => {
  const productAdd = state.products.find((product) => product.id === productId);
  if (productAdd) {
    const productInCart = state.cart.find((product) => product.id === productId);
    if (productInCart) {
      productInCart.quantity++;
    } else {
      state.cart.push({ ...productAdd, quantity: 1 });
    }
  }
};

const removeProductInCart = (productId: number): void => {
  const productFromCart = state.cart.find((product) => product.id === productId);
  if (productFromCart) {
    if (productFromCart.quantity === 1) {
      state.cart = state.cart.filter((product) => product.id !== productId);
    } else {
      productFromCart.quantity--;
    }
  }
};

const filteredProduct = computed(() => {
  return state.products.filter((product) => {
    if (
      product.title.toLocaleLowerCase().startsWith(state.filters.search.toLocaleLowerCase()) &&
      product.price >= state.filters.priceRange[0] &&
      product.price <= state.filters.priceRange[1] &&
      (product.category === state.filters.category || state.filters.category === "all")
    ) {
      return true;
    } else {
      return false;
    }
  });
});

const updateFilter = (filterUpdate: IFilterUpdate) => {
  if (filterUpdate.search) {
    state.filters.search = filterUpdate.search;
  } else if (filterUpdate.price) {
    state.filters.priceRange = filterUpdate.price;
  } else if (filterUpdate.category) {
    state.filters.category = filterUpdate.category;
  } else {
    state.filters = { ...DEFAULT_FILTERS };
  }
};

const emptyCart = computed(() => state.cart.length === 0);
</script>

<template>
  <div class="app-container" :class="{ gridEmpty: emptyCart }">
    <HeaderVue class="header" />
    <ShopVue
      :filters="state.filters"
      @update-filter="updateFilter"
      :products="filteredProduct"
      @add-product-in-cart="addProductInCart"
      class="shop"
    />
    <CartVue
      v-if="!emptyCart"
      :cart="state.cart"
      @remove-product-in-cart="removeProductInCart"
      class="cart"
    />
    <FooterVue class="footer" />
  </div>
</template>

<style lang="scss">
@import "./assets/scss/base.scss";
@import "./assets/scss/debug.scss";

.app-container {
  min-height: 100vh;
  display: grid;
  grid-template-areas: "header header" "shop cart" "footer footer";
  grid-template-columns: 75% 25%;
  grid-template-rows: 48px auto 48px;
}

.header {
  grid-area: header;
}
.shop {
  grid-area: shop;
}
.cart {
  grid-area: cart;
  border-left: var(--border);
  background-color: #ffffff;
}
.footer {
  grid-area: footer;
}

.gridEmpty {
  display: grid;
  grid-template-areas: "header" "shop " "footer";
  grid-template-columns: 100%;
  grid-template-rows: 48px auto 48px;
}
</style>
