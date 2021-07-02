<template>
  <section class="service-slider">
    <div class="container">
      <div class="swiper__wrap">
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
              :style="{
                background:
                  'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' +
                  slide.image +
                  ') no-repeat ',
                'background-size': 'cover',
              }"
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
          class="swiper gallery-Right hidden-xs"
          :options="swiperOptionRight"
          ref="swiperRight"
        >
          <swiper-slide
            class="swiper-slide"
            v-for="slide in slides"
            :key="slide.image"
          >
            <div
              class="slide-box slide-box-right-slider"
              :style="{
                background:
                  'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' +
                  slide.image +
                  ') no-repeat ',
                'background-size': 'cover',
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
        loop: true,
        loopedSlides: 25,
        spaceBetween: 30,
        breakpoints: {
          768: {
            direction: "horizontal",
            slidesPerView: 4,
          },
          1199: {
            direction: "vertical",
            slidesPerView: 3,
          },
        },
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
  width: 100%;
}

.slide-box {
  padding: 90px 60px 60px 60px;
  overflow: hidden;
  min-height: 390px;
  background-repeat: no-repeat;
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

.gallery-Right .swiper-slide .slide-box h2 {
  font-size: 15px;
  line-height: 16px;
  margin-bottom: 0;
}

.swiper-slide .slide-box h2 {
  color: #fff;
}

@media (max-width: 1199px) {
  .gallery-top {
    max-width: none;
    margin-right: 0;
    margin-bottom: 30px;
  }

  .swiper__wrap {
    flex-wrap: wrap;
    max-height: unset;
  }
}

@media (max-width: 991px) {
  .slide-box {
    padding: 30px 50px;
    min-height: 300px;
  }

  .slide-box-right-slider {
    min-height: 55px !important;
  }

  .slide-box-right-slider h2 {
    padding: 10px 4px !important;
    font-size: 8px !important;
    line-height: 8px !important;
  }

  .gallery-top {
    height: 300px;
  }

  .slide-box p {
    margin-bottom: 20px;
    line-height: 13px;
  }
}

@media (max-width: 512px) {
  .gallery-top {
    height: 200px;
    margin-bottom: 0;
  }

  .slide-box {
    padding: 20px 30px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .slider-btn {
    max-width: 100px;
    padding: 4px 13px;
  }

  .swiper-slide .slide-box h2 {
    font-size: 20px;
    line-height: 21px;
  }

  .swiper-slide .slide-box p {
    font-size: 10px;
    line-height: 11px;
  }

  .swiper-slide .slide-box h2,
  .swiper-slide .slide-box p {
    margin-bottom: 10px;
  }

  .swiper-pagination {
    bottom: 17px !important;
    right: 30px !important;
  }
}
@media (max-width: 390px) {
}
</style>