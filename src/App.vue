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
import axios from "axios";

export default {
  components: { Preloader, Header, Footer },
  computed: {
    ...mapState("auth", ["preload"]),
  },
  data() {
    return {};
  },
  methods: {
    getCartId() {
      let href = window.location.href.split("/");
      if (href[href.length - 2] === "cart") {
        this.$store.dispatch("goods/GET_ADMIN_CART", href[href.length - 1]);
        this.$router.push("/cart");
        setTimeout(() => {
          this.$store.commit("auth/PRELOADER");
        }, 500);
      }
    },
  },
  created() {
    this.$store.dispatch("goods/GET_CART_FROM_STORAGE");
    this.getCartId();
  },
};
</script>



<style>
</style>





