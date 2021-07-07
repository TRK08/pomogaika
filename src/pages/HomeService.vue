<template>
  <div>
    <ServiceSlider />
    <ServiceServices />
    <AboutUs v-if="!isMobile" />
    <Articles :itemToShow="itemToShow" />
    <OnlineRegistr />
  </div>
</template>

<script>
import AboutUs from "../components/AboutUs.vue";
import Articles from "../components/Articles.vue";
import OnlineRegistr from "../components/OnlineRegistr.vue";
import ServiceServices from "../components/ServiceServices.vue";
import ServiceSlider from "../components/ServiceSlider.vue";
export default {
  name: "HomeService",
  components: {
    AboutUs,
    ServiceSlider,
    ServiceServices,
    Articles,
    OnlineRegistr,
  },
  data() {
    return {
      isMobile: false,
      itemToShow: 3,
    };
  },
  methods: {
    checkWidthScreen() {
      if (window.innerWidth < 768) {
        this.itemToShow = 2;
        this.isMobile = true;
      } else {
        this.itemToShow = 3;
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

<style ,
    scoped>
</style>