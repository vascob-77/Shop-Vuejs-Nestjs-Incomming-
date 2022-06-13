<script setup lang="ts">
import type { IProductCart } from "@/interfaces";
import { computed } from "vue";
import CartProductList from "./CartProductList.vue";
const props = defineProps<{
  cart: IProductCart[];
}>();

const emit = defineEmits<{
  (e: "removeProductInCart", id: number): void;
}>();

const totalPrice = computed(() =>
  props.cart.reduce((acc, product) =>acc + product.price * product.quantity,0)
);
</script>

<template>
  <div class="p-20 d-flex flex-column">
    <h1 class="mb-10">PANIER</h1>
    <CartProductList
      class="flex-fill"
      @remove-product-in-cart="emit('removeProductInCart', $event)"
      :cart="cart"
    />
    <button class="btn btn-success">Commander ({{totalPrice}}€)</button>
  </div>
</template>

<style lang="scss" scoped></style>
