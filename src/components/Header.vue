<template>
  <header class="d-flex align-items-center px-20">
    <a href="#" class="d-flex flex-row align-items-center mr-20">
      <img src="../assets/logo.svg" alt="logo vasco shop" />
      <span>Vasco</span>
    </a>
    <ul class="d-flex flex-fill ">
      <li class="mr-10"><a href="#">Boutique</a></li>
      <li><a href="#">Admin</a></li>
    </ul>
    <ul class="d-flex">
      <li class="mr-10"><a href="#">Inscription</a></li>
      <li><a href="#">Connexion</a></li>
    </ul>
  </header>
</template>
<script setup lang="ts"></script>

<style lang="scss" scoped>
header {
  background-color: var(--primary-1);
  a {
    color:var(--text-primary-color);
    font-size: 21px;
    img {
      width: 20px;
    }
    span {
      font-weight: 700;
      font-size: 21px;
    }
  }
}
</style>
