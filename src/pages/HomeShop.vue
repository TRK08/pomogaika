<template>
  <section class="home-shop">
    <ShopSlider />
    <ProfitableOffer />
    <AboutUs v-if="!isMobile" />
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
    return {
      isMobile: false,
    };
  },
  methods: {
    checkWidthScreen() {
      if (window.innerWidth < 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
  },
  created() {
    this.checkWidthScreen();
    window.addEventListener("resize", this.checkWidthScreen);
  },
};
</script>

<style scoped>
</style>