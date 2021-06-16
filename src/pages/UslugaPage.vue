<template>
  <div>
    <UslugaInfo v-if="singleService" :singleService="singleService" />
    <AutoBrands />
    <UslugaTable v-if="singleService" :serviceTable="singleService.prices" />
    <OnlineRegistr />
    <AboutUs />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import AboutUs from "../components/AboutUs.vue";
import OnlineRegistr from "../components/OnlineRegistr.vue";
import AutoBrands from "../components/ui/AutoBrands.vue";
import UslugaInfo from "../components/UslugaInfo.vue";
import UslugaTable from "../components/UslugaTable.vue";
export default {
  components: { OnlineRegistr, AboutUs, UslugaInfo, AutoBrands, UslugaTable },
  name: "UslugaPage",
  props: ["name"],
  computed: {
    ...mapGetters({
      singleService: "services/getSingleService",
    }),
  },
  created() {
    this.$store.dispatch("services/LOAD_SINGLE_SERVICE", this.name);
  },
};
</script>

<style scoped>
</style>