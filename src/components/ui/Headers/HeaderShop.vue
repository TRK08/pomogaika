<template>
  <header>
    <div class="header-wrap yellow-header">
      <div class="container">
        <div class="header">
          <router-link tag="a" to="/">
            <img
              src="../../../assets/img/logo-black.png"
              alt="logo"
              class="logo"
            />
          </router-link>
          <form action="" class="header-search">
            <input
              type="text"
              placeholder="Поиск деталей по номеру, наименованию или бренду"
            />
            <button @click.prevent>Найти</button>
          </form>
          <div class="header-shop-right">
            <div class="header-contacts">
              <img src="../../../assets/img/phone-black.svg" alt="" />
              <div>
                <span>Свяжитесь с нами</span>
                <a :href="`tel:${contacts.phone}`"> {{ contacts.phone }}</a>
              </div>
            </div>
            <router-link tag="div" to="/cart" class="header-cart">
              <img src="../../../assets/img/shop-cart-black.svg" alt="" />
              <span class="cart-price">8888 р.</span>
              <span class="cart-count">3</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="header-menu">
        <ul class="header-menu-block">
          <router-link
            tag="li"
            :to="nav.link"
            v-for="nav in navs"
            :key="nav.text"
          >
            <div class="burger-menu" v-if="nav.text === 'Каталог'">
              <span></span>
              <span></span>
              <span></span>
            </div>
            {{ nav.text }}
          </router-link>
        </ul>
        <div class="header-menu-cabinet__wrap">
          <router-link
            tag="div"
            :to="item.link"
            class="header-menu-cabinet"
            v-for="item in cabinet"
            :key="item.text"
          >
            <img :src="item.img" alt="" />
            <span class="hidden-sm hidden-xs">{{ item.text }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  name: "HeaderShop",
  props: {
    contacts: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      cabinetLink: "",
      navs: [
        {
          text: "Каталог",
          link: "",
        },
        {
          text: "Акции",
          link: "/",
        },
        {
          text: "Автосервис",
          link: "/service",
        },
        {
          text: "Статьи",
          link: "/articles",
        },
        {
          text: "О нас",
          link: "/",
        },
      ],
      cabinet: [
        {
          img: require("../../../assets/img/cabinet.svg"),
          text: "Личный кабинет",
          link: this.changeLink(),
        },
        {
          img: require("../../../assets/img/dostavka.svg"),
          text: "Доставка",
          link: "/send",
        },
        {
          img: require("../../../assets/img/ruble.svg"),
          text: "Оплата",
          link: "/payment",
        },
      ],
    };
  },
  methods: {
    changeLink() {
      if (this.isLog === null) {
        return "/login";
      } else {
        return "/cabinet";
      }
    },
  },
  computed: {
    ...mapGetters({
      isLog: "auth/getAuthenticated",
    }),
  },
  created() {},
};
</script>	
<style scoped>
@media (max-width: 672px) {
  .header-wrap {
    height: 160px;
    position: relative;
  }
}
</style>