<script setup lang="ts">
import type { IFilterUpdate } from '@/interfaces';

const emit = defineEmits<{
  (e: "updateFilter", filterUpdate:IFilterUpdate): void;
}>();
</script>

<template>
  <div >
    <h4 class="mb-20">Trier les prix</h4>
    <section class="mb-20">
      <div class="mb-5 d-flex align-items-center">
        <input
          checked
          type="radio"
          name="priceRange"
          id="0-10000"
          @input="emit('updateFilter', { price: [0, 10000] })"
        />
        <label for="0-10000">tous les prix</label>
      </div>
      <div class="mb-5 d-flex align-items-center">
        <input
          type="radio"
          name="priceRange"
          id="800-15OO"
          @input="emit('updateFilter', { price: [800, 1500] })"
        />
        <label for="800-15OO">800€-1500€</label>
      </div>
      <div class="mb-5 d-flex align-items-center">
        <input
          type="radio"
          name="priceRange"
          id="1500-2000"
          @input="emit('updateFilter', { price: [1500, 2000] })"
        />
        <label for="1500-2000">1500€-2000€</label>
      </div>
      <div class="mb-5 d-flex align-items-center">
        <input
          type="radio"
          name="priceRange"
          id="2000-10000"
          @input="emit('updateFilter', { price: [2000, 10000] })"
        />
        <label for="2000-10000">plus de 2000€</label>
      </div>
    </section>
  </div>
</template>
