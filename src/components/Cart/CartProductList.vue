<script setup lang="ts">
import type { IProductCart } from "@/interfaces";
import CartProduct from "./CartProduct.vue";

defineProps<{
  cart:IProductCart[]
}>()

const emit = defineEmits<{
  (e:'removeProductInCart',id:number):void;
}>()


</script>


<template>
  <div class="mb-10">
     <CartProduct v-for="(product,index) in cart" :product="product" @remove-product-in-cart="emit('removeProductInCart',$event)" />
  </div>
</template>

<style lang="scss" scoped></style>
