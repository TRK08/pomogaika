<template>
  <footer class="footer" id="footer">
    <div
      class="head-footer"
      v-if="
        this.$route.path === '/' ||
        this.$route.path === '/cabinet' ||
        this.$route.path === '/send' ||
        this.$route.path === '/payment' ||
        this.$route.path === '/guarantee'
      "
    >
      <div class="container">
        <div class="row">
          <div class="footer-left col-xs-4">
            <img src="../../assets/img/logo-black.png" alt="" />
            <p class="footer-left-text">
              г. Екатеринбург <br />
              ул. Депутатская, д. 84 <br />
              <a href="tel:+79923402383">Tel: +7 (992) 340-23-83</a> <br />
              <a href="mailto:pomogaika96@yandex.ru">pomogaika96@yandex.ru</a>
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
                <router-link
                  v-for="item in menu.name"
                  :key="item.text"
                  tag="li"
                  :to="item.link"
                  class="footer-menu-item"
                  >{{ item.text }}</router-link
                >
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-social">
          <a href="https://vk.com/pomogayka96"
            ><img src="../../assets/img/vk-black.svg" alt="vk"
          /></a>
          <a href=""
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
              г. Екатеринбург <br />
              ул. Депутатская, д. 84 <br />
              <a href="tel:+79923402383">Tel: +7 (992) 340-23-83</a> <br />
              <a href="mailto:pomogaika96@yandex.ru">pomogaika96@yandex.ru</a>
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
                <router-link
                  v-for="item in menu.name"
                  :key="item.text"
                  tag="li"
                  :to="item.link"
                  class="footer-menu-item"
                  >{{ item.text }}</router-link
                >
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-social">
          <a href="https://vk.com/pomogayka96"
            ><img src="../../assets/img/vk-yellow.svg" alt="vk"
          /></a>
          <a href=""
            ><img src="../../assets/img/instagram-yellow.svg" alt="inst"
          /></a>
        </div>
      </div>
    </div>
  </footer>
</template>



<script>
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
              link: "",
            },
            {
              text: "Акции",
              link: "/akcii",
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
              link: "/about",
            },
          ],
        },
        partner: {
          title: "Сотрудничество",
          name: [
            {
              text: "Поставщикам",
              link: "/catalog",
            },
            {
              text: "Автосервисам",
              link: "/akcii",
            },
            {
              text: "Вакансии",
              link: "/vakansii",
            },
          ],
        },
        buyers: {
          title: "Покупателям",
          name: [
            {
              text: "Личный кабинет",
              link: "/cabinet",
            },
            {
              text: "Доставка",
              link: "/send",
            },
            {
              text: "Оплата",
              link: "/payment",
            },
            {
              text: "Гарантии",
              link: "/guarantee",
            },
          ],
        },
      },
      serviceMenu: {
        info: {
          title: "Информация",
          name: [
            {
              text: "Каталог",
              link: "",
            },
            {
              text: "Акции",
              link: "/akcii",
            },
            {
              text: "Магазин запчастей",
              link: "/",
            },
            {
              text: "Статьи",
              link: "/articles",
            },
            {
              text: "О нас",
              link: "/about",
            },
          ],
        },
        partner: {
          title: "Сотрудничество",
          name: [
            {
              text: "Поставщикам",
              link: "/catalog",
            },
            {
              text: "Вакансии",
              link: "/vakansii",
            },
          ],
        },
        carOwners: {
          title: "Автовладельцам",
          name: [
            {
              text: "Онлайн-запись",
              link: "/cabinet",
            },
          ],
        },
      },
    };
  },
};
</script>