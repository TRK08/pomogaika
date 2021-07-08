<template>
  <div class="good-page">
    <div class="container">
      <h2 class="good-title">Информация о товаре</h2>
      <div class="good-info row">
        <div class="col-sm-8 good-info-text">
          <h2>{{ item.name }}</h2>
          <p>{{ item.descr }}</p>
          <div class="good-info-block">
            <div class="good-info-names">
              <span>Артикул: </span>
              <span>Производитель: </span>
              <span>Наличие: </span>
            </div>
            <div class="good-info-value">
              <span>{{ item.article }} </span>
              <span>{{ item.brand }} </span>
              <span>{{ item.availability }} </span>
            </div>
          </div>
        </div>
        <div class="col-sm-4 good-info-img"></div>
      </div>
      <GoodPrices />
    </div>
  </div>
</template>

<script>
import GoodPrices from "../components/GoodPrices.vue";
export default {
  components: { GoodPrices },
  name: "SingleGood",
  data() {
    return {
      item: {
        name: "Бензобак для Nissan GTR 2007 года",
        descr:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque viverra gravida nec, orci, risus amet. Rutrum pellentesque vitae tempus neque, dictum pharetra. Convallis ullamcorper dolor vestibulum viverra et orci. Habitant facilisis iaculis ullamcorper at semper pulvinar convallis aliquam.",
        article: "65894238481",
        brand: "Nissan",
        availability: "В наличии",
      },
    };
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