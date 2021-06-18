<template>
  <div>
    <UslugaInfo v-if="singleService" :singleService="singleService" />
    <AutoBrands />
    <UslugaTable
      v-if="!isMobile && singleService"
      :serviceTable="singleService.prices"
    />
    <MobileUslugaTable
      v-if="isMobile && singleService"
      :serviceTable="singleService.prices"
    />
    <OnlineRegistr />
    <AboutUs />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import AboutUs from "../components/AboutUs.vue";
import MobileUslugaTable from "../components/MobileUslugaTable.vue";
import OnlineRegistr from "../components/OnlineRegistr.vue";
import AutoBrands from "../components/ui/AutoBrands.vue";
import UslugaInfo from "../components/UslugaInfo.vue";
import UslugaTable from "../components/UslugaTable.vue";
export default {
  components: {
    OnlineRegistr,
    AboutUs,
    UslugaInfo,
    AutoBrands,
    UslugaTable,
    MobileUslugaTable,
  },
  name: "UslugaPage",
  props: ["name"],
  data() {
    return {
      isMobile: false,
    };
  },
  methods: {
    updateWidth() {
      if (window.innerWidth <= 672) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
  },
  computed: {
    ...mapGetters({
      singleService: "services/getSingleService",
    }),
  },
  created() {
    this.$store.dispatch("services/LOAD_SINGLE_SERVICE", this.name);
    this.updateWidth();
  },
};
</script>

<style scoped>
</style>