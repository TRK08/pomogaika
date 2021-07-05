<template>
  <section class="home-shop">
    <ShopSlider />
    <CarBrandsList />
    <ProfitableOffer />
    <AboutUs />
  </section>
</template>

<script>
import AboutUs from "../components/AboutUs.vue";
import CarBrandsList from "../components/CarBrandsList.vue";
import ProfitableOffer from "../components/ProfitableOffer.vue";
import ShopSlider from "../components/ShopSlider.vue";
export default {
  components: { ShopSlider, AboutUs, ProfitableOffer, CarBrandsList },
  name: "HomeShop",
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>