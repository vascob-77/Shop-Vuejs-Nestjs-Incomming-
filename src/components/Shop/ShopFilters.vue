<script setup lang="ts">
import type { IFilters, IFilterUpdate } from "@/interfaces";

defineProps<{
  filters: IFilters;
}>();

const emit = defineEmits<{
  (e: "updateFilter", filterUpdate:IFilterUpdate): void;
}>();

const handleValue = (event:Event) => {
  const target = event.target as HTMLInputElement;
  emit('updateFilter', {search:target.value})
}
</script>

<template>
  <div class="p-20">
    <section class="mb-20">
      <p class="mb-10">Rechercher !</p>
      <input :value="filters.search" @input="handleValue" type="text" placeholder="Rechercher" />
    </section>
  </div>
</template>

<style></style>
