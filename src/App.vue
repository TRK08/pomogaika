<template>
  <div id="app">
    <Preloader :activate="preload" />

    <Header />

    <router-view></router-view>

    <Footer />
  </div>
</template>

<script>
import "./assets/css/normalize.css";
import "./assets/css/style.css";

import { mapState } from "vuex";
import Header from "./components/ui/Header.vue";
import Footer from "./components/ui/Footer.vue";
import Preloader from "./components/ui/Preloader.vue";

export default {
  components: { Preloader, Header, Footer },
  computed: {
    ...mapState("auth", ["preload"]),
  },
};
</script>



<style>
</style>





