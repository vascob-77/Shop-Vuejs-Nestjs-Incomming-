<script setup lang="ts">
import HeaderVue from "./components/Header.vue";
import ShopVue from "./components/Shop.vue";
import CartVue from "./components/Cart.vue";
import FooterVue from "./components/Footer.vue";
</script>

<template>
  <div class="app-container">
    <HeaderVue class="header b1" />
    <ShopVue class="shop b2" />
    <CartVue class="cart b3" />
    <FooterVue class="footer b4" />
  </div>
</template>

<style>
@import "./assets/base.scss";
@import "./assets/debug.scss";

.app-container{
  min-height: 100vh;
  display: grid;
  grid-template-areas: "header header" "shop cart" "footer footer";
  grid-template-columns:75% 25%;
  grid-template-rows:48px auto 48px;
}

.header {
  grid-area: header;
}
.shop {
  grid-area: shop;
}
.cart {
  grid-area: cart;
}
.footer {
  grid-area: footer;
}
</style>
