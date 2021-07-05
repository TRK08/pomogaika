<template>
  <div class="shop-slider" id="shop-slider">
    <div class="container">
      <swiper class="swiper-container" ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="item in slides" :key="item.img">
          <div
            class="slide-box"
            :style="{ 'background-image': 'url(' + item.image + ')' }"
          >
            <h2 data-swiper-parallax="-700" v-html="item.headder"></h2>
            <p data-swiper-parallax="-500" v-html="item.subheader"></p>
            <router-link
              tag="button"
              :to="item.button.button_link"
              class="slider-btn"
              data-swiper-parallax="-300"
            >
              {{ item.button.button_text }}
            </router-link>
          </div>
        </swiper-slide>
      </swiper>
      <div class="under-slider__wrap hidden-xs">
        <div class="row">
          <div
            class="under-slider-block col-sm-4"
            v-for="item in underSlider"
            :key="item.text"
          >
            <span class="yellow-cube"></span>
            <p v-html="item.text"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ShopSlider",
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        parallax: true,
        autoheight: true,
        autoplay: {
          delay: 5000,
        },
        spaceBetween: 0,
        touchRatio: 1,
        loop: true,
        infinite: true,
        speed: 800,
      },

      underSlider: [
        {
          text: "Широкий ассортимент запчастей <br> в наличии и под заказ",
        },
        {
          text: "Доставка запчастей курьером",
        },
        {
          text: "Доставка быстро и в срок",
        },
      ],
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },

    ...mapGetters({
      slides: "info/getShopSlides",
    }),
  },
  mounted() {
    this.swiper.slideTo(1, false, false);
    this.$store.dispatch("info/LOAD_SHOP_SLIDES");
  },
};
</script>

<style scoped>
</style>