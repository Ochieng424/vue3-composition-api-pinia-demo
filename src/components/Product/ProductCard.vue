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
      <Button v-if="!productStore.productInCart" icon="pi pi-check" label="Add to cart"/>
      <Button v-else icon="pi pi-times" label="Remove from Cart" class="p-button-secondary" style="margin-left: .5em"/>
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
    return {
      product: props.product,
      productStore
    }
  }
}
</script>

<style scoped>

</style>
