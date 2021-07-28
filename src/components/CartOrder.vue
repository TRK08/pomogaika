<template>
  <div class="cart-order-component__wrap">
    <div class="cart-order-component" v-if="cart.length">
      <h4 class="cart-order-title">Информация о заказе</h4>
      <p>
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
          <h4 class="cart-order-item-price">{{ good.price }} руб</h4>
        </div>
      </div>
      <div class="cart-order-sum">Сумма заказа: {{ totalPrice }}</div>
      <div class="cart-order-coupon">
        <span>Промокод</span>
        <input type="text" placeholder="Введите промокод здесь" />
      </div>
      <div class="cart-order-total-sum">
        <h4>Итого к оплате:</h4>
        <span>{{ totalPrice }} руб</span>
      </div>
    </div>
    <div v-else class="cart-order-component">
      <h4 class="cart-order-title empty-cart-order-title">Корзина пуста</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartOrder",
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      goods: [
        {
          title: "Набор амортизаторов для Dodge Charger",
          article: "54891489184654754",
          price: 15000,
          count: 1,
        },
        {
          title: "Крышка топливного бака Toyota Crown",
          article: "84451512146811",
          price: 600,
          count: 3,
        },
      ],
    };
  },
  computed: {
    totalPrice() {
      let sum = 0;
      this.goods.forEach((good) => {
        sum = sum + good.price;
      });
      return sum;
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
  },
};
</script>

<style scoped>
</style>