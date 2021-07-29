<template>
  <div class="shop-slider wow fadeIn" data-wow-delay=".5s" id="shop-slider">
    <div class="container">
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <swiper class="swiper-container" ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="item in slides" :key="item.img">
          <div
            class="slide-box"
            :style="{ 'background-image': 'url(' + item.image + ')' }"
          >
            <h2 v-html="item.headder" data-swiper-parallax="-700"></h2>
            <p v-html="item.subheader" data-swiper-parallax="-500"></p>
            <button
              v-scroll-to="'#catalog'"
              class="slider-btn"
              data-swiper-parallax="-300"
            >
              {{ item.button.button_text || "Получить" }}
            </button>
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
        autoplay: {
          delay: 5000,
        },
        spaceBetween: 0,
        // touchRatio: 1,
        loop: true,
        infinite: true,
        speed: 800,
        breakpoints: {
          991: {
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          },
        },
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
    this.$store.dispatch("info/LOAD_SHOP_SLIDES");
  },
};
</script>

<style scoped>
.shop-slider .container {
  position: relative;
}

.swiper-button-prev {
  top: calc(50% - 44px);
  left: 40px;
  color: #fff;
}

.swiper-button-next {
  top: calc(50% - 44px);
  right: 40px;
  color: #fff;
}

@media (max-width: 991px) {
  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
}
</style>