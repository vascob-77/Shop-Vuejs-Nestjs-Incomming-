<template>
  <main class="product d-flex flex-column">
    <div class="p-10 d-flex flex-column">
      <p>Crypto</p>
      <h4>Bitcoins</h4>
      <p>Le btc est un sttable coins qui va augmenter</p>
      <div class="d-flex align-items-center">
        <strong class="flex-fill"> Prix: 35000 euros </strong>
        <button class="btn btn-primary">Ajouter au panier</button>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts"></script>

<style lang="scss" scoped>
  .product {
    color:black;
    background-color: #ffffff;
    border: var(--border);
    border-radius: var(--border-radius);
  }
</style>
