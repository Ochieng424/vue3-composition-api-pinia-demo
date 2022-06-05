<script setup>
import {ref} from 'vue'
import ProductCard from "./components/Product/ProductCard.vue";
import { productsStore } from "./store/products";

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-fw pi-home',
  },
  {
    label: 'Cart',
    icon: 'pi pi-fw pi-shopping-cart',
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
      <template #end>
        <InputText placeholder="Search" type="text"/>
      </template>
    </Menubar>
    <div class="p-5">
      <div class="grid">
        <div class="col-12 md:col-3" v-for="product in products" :key="product.id">
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>
