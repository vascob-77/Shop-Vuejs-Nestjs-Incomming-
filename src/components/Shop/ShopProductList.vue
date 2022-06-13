<script setup lang="ts">
import type { IProduct } from "@/interfaces";
import ShopProduct from "./ShopProduct.vue";

const props = defineProps<{
  products:IProduct[]
}>()

const emit = defineEmits<{
  (e:'addProductInCart',id:number):void;
}>()

</script>


<template>
  <main class="grid p6">
    <ShopProduct v-for="product in products" :product="product" @add-product-in-cart="emit('addProductInCart',$event)"/>
  </main>
</template>

<style lang="scss" scoped>
  .grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: 400px;
    gap:20px;
    color:white;
  }
</style>
