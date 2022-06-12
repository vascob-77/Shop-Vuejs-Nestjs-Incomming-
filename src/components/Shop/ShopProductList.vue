<template>
  <main class="grid p6@)">
    <ShopProduct/>
    <ShopProduct/>
    <ShopProduct/>
    <ShopProduct/>
    <ShopProduct/>
    <ShopProduct/>
    <ShopProduct/>
    <ShopProduct/>
  </main>
</template>
<script setup lang="ts">
import ShopProduct from "./ShopProduct.vue";</script>

<style lang="scss" scoped>
  .grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: 400px;
    gap:20px;
    color:white;
  }
</style>
