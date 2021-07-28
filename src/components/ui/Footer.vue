<template>
  <footer class="footer" id="footer">
    <div
      class="head-footer"
      v-if="
        this.$route.path === '/' ||
        this.$route.path === '/cabinet' ||
        this.$route.path === '/send' ||
        this.$route.path === '/payment' ||
        this.$route.path === '/guarantee' ||
        this.$route.path === '/cart' ||
        this.$route.path === '/login' ||
        this.$route.path === '/registr' ||
        this.$route.name === 'goods'
      "
    >
      <div class="container">
        <div class="row">
          <div class="footer-left col-xs-4">
            <img src="../../assets/img/logo-black.png" alt="" />
            <p class="footer-left-text">
              <span> {{ contacts.adress }} </span>
              <a :href="`tel:${contacts.phone}`">Tel: {{ contacts.phone }}</a>
              <br />
              <a :href="`mailto:${contacts.email}`"> {{ contacts.email }} </a>
            </p>
          </div>
          <div class="footer-center col-xs-8">
            <div class="footer-menu__wrap">
              <ul
                class="footer-menu"
                v-for="menu in shopMenu"
                :key="menu.title"
              >
                <h4 class="footer-menu-title">{{ menu.title }}</h4>
                <li
                  class="footer-menu-item"
                  v-for="(item, index) in menu.name"
                  :key="item.text"
                >
                  <a v-if="item.href" :href="`mailto:${contacts.email}`">{{
                    item.text
                  }}</a>
                  <router-link
                    tag="div"
                    :to="item.path"
                    v-else-if="item.path"
                    >{{ item.text }}</router-link
                  >
                  <div
                    :class="{ 'hide-nav': item.text === 'О нас' }"
                    v-else
                    @click="changeShopLinks(index, item.text)"
                  >
                    {{ item.text }}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-social">
          <a :href="`${contacts.vk}`" target="blank"
            ><img src="../../assets/img/vk-black.svg" alt="vk"
          /></a>
          <a :href="`${contacts.instagram}`" target="blank"
            ><img src="../../assets/img/instagram-black.svg" alt="inst"
          /></a>
        </div>
      </div>
    </div>

    <div class="head-footer black-footer" v-else>
      <div class="container">
        <div class="row">
          <div class="footer-left col-xs-4">
            <img src="../../assets/img/logo-yellow.png" alt="" />
            <p class="footer-left-text">
              <span> {{ contacts.adress }} </span>
              <a :href="`tel:${contacts.phone}`">Tel: {{ contacts.phone }}</a>
              <br />
              <a href="mailto:pomogaika96@yandex.ru"> {{ contacts.email }} </a>
            </p>
          </div>
          <div class="footer-center col-xs-8">
            <div class="footer-menu__wrap">
              <ul
                class="footer-menu"
                v-for="menu in serviceMenu"
                :key="menu.title"
              >
                <h4 class="footer-menu-title">{{ menu.title }}</h4>
                <li
                  class="footer-menu-item"
                  v-for="(item, index) in menu.name"
                  :key="item.text"
                >
                  <a v-if="item.href" :href="`mailto:${contacts.email}`">{{
                    item.text
                  }}</a>
                  <router-link
                    tag="div"
                    :to="item.path"
                    v-else-if="item.path"
                    >{{ item.text }}</router-link
                  >
                  <div
                    :class="{ 'hide-nav': item.text === 'О нас' }"
                    v-else
                    @click="changeServiceLinks(index, item.text)"
                  >
                    {{ item.text }}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-social">
          <a :href="`${contacts.vk}`" target="blank"
            ><img src="../../assets/img/vk-yellow.svg" alt="vk"
          /></a>
          <a :href="`${contacts.instagram}`" target="blank"
            ><img src="../../assets/img/instagram-yellow.svg" alt="inst"
          /></a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom__wrap">
          <div class="footer-copyright">
            © {{ getFullYear() }} ПОМОГАЙКА. All right reserved.
          </div>
          <a href="" class="footer-logo">
            <img src="../../assets/img/hypermission-logo.png" alt="" />
            <span>by HyperMission</span>
          </a>
          <div class="footer-privacy">
            <a
              href="https://pomogayka96.ru/wp-content/themes/pg/assets/%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5_%D1%81%D0%BE%D0%B3%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%B5_%D0%9F%D0%BE%D0%BC%D0%BE%D0%B3%D0%B0%D0%B9%D0%BA%D0%B0-%D0%BA%D0%BE%D0%BD%D0%B2%D0%B5%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD.pdf"
              target="_blank"
              >Политика обработки данных</a
            >
            <a
              href="https://pomogayka96.ru/wp-content/themes/pg/assets/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0_%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8_%D0%9F%D0%BE%D0%BC%D0%BE%D0%B3%D0%B0%D0%B9%D0%BA%D0%B0-%D0%BA%D0%BE%D0%BD%D0%B2%D0%B5%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD.pdf"
              target="_blank"
              >Конфиденциальность</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>



