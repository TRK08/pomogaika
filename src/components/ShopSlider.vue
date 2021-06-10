<template>
  <div class="shop-slider">
    <div class="container">
      <swiper class="swiper-container" ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="item in slides" :key="item.img">
          <div
            class="slide-box"
            :style="{ 'background-image': 'url(' + item.img + ')' }"
          >
            <h2 v-html="item.title"></h2>
            <p v-html="item.subtitle"></p>
            <button class="slider-btn">Получить</button>
          </div>
        </swiper-slide>
      </swiper>
      <div class="under-slider__wrap">
        <div class="row">
          <div
            class="under-slider-block col-md-4"
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
export default {
  name: "ShopSlider",
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        parallax: true,
        delay: 5000,
        spaceBetween: 0,
        touchRatio: 1,
        loop: true,
        autoplay: true,
        infinite: true,
        speed: 1200,
      },

      slides: [
        {
          title: "Дисконтная карта <br> в подарок!",
          subtitle:
            "Карта выдается при покупке <br> от 15000 рублей и является <br> накопительной",
          img: require("../assets/img/shop-slide-1.png"),
        },
        {
          title: "Бесплатная доставка <br> по Екатеринбургу",
          subtitle:
            "Акция действует при покупке <br> запасных частей и комплектующих <br> от 20000 рублей",
          img: require("../assets/img/shop-slide-2.png"),
        },
      ],

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
  },
  mounted() {
    this.swiper.slideTo(1, false, false);
  },
};
</script>

<style scoped>
</style>