<template>
  <div class="cart-page">
    <div class="container">
      <h2>Корзина</h2>
      <div class="row cart-page__wrap">
        <div class="col-sm-6 col-lg-7">
          <CartFormAdmin v-if="user && user.role === 'admin'" />
          <CartForm :coupon="coupon" v-else />
        </div>
        <div class="col-sm-6 col-lg-5">
          <CartOrder :cart="cart" @promo="promo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import CartForm from "../components/CartForm.vue";
import CartFormAdmin from "../components/CartFormAdmin.vue";
import CartOrder from "../components/CartOrder.vue";
export default {
  components: { CartForm, CartOrder, CartFormAdmin },
  name: "CartPage",
  data() {
    return {
      coupon: "",
    };
  },
  computed: {
    ...mapGetters({
      cart: "goods/getCart",
      user: "auth/getAuthenticated",
    }),
  },
  methods: {
    promo(item) {
      this.coupon = item;
    },
  },
};
</script>

<style scoped>
.cart-page {
  padding: 30px 0;
}

.cart-page h2 {
  margin-bottom: 70px;
}

@media (max-width: 767px) {
  .cart-page h2 {
    margin-bottom: 30px;
  }
}
</style>