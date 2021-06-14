<template>
  <section class="home-shop">
    <ShopSlider />
    <ProfitableOffer />
    <AboutUs />
  </section>
</template>

<script>
import AboutUs from "../components/AboutUs.vue";
import ProfitableOffer from "../components/ProfitableOffer.vue";
import ShopSlider from "../components/ShopSlider.vue";
export default {
  components: { ShopSlider, AboutUs, ProfitableOffer },
  name: "HomeShop",
  data() {
    return {};
  },
};
</script>

<style scoped>
h2 {
  color: red;
}
</style>