<script>
import { mapGetters } from "vuex";

export default {
  name: "Footer",
  data() {
    return {
      shopMenu: {
        info: {
          title: "Информация",
          name: [
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
        },
        partner: {
          title: "Сотрудничество",
          name: [
            {
              text: "Поставщикам",
              href: true,
            },
            {
              text: "Автосервисам",
              href: true,
            },
            {
              text: "Вакансии",
              href: true,
            },
          ],
        },
        buyers: {
          title: "Покупателям",
          name: [
            {
              text: "Личный кабинет",
              path: "/cabinet",
            },
            {
              text: "Доставка",
              path: "/send",
            },
            {
              text: "Оплата",
              path: "/payment",
            },
            {
              text: "Гарантии",
              path: "/guarantee",
            },
          ],
        },
      },
      serviceMenu: {
        info: {
          title: "Информация",
          name: [
            {
              text: "Услуги",
              link: "#services-block",
            },
            {
              text: "Акции",
              link: "#service-slider",
            },
            {
              text: "Магазин запчастей",
              path: "/",
            },
            {
              text: "Статьи",
              link: "#articles-block",
            },
            {
              text: "О нас",
              link: "#about-us",
            },
          ],
        },
        partner: {
          title: "Сотрудничество",
          name: [
            {
              text: "Поставщикам",
              href: true,
            },
            {
              text: "Вакансии",
              href: true,
            },
          ],
        },
        carOwners: {
          title: "Автовладельцам",
          name: [
            {
              text: "Онлайн-запись",
              link: "#online-registr",
            },
          ],
        },
      },
    };
  },
  computed: {
    ...mapGetters({
      contacts: "info/getContacts",
    }),
  },
  methods: {
    changeServiceLinks(i, text) {
      if (this.$route.path === "/service") {
        if (
          this.serviceMenu.info.name[i].text === text &&
          this.serviceMenu.info.name[i].link
        ) {
          this.$scrollTo(this.serviceMenu.info.name[i].link);
        } else if (
          this.serviceMenu.carOwners.name[i].text === text &&
          this.serviceMenu.carOwners.name[i].link
        ) {
          this.$scrollTo(this.serviceMenu.carOwners.name[i].link);
        } else {
          this.$router.push(this.serviceMenu.info.name[i].path);
        }
      } else {
        this.$router.push("/service");
        setTimeout(() => {
          if (this.serviceMenu.info.name[i].text === text) {
            this.$scrollTo(this.serviceMenu.info.name[i].link);
          } else {
            this.$scrollTo(this.serviceMenu.carOwners.name[i].link);
          }
        }, 1000);
      }
    },
    changeShopLinks(i, text) {
      if (this.$route.path === "/") {
        if (
          this.shopMenu.info.name[i].text === text &&
          this.shopMenu.info.name[i].link
        ) {
          this.$scrollTo(this.shopMenu.info.name[i].link);
        }
      } else {
        this.$router.push("/");
        setTimeout(() => {
          this.$scrollTo(this.shopMenu.info.name[i].link);
        }, 1000);
      }
    },
    getFullYear() {
      return new Date().getFullYear();
    },
  },
  created() {
    this.$store.dispatch("info/LOAD_CONTACTS");
  },
};
</script>