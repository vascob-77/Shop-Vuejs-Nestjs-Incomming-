<script setup lang="ts">
import HeaderVue from "./components/Header.vue";
import ShopVue from "./components/Shop/Shop.vue";
import CartVue from "./components/Cart/Cart.vue";
import FooterVue from "./components/Footer.vue";
import { reactive } from "vue";
import data from "./data/product";
import type { IProduct } from "./interfaces/product.interface";

// const products = reactive<IProduct[]>(data)
// const cart = reactive([]);

// OU

const state = reactive<{
  products: IProduct[];
  cart: IProduct[];
}>({
  products: data,
  cart: [],
});

const addProductInCart = (productId: number): void => {
  const productAdd = state.products.find((product) => product.id === productId);
  if (productAdd && !state.cart.find((product) => product.id === productAdd.id)) {
    state.cart.push({...productAdd});
  }
};


</script>

<template>
  <div class="app-container">
    <HeaderVue class="header" />
    <ShopVue :products="state.products" @addProductInCart="addProductInCart" class="shop" />
    <CartVue class="cart" />
    <FooterVue class="footer" />
  </div>
</template>

<style lang="scss">
@import "./assets/base.scss";
@import "./assets/debug.scss";

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
</style>
