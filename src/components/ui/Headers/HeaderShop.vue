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
              v-model="searchValue"
              @input="liveSearch"
              placeholder="Поиск деталей по номеру, наименованию или бренду"
            />
            <button @click.prevent>Найти</button>
            <ul v-if="searchValue !== ''" class="header-search-results">
              <li
                v-for="(result, index) in brands"
                :key="index"
                @click="goToGood(result, index)"
              >
                <span>{{ result.brand }}</span>
                <span>{{ result.number }}</span>
              </li>
            </ul>
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
              <span class="cart-count"> {{ cartCounter }} </span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="header-menu">
        <ul class="header-menu-block">
          <li
            @click="changeLinks(index)"
            v-for="(nav, index) in navs"
            :key="nav.text"
            :class="{ 'hide-nav': nav.text === 'О нас' }"
          >
            <div class="burger-menu" v-if="nav.text === 'Каталог'">
              <span></span>
              <span></span>
              <span></span>
            </div>
            {{ nav.text }}
          </li>
        </ul>
        <div class="header-menu-cabinet__wrap">
          <router-link
            tag="div"
            :to="isLog ? '/cabinet' : '/login'"
            class="header-menu-cabinet"
            v-for="item in cabinet.slice(0, 1)"
            :key="item.text"
          >
            <img :src="item.img" alt="" />
            <span class="hidden-sm hidden-xs">{{ item.text }}</span>
          </router-link>
          <router-link
            tag="div"
            :to="item.link"
            class="header-menu-cabinet"
            v-for="item in cabinet.slice(1, cabinet.length)"
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
      searchValue: "",
      navs: [
        {
          text: "Каталог",
          link: "#catalog",
        },
        {
          text: "Акции",
          link: "#shop-slider",
        },
        {
          text: "Автосервис",
          path: "/service",
        },
        {
          text: "Статьи",
          path: "/articles",
        },
        {
          text: "О нас",
          link: "#about-us",
        },
      ],
      cabinet: [
        {
          img: require("../../../assets/img/cabinet.svg"),
          text: "Личный кабинет",
          link: "/login",
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
    changeLinks(i) {
      if (this.$route.path === "/") {
        if (this.navs[i].link) {
          this.$scrollTo(this.navs[i].link);
        } else {
          this.$router.push(this.navs[i].path);
        }
      } else if (this.$route.path !== "/" && this.navs[i].path) {
        this.$router.push(this.navs[i].path);
      } else {
        this.$router.push("/");
        setTimeout(() => {
          this.$scrollTo(this.navs[i].link);
        }, 1000);
      }
    },
    liveSearch() {
      if (this.searchValue !== "") {
        this.$store.dispatch("goods/LIVE_SEARCH", this.searchValue);
      }
    },
    goToGood(result, index) {
      this.$store.dispatch("goods/TAKE_GOOD_INDEX", index);
      this.$router.replace(`/good/${result.number}`);
      this.$store.dispatch("goods/LOAD_GOODS");
      this.searchValue = "";
    },
  },
  computed: {
    ...mapGetters({
      isLog: "auth/getAuthenticated",
      brands: "goods/getBrands",
      cart: "goods/getCart",
    }),
    cartCounter() {
      let res = 0;
      this.cart.forEach((item) => {
        res += item.quantity;
      });
      return res;
    },
  },
};
</script>	
<style scoped>
.header-search input {
  position: relative;
  display: block;
}

.header-search-results {
  position: absolute;
  top: 70px;
  width: 450px;
  background-color: #fff;
  z-index: 1;
}

.header-search-results li {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.header-search-results li:hover {
  background-color: #d3d3d3;
}

@media (max-width: 672px) {
  .header-wrap {
    height: 160px;
    position: relative;
  }
}
</style>