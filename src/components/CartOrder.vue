<template>
  <div class="cart-order-component">
    <h4 class="cart-order-title">Информация о заказе</h4>
    <p>
      Наш менеджер свяжется с вами для уточнения способа доставки и ее стоимости
    </p>
    <div class="cart-order__wrap">
      <div class="cart-order-item" v-for="good in goods" :key="good.article">
        <div class="cart-order-item-header">
          <div class="cart-order-item-img">
            <img v-if="good.img" src="" alt="" />
          </div>
          <div class="cart-order-item-descr">
            <h5>{{ good.title }}</h5>
            <span> Артикул: {{ good.article }} </span>
          </div>
        </div>
        <div class="cart-order-item-body">
          <div class="cart-order-item-functions">
            <div class="cart-order-item-favorite">
              <img src="../assets/img/star.svg" alt="" />
              <span>В избранное</span>
            </div>
            <div class="cart-order-item-remove">
              <img src="../assets/img/remove.svg" alt="" />
              <span>Удалить</span>
            </div>
          </div>
          <div class="cart-order-item-counter">
            <img src="../assets/img/minus.svg" alt="" />
            <span> {{ good.count }} шт </span>
            <img src="../assets/img/plus.svg" alt="" />
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
</template>

<script>
export default {
  name: "CartOrder",
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
};
</script>

<style scoped>
</style>