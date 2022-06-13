<script setup lang="ts">
import type { IFilters, IFilterUpdate } from "@/interfaces";
import type { Category } from "@/interfaces";
import ShopPrice from "./ShopPrice.vue";

defineProps<{
  filters: IFilters;
  nbrOfProduct:number;
  
}>();

const emit = defineEmits<{
  (e: "updateFilter", filterUpdate: IFilterUpdate): void;
}>();

const handleValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("updateFilter", { search: target.value });
};
</script>

<template>
  <div class="p-20">
    <section class="mb-20">
      <p class="mb-10">Rechercher !</p>
      <input
        :value="filters.search"
        @input="handleValue"
        type="text"
        placeholder="Rechercher"
        class="mb-20"
      />
      <ShopPrice @update-filter="emit('updateFilter', $event)" :filters="filters" />
      <h4>Trier par catégorie</h4>
      <p
        class="category"
        :class="{selected: filters.category === category}"
        v-for="category in (['all','futur ?','caca ?','trolling ?'] as Category[])"
        @click="emit('updateFilter', { category })"
      >
        {{ category }}
      </p>
    </section>
    <small>Nombre de résultats: {{nbrOfProduct}}</small>
    <button class="btn btn-danger" @click="emit('updateFilter',{ price: [0, 10000] })">Supprimer les filtres</button>
  </div>
</template>

<style lang="scss" scoped>
  .category {
    font-size:14px ;
    line-height: 18px;
    cursor: pointer;
    &:hover{
      text-decoration: underline;
    }
  }

</style>
