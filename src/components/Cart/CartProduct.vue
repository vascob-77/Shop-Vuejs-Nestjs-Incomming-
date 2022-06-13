<script setup lang="ts">
import type { IProductCart } from '@/interfaces';

defineProps<{
  product:IProductCart
}>()

const emit = defineEmits<{
  (e:'removeProductInCart',id:number):void;
}>()
</script>


<template>
  <div class="mb-10 p-10 d-flex  product flex-column">
    <strong class="flex-fill mr-10">{{product.title}}</strong>
    <div class="d-flex flex-column">
    <span>Quantité: {{product.quantity}}</span>
    <span class="mr-10">Prix: {{product.price}}€</span>
    <button class="btn btn-danger" @click="emit('removeProductInCart',product.id)">Supprimer</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .product{
    border:var(--border);
    border-radius: var(--border-radius);
    background-color: var(--gray-1);
  }
</style>
