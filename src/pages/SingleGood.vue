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
              <span v-if="good.availability">{{ good.availability }} </span>
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
      <GoodPrices :goodCrosses="good.crosses" />
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
.good-page {
  padding: 30px 0;
}

.good-title {
  margin-bottom: 70px;
}

.good-info {
  margin-bottom: 30px;
}

.good-info-text p {
  margin: 30px 0;
  max-width: 620px;
}

.good-info-block {
  display: flex;
}

.good-info-names,
.good-info-value {
  display: flex;
  flex-direction: column;
}

.good-info-names span:not(:last-child),
.good-info-value span:not(:last-child) {
  margin-bottom: 15px;
}

.good-info-names {
  margin-right: 30px;
}
</style>