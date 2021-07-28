<template>
  <div class="good-page" v-if="good">
    <div class="container">
      <h2 class="good-title">Информация о товаре</h2>
      <div class="good-info row">
        <div class="col-sm-8 good-info-text">
          <h2 v-if="good.descr">{{ good.descr }}</h2>
          <p></p>
          <div class="good-info-block">
            <div class="good-info-names">
              <span>Артикул: </span>
              <span>Производитель: </span>
              <span>Наличие: </span>
            </div>
            <div class="good-info-value">
              <span v-if="good.number">{{ good.number }} </span>
              <span v-if="good.brand">{{ good.brand }} </span>
              <span v-if="good.crosses"> В наличии </span>
              <span v-else> Нет в наличии</span>
            </div>
          </div>
        </div>
        <div class="col-sm-4 good-info-img">
          <img
            v-if="good.images.length"
            :src="`https://pubimg.4mycar.ru/images/preview/${good.images[0].name}`"
            :alt="good.descr"
          />
        </div>
      </div>
      <GoodPrices
        v-if="good.crosses.length"
        :goodCrosses="good.crosses"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import GoodPrices from "../components/GoodPrices.vue";
export default {
  components: { GoodPrices },
  name: "SingleGood",
  data() {
    return {};
  },
  methods: {
    addToCart(index) {
      let img = "";
      if (this.good.images.length) {
        img = `https://pubimg.4mycar.ru/images/preview/${this.good.images[0].name}`;
      }
      let goodInfo = {
        brand: this.good.crosses[index].brand,
        number: this.good.crosses[index].number,
        quantity: 1,
        image: img,
      };
      this.$store.dispatch("goods/ADD_TO_CART", goodInfo);
    },
  },
  computed: {
    ...mapGetters({
      good: "goods/getGoods",
    }),
  },
  created() {
    this.$store.dispatch("goods/LOAD_GOODS");
  },
};
</script>

<style scoped>
</style>