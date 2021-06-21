<template>
  <section class="service-slider">
    <div class="container">
      <div class="swiper__wrap row">
        <!-- swiper1 -->
        <swiper
          class="swiper-container gallery-top"
          :options="swiperOptionTop"
          ref="swiperTop"
        >
          <swiper-slide
            class="slides"
            v-for="(slide, index) in slides"
            :key="index"
          >
            <div
              class="slide-box"
              :style="{ 'background-image': 'url(' + slide.image + ')' }"
            >
              <h2 data-swiper-parallax="-700" v-html="slide.headder"></h2>
              <p data-swiper-parallax="-500" v-html="slide.subheader"></p>
              <router-link
                tag="button"
                :to="slide.button.button_link"
                class="slider-btn"
                data-swiper-parallax="-300"
              >
                {{ slide.button.button_text || "Получить" }}
              </router-link>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <!-- swiper2 Right -->
        <swiper
          class="swiper gallery-Right visible-lg"
          :options="swiperOptionRight"
          ref="swiperRight"
        >
          <swiper-slide
            class="swiper-slide"
            v-for="slide in slides"
            :key="slide.image"
          >
            <div
              class="slide-box"
              :style="{
                'background-image': 'url(' + slide.image + ')',
              }"
            >
              <h2 v-html="slide.headder"></h2>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ServiceSlider",
  data() {
    return {
      swiperOptionTop: {
        slidesPerView: 1,
        autoplay: true,
        loopedSlides: 25,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      swiperOptionRight: {
        slidesPerView: 3,
        loop: true,
        loopedSlides: 25,
        spaceBetween: 30,
        direction: "vertical",
      },
    };
  },
  computed: {
    ...mapGetters({
      slides: "info/getServiceSlides",
    }),
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperRight = this.$refs.swiperRight.$swiper;
      swiperTop.controller.control = swiperRight;
      swiperRight.controller.control = swiperTop;
    });
    this.$store.dispatch("info/LOAD_SERVICE_SLIDES");
  },
  methods: {},
};
</script>

<style scoped>
.service-slider {
  padding-top: 30px;
}

.swiper-wrapper {
  position: unset !important;
  width: unset !important;
  height: unset !important;
}

.swiper__wrap {
  display: flex;
  max-height: 390px;
}

.gallery-top {
  max-width: 850px;
  margin-right: 30px;
}

.slide-box {
  padding: 90px 60px 60px 60px;
  overflow: hidden;
  min-height: 390px;
}

.slide-box h2 {
  margin-bottom: 18px;
  line-height: 37px;
}

.slide-box p {
  margin-bottom: 44px;
  line-height: 17px;
}

.gallery-Right .swiper-slide .slide-box {
  min-height: 110px;
  padding: 0;
  display: flex;
  align-items: center;
  padding: 0 18px;
}

.gallery-Right {
  width: 100%;
}

.gallery-Right .swiper-slide .slide-box h2 {
  font-size: 15px;
  line-height: 16px;
  margin-bottom: 0;
}

.swiper-slide:nth-child(odd) .slide-box h2 {
  color: #fff;
}

@media (max-width: 1199px) {
  .gallery-top {
    max-width: none;
  }
}
</style>