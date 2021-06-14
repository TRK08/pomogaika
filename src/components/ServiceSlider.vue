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
              :style="{ 'background-image': 'url(' + slide.img + ')' }"
            >
              <h2 data-swiper-parallax="-700" v-html="slide.title"></h2>
              <p data-swiper-parallax="-500" v-html="slide.subtitle"></p>
              <button class="slider-btn" data-swiper-parallax="-300">
                Получить
              </button>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <!-- swiper2 Right -->
        <swiper
          class="swiper gallery-Right"
          :options="swiperOptionRight"
          ref="swiperRight"
        >
          <swiper-slide
            class="swiper-slide"
            v-for="(slide, index) in slides"
            :key="index"
          >
            <div
              class="slide-box"
              :style="{ 'background-image': 'url(' + slide.img + ')' }"
            >
              <h2 v-html="slide.title"></h2>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServiceSlider",
  data() {
    return {
      slides: [
        {
          title: "Новым клиентам <br> скидка 10%",
          subtitle:
            "Скидка действует только на <br> техническое обслуживание <br> и слесарные работы",
          img: require("../assets/img/service-slide-1.png"),
        },
        {
          title: "Новым клиентам <br> скидка 10%",
          subtitle:
            "Скидка действует только на <br> техническое обслуживание <br> и слесарные работы",
          img: require("../assets/img/service-slide-2.png"),
        },
        {
          title: "Новым клиентам <br> скидка 10%",
          subtitle:
            "Скидка действует только на <br> техническое обслуживание <br> и слесарные работы",
          img: require("../assets/img/service-slide-3.png"),
        },
        {
          title: "Новым клиентам <br> скидка 10%",
          subtitle:
            "Скидка действует только на <br> техническое обслуживание <br> и слесарные работы",
          img: require("../assets/img/service-slide-4.png"),
        },
        {
          title: "Новым клиентам <br> скидка 10%",
          subtitle:
            "Скидка действует только на <br> техническое обслуживание <br> и слесарные работы",
          img: require("../assets/img/service-slide-5.png"),
        },
      ],

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
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperRight = this.$refs.swiperRight.$swiper;
      swiperTop.controller.control = swiperRight;
      swiperRight.controller.control = swiperTop;
    });
  },
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
  padding: 90px 0 60px 60px;
  overflow: hidden;
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
</style>