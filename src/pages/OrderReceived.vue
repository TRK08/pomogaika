<template>
  <div class="order-received">
    <div class="container">
      <div v-if="paymentStatus" class="status-block status-block-succes">
        <img src="../assets/img/succes-icon.svg" alt="" />
        <h2>Заказ успешно оформлен</h2>
        <p>{{ textInfo }}</p>
        <router-link class="btn-to-home" tag="button" to="/"
          >На главную
        </router-link>
      </div>
      <div v-else class="status-block status-block-error">
        <img src="../assets/img/error-icon.svg" alt="" />
        <h2>При оплате произошла ошибка</h2>
        <p>{{ textInfo }}</p>
        <router-link class="btn-to-home" tag="button" to="/"
          >На главную
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
export default {
  name: "OrderReceived",
  data() {
    return {
      paymentStatus: "",
      textInfo: "",
    };
  },
  methods: {
    getPaymentStatus() {
      let invoice = JSON.parse(localStorage.getItem("invoice_id"));
      console.log(invoice);
      axios
        .get(
          `http://pomogayka96.ru/wp-json/pg/v1/shop/status/?invoice=${invoice}`
        )
        .then((res) => {
          console.log(res.data);
          this.paymentStatus = res.data.result;
          this.textInfo = res.data.text;
          if (res.data.result) {
            this.$store.dispatch("goods/CLEAR_CART");
          }
        });
    },
  },
  computed: {
    ...mapState({
      cart: "goods/cart",
    }),
  },
  created() {
    this.getPaymentStatus();
  },
};
</script>

<style scoped>
.order-received {
  padding: 100px 0;
}

.status-block {
  background-color: var(--yellow-color);
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.status-block img {
  margin-bottom: 10px;
}

.status-block h2 {
  margin-bottom: 10px;
}

.status-block.status-block-error {
  background-color: #d5d5d5;
}

.btn-to-home {
  margin-top: 40px;
  padding: 12px;
  max-width: 500px;
  width: 100%;
  border: none;
  color: #fff;
  background-color: #000;
}
</style>