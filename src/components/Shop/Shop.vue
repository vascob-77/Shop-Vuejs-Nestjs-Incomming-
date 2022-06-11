<script setup lang="ts">
import ShopProductList from "./ShopProductList.vue";
</script>


<template>
  <main class="grid p-20">
    <ShopProductList />
    <ShopProductList />
    <ShopProductList />
    <ShopProductList />
    <ShopProductList />
    <ShopProductList />
    <ShopProductList />
    <ShopProductList />
  </main>
</template>

<style lang="scss" scoped>
  .grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: 300px;
    gap:20px;
    color:white;
  }
</style>
