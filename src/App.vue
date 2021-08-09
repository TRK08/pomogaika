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
  created() {
    this.$store.dispatch("goods/GET_CART_FROM_STORAGE");
    this.getArticle();
  },
  methods: {
    getArticle() {
      console.log("test");
      axios
        .get(
          "https://pomogayka96.ru/wp-json/pg/v1/shop/product/?brand=TSN&article=123"
        )
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log("error");
          console.log(e);
        });
    },
  },
};
</script>



<style>
</style>





