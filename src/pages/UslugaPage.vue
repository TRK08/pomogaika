<template>
  <div>
    <UslugaInfo />
    <AutoBrands />
    <OnlineRegistr />
    <AboutUs />
  </div>
</template>

<script>
import AboutUs from "../components/AboutUs.vue";
import OnlineRegistr from "../components/OnlineRegistr.vue";
import AutoBrands from "../components/ui/AutoBrands.vue";
import UslugaInfo from "../components/UslugaInfo.vue";
export default {
  components: { OnlineRegistr, AboutUs, UslugaInfo, AutoBrands },
  name: "UslugaPage",
};
</script>

<style scoped>
</style>