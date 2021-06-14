<template>
  <header>
    <div class="header-wrap yellow-header">
      <div class="container">
        <div class="header">
          <router-link tag="a" to="/123">
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
                <a href="">+7 (992) 340-23-83</a>
              </div>
            </div>
            <div class="header-cart">
              <img src="../../../assets/img/shop-cart-black.svg" alt="" />
              <span class="cart-price">8888 р.</span>
              <span class="cart-count">3</span>
            </div>
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
          <div
            class="header-menu-cabinet"
            v-for="item in cabinet"
            :key="item.text"
          >
            <img :src="item.img" alt="" />
            <span>{{ item.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>


<script>
export default {
  name: "HeaderShop",
  data() {
    return {
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
        },
        {
          img: require("../../../assets/img/dostavka.svg"),
          text: "Доставка",
        },
        {
          img: require("../../../assets/img/ruble.svg"),
          text: "Оплата",
        },
      ],
    };
  },
};
</script>	