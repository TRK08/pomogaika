<template>
  <div class="cart-order-component__wrap">
    <div class="cart-order-component" v-if="cart && cart.length">
      <h4 class="cart-order-title">Информация о заказе</h4>
      <p v-if="user && user.role !== 'administrator'">
        Наш менеджер свяжется с вами для уточнения способа доставки и ее
        стоимости
      </p>
      <div class="cart-order__wrap">
        <div
          class="cart-order-item"
          v-for="(good, index) in cart"
          :key="good.number"
        >
          <div class="cart-order-item-header">
            <div class="cart-order-item-img">
              <img v-if="good.image" :src="good.image" alt="" />
              <img v-else src="../assets/img/no-photo.jpg" alt="" />
            </div>
            <div class="cart-order-item-descr">
              <h5>{{ good.brand }}</h5>
              <span> Артикул: {{ good.number }} </span>
            </div>
          </div>
          <div class="cart-order-item-body">
            <div class="cart-order-item-functions">
              <!-- <div class="cart-order-item-favorite">
              <img src="../assets/img/star.svg" alt="" />
              <span>В избранное</span>
            </div> -->
              <div
                class="cart-order-item-remove"
                @click="deleteFromCart(index)"
              >
                <img src="../assets/img/remove.svg" alt="" />
                <span>Удалить</span>
              </div>
            </div>
            <div class="cart-order-item-counter">
              <img
                @click="quantityMinus(index)"
                src="../assets/img/minus.svg"
                alt=""
              />
              <span> {{ good.quantity }} шт </span>
              <img
                @click="quantityPlus(index)"
                src="../assets/img/plus.svg"
                alt=""
              />
            </div>
          </div>
          <h4 class="cart-order-item-price">
            {{ Math.round(good.price) }} руб
          </h4>
        </div>
      </div>
      <div class="cart-order-sum" v-if="user && user.role !== 'administrator'">
        Сумма заказа: {{ totalPrice }}
      </div>
      <div
        class="cart-order-coupon"
        v-if="user && user.role !== 'administrator'"
      >
        <span>Промокод</span>
        <input
          @input="setPromo"
          type="text"
          v-model="promo"
          placeholder="Введите промокод здесь"
        />
        <small> {{ status }} </small>
      </div>
      <div
        class="cart-order-total-sum"
        v-if="user && user.role !== 'administrator'"
      >
        <h4>Итого к оплате:</h4>
        <span>{{ totalPrice - couponAmount }} руб</span>
      </div>
    </div>
    <div v-else class="cart-order-component">
      <h4 class="cart-order-title empty-cart-order-title">Корзина пуста</h4>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CartOrder",
  props: {
    cart: {
      type: Array,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      promo: "",
      status: "",
      couponAmount: 0,
    };
  },
  computed: {
    totalPrice() {
      let sum = 0;
      if (this.cart) {
        for (let item of this.cart) {
          if (item.price && item.quantity) {
            sum += item.price * item.quantity;
          }
        }
      }
      return Math.round(sum);
    },
  },
  methods: {
    quantityMinus(index) {
      this.$store.dispatch("goods/QUANTITY_MINUS", index);
    },
    quantityPlus(index) {
      this.$store.dispatch("goods/QUANTITY_PLUS", index);
    },
    deleteFromCart(index) {
      this.$store.dispatch("goods/DELETE_FROM_CART", index);
    },
    setPromo() {
      this.$emit("promo", this.promo);
      axios
        .get(
          `https://pomogayka96.ru/wp-json/pg/v1/get/promo?promo=${this.promo}`
        )
        .then((res) => {
          if (res.data.code === "400") {
            this.status = res.data.msg;
          }
          if (res.data.code === "500") {
            this.status = res.data.msg;
          }
          if (res.data.code === "200") {
            this.status = "Промокод успешно применен";
            this.couponAmount = res.data.amount;
          }
        });
    },
  },
};
</script>

<style scoped>
</style>