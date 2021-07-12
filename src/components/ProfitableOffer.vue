<template>
  <section class="profitable-offer wow fadeIn">
    <div class="container">
      <h2 class="profitable-offer-title">Выгодные предложения</h2>
      <div class="row">
        <div
          class="offer__wrap col-xs-6 col-sm-4"
          v-for="offer in offers"
          :key="offer.price"
        >
          <div class="offer-item">
            <div class="offer-item-img-box">
              <img :src="offer.img" alt="" />
              <div class="offer-item-discount">- {{ offer.discount }}</div>
            </div>
            <div class="offer-item-body">
              <p class="offer-item-title">{{ offer.title }}</p>
              <p class="offer-item-descr">{{ offer.descr }}</p>
              <p class="offer-item-price">{{ offer.price }}</p>
              <button class="offer-item-btn">Подробнее</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProfitableOffer",
  data() {
    return {
      offers: [
        {
          img: require("../assets/img/vozdushniy-filtr.png"),
          discount: "10%",
          title: "Воздушные фильтры",
          descr: "Воздушный фильтр для Toyota Camry",
          price: "1 500 ₽ ",
        },
        {
          img: require("../assets/img/vozdushniy-filtr.png"),
          discount: "20%",
          title: "Воздушные фильтры",
          descr: "Воздушный фильтр для Toyota Camry",
          price: "2 500 ₽ ",
        },
        {
          img: require("../assets/img/vozdushniy-filtr.png"),
          discount: "30%",
          title: "Воздушные фильтры",
          descr: "Воздушный фильтр для Toyota Camry",
          price: "3 500 ₽ ",
        },
      ],
    };
  },
  methods: {
    setMobileOffers() {
      if (window.innerWidth < 768) {
        this.offers = this.offers.slice(0, 2);
      }
    },
  },
  created() {
    this.setMobileOffers();
  },
};
</script>

<style scoped>
</style>