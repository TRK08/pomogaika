<template>
  <div>
    <ServiceSlider />
    <ServiceServices />
    <AboutUs />
    <Articles />
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
};
</script>

<style ,
    scoped>
</style>