<script setup>
import {ref} from 'vue'
import {productsStore} from "./store/products";

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-fw pi-home',
    to: '/'
  },
  {
    label: 'Cart',
    icon: 'pi pi-fw pi-shopping-cart',
    to: '/cart'
  }
]);

const productStore = productsStore();

const products = productStore.getProducts;
</script>

<template>
  <div>
    <Menubar :model="items">
      <template #start>
        <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" height="40"
             class="mr-2">
      </template>
    </Menubar>
    <div class="p-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>

</style>
