<script setup lang="ts">
import type { IProduct } from "@/interfaces/product.interface";
import ShopProductList from "./ShopProductList.vue";

defineProps<{
  products: IProduct[],
}>()

const emit = defineEmits<{
 (e:'addProductInCart',id:number):void;
}>()

</script>


<template>
  <main class="grid p-20">
    <ShopProductList :products="products" @addProductInCart="emit('addProductInCart',$event)" />
  </main>
</template>

<style lang="scss" scoped>
  
</style>
