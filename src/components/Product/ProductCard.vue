<template>
  <Card>
    <template #header>
      <img :alt="product.name" :src="product.image">
    </template>
    <template #title>
      {{ product.name }}
    </template>
    <template #content>
      <p>
        <strong>Price: $</strong>
        {{ product.price }}
      </p>
      <p>
        <strong>Description:</strong>
        {{ product.description }}
      </p>

    </template>
    <template #footer>
      <Button v-if="!productStore.productInCart(product.id)" @click="productStore.addToCart(product)" icon="pi pi-check" label="Add to cart"/>
      <Button v-else @click="productStore.removeFromCart(product)" icon="pi pi-times" label="Remove from Cart" class="p-button-secondary"/>
    </template>
  </Card>
</template>

<script>
import { productsStore } from "../../store/products";

export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const productStore = productsStore();

    function addToCart(cartProduct) {
      productStore.addToCart(cartProduct);
    }

    return {
      product: props.product,
      productStore,
      addToCart
    }
  }
}
</script>

<style scoped>

</style>
