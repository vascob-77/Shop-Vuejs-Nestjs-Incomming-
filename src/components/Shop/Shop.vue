<script setup lang="ts">
import type { IProduct, IFilterUpdate, IFilters } from "@/interfaces";
import ShopProductList from "./ShopProductList.vue";
import ShopFilters from "./ShopFilters.vue";

defineProps<{
  products: IProduct[],
  filters: IFilters,
}>();

const emit = defineEmits<{
  (e: "addProductInCart", id: number): void;
  (e: "updateFilter", updateFilter:IFilterUpdate): void;
}>();
</script>

<template>
  <main class="d-flex p-20">
    <ShopFilters class="shop-filter" :nbr-of-product="products.length" @update-filter="emit('updateFilter',$event)" :filters="filters" />
    <ShopProductList
      class="flex-fill"
      :products="products"
      @add-product-in-cart="emit('addProductInCart', $event)"
    />
  </main>
</template>

<style lang="scss" scoped>
.shop-filter {
  flex: 0 0 200px;
}
</style>
