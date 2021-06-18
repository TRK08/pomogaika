<template>
  <div class="cart-page">
    <div class="container">
      <h2>Корзина</h2>
      <div class="row">
        <div class="col-lg-7">
          <CartForm />
        </div>
        <div class="col-lg-5">
          <CartOrder />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartForm from "../components/CartForm.vue";
import CartOrder from "../components/CartOrder.vue";
export default {
  components: { CartForm, CartOrder },
  name: "CartPage",
};
</script>

<style scoped>
.cart-page {
  padding: 30px 0;
}

.cart-page h2 {
  margin-bottom: 70px;
}
</style>