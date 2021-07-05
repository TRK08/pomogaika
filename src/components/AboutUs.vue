<template>
  <section class="about-component" id="about-us">
    <div class="container">
      <h2
        class="about-component-title col-12"
        :class="{ 'about-component--yellow-text': routePath !== '/' }"
      >
        О нас
      </h2>
      <div class="about-component-text row col-12" v-if="routePath === '/'">
        <div class="col-sm-6 col-6">
          <p v-html="aboutShop.txt1"></p>
        </div>
        <div class="col-sm-6 col-6">
          <p v-html="aboutShop.txt2"></p>
        </div>
      </div>
      <div class="about-component-text row col-12" v-else>
        <div class="col-sm-6 col-6">
          <p v-html="aboutService.txt1"></p>
        </div>
        <div class="col-sm-6 col-6">
          <p v-html="aboutService.txt2"></p>
        </div>
      </div>
      <div class="about-component-map row col-12">
        <div class="col-sm-4" v-if="routePath === '/'">
          <div
            class="about-component-map-left"
            v-for="item in aboutShop.numbers"
            :key="item.txt1"
          >
            <span class="about-component-num about-component--yellow-text">
              {{ item.number }}
            </span>
            <div>
              <h3 class="about-component--yellow-text">
                {{ item.txt.headder }}
              </h3>
              <p>{{ item.txt.description }}</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4" v-else>
          <div
            class="about-component-map-left"
            v-for="item in aboutService.numbers"
            :key="item.txt1"
          >
            <span class="about-component-num">
              {{ item.number }}
            </span>
            <div>
              <h3 class="">
                {{ item.txt.headder }}
              </h3>
              <p>{{ item.txt.description }}</p>
            </div>
          </div>
        </div>
        <div class="map__wrap col-sm-8">
          <yandex-map
            :coords="coords"
            :zoom="14"
            ymap-class="map-instance__wrap"
            :controls="controls"
            :scroll-zoom="scrollZoom"
          >
            <ymap-marker
              :coords="markerCoords"
              marker-id="123"
              :icon="markerIcon"
            />
          </yandex-map>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AboutUs",
  data() {
    return {
      routePath: this.$route.path,
      coords: [56.80982010179984, 60.579143003767754],
      markerCoords: [56.810026077591026, 60.57891459690633],
      controls: ["zoomControl"],
      scrollZoom: false,
      markerIcon: {
        layout: "default#imageWithContent",
        imageHref: require("../assets/img/map-point.svg"),
        imageSize: [30, 30],
        imageOffset: [0, -30],
      },
    };
  },
  computed: {
    ...mapGetters({
      aboutShop: "info/getShopText",
      aboutService: "info/getServiceText",
    }),
  },
  created() {
    this.$store.dispatch("info/LOAD_SHOP_TEXT");
    this.$store.dispatch("info/LOAD_SERVICE_TEXT");
  },
};
</script>

<style scoped>
</style>