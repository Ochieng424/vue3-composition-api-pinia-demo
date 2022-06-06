<template>
  <div>
    <DataTable :value="cart" responsiveLayout="scroll">
      <template #header>
        <div class="table-header">
          Cart
        </div>
      </template>
      <Column field="id" header="Id"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="description" header="Description"></Column>
      <Column header="Image">
        <template #body="slotProps">
          <img :src="slotProps.data.image" :alt="slotProps.data.name"
               class="product-image"/>
        </template>
      </Column>
      <Column field="price" header="Price in ($)">
        <template #body="slotProps">
          {{ slotProps.data.price }}
        </template>
      </Column>
      <Column header="Remove from cart">
        <template #body="slotProps">
          <Button @click="productStore.removeFromCart(slotProps.data.name)" icon="pi pi-times" class="p-button-danger"/>
        </template>
      </Column>
      <template #footer>
        In total there are {{ cart ? cart.length : 0 }} products.
      </template>
    </DataTable>
  </div>
</template>

<script>
import {productsStore} from "../store/products";

export default {
  name: "Cart",
  setup() {
    const productStore = productsStore();

    return {
      productStore,
      cart: productStore.getCart,
    }
  }
}
</script>

<style scoped>

</style>
