<template>
  <div class="grid">
    <div class="col-12 md:col-3" v-for="product in products" :key="product.id">
      <ProductCard :product="product"/>
    </div>
  </div>
</template>

<script setup>
import ProductCard from "../components/Product/ProductCard.vue";
import {productsStore} from "../store/products";

const productStore = productsStore();

const products = productStore.getProducts;
</script>

<style scoped>

</style>
