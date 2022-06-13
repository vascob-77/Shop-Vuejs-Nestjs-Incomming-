<script setup lang="ts">
import type { IProduct } from '@/interfaces';

defineProps<{
  product:IProduct
}>()

const emit = defineEmits<{
   (e:'addProductInCart',id:number):number;
}>()

</script>
<template>
  <main class="product d-flex flex-column">
    <div class="p-10 d-flex flex-column">
      <p>Crypto</p>
      <h4>{{product.title}}</h4>
      <p>{{product.description}}</p>
      <div class="d-flex align-items-center">
        <strong class="flex-fill"> Prix: {{product.price}}€</strong>
        <button class="btn btn-primary" @click="emit('addProductInCart',product.id)">Ajouter au panier</button>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.product {
  color: black;
  background-color: #ffffff;
  border: var(--border);
  border-radius: var(--border-radius);
}
</style>
