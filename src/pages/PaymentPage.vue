<template>
  <div class="payment-page">
    <div class="container">
      <h2>Информация об оплате</h2>

      <div
        class="payment-page-block"
        v-for="text in paymentText"
        :key="text.title"
      >
        <h3 v-html="text.title"></h3>
        <p v-html="text.text"></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PaymentPage",
  computed: {
    ...mapGetters({
      paymentText: "info/getPaymentText",
    }),
  },
  created() {
    this.$store.dispatch("info/LOAD_PAYMENT_INFO");
  },
};
</script>

<style scoped>
</style>