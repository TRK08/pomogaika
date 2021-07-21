<template>
  <header>
    <div class="header-wrap black-header">
      <div class="container">
        <div class="header">
          <router-link tag="a" to="/service" class="service-logo">
            <img
              src="../../../assets/img/logo-yellow.png"
              alt="logo"
              class="logo"
            />
          </router-link>

          <div class="header-info__wrap">
            <div class="header-worktime">
              <img src="../../../assets/img/clock-yellow.svg" alt="" />
              <div>
                <span>Режим работы</span>
                <span> {{ contacts.work_time }} </span>
              </div>
            </div>
            <div class="header-contacts header-contacts-service">
              <img src="../../../assets/img/phone-yellow.svg" alt="" />
              <div>
                <span>Свяжитесь с нами</span>
                <a :href="`tel:${contacts.phone}`"> {{ contacts.phone }} </a>
              </div>
            </div>
            <div class="header-adress">
              <img src="../../../assets/img/point-yellow.svg" alt="" />
              <div>
                <span>Адрес</span>
                <span> {{ contacts.adress }} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-menu__wrap">
      <div class="container">
        <div class="header-menu">
          <ul class="header-menu-block">
            <li
              @click="changeLinks(index)"
              v-for="(nav, index) in navs"
              :key="nav.text"
              :class="{ 'hide-nav': nav.text === 'О нас' }"
            >
              <div class="burger-menu" v-if="nav.text === 'Услуги'">
                <span></span>
                <span></span>
                <span></span>
              </div>
              {{ nav.text }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>


<script>
export default {
  name: "HeaderService",
  props: {
    contacts: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      navs: [
        {
          text: "Услуги",
          link: "#services-block",
        },
        {
          text: "Акции",
          link: "#service-slider",
        },
        {
          text: "Магазин автозапчастей",
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
    };
  },
  methods: {
    changeLinks(i) {
      if (this.$route.path === "/service") {
        if (this.navs[i].link) {
          this.$scrollTo(this.navs[i].link);
        } else {
          this.$router.push(this.navs[i].path);
        }
      } else if (this.$route.path !== "/service" && this.navs[i].path) {
        this.$router.push(this.navs[i].path);
      } else {
        this.$router.push("/service");
        setTimeout(() => {
          this.$scrollTo(this.navs[i].link);
        }, 1000);
      }
    },
  },
};
</script>	

<style scoped>
.header-menu__wrap {
  background-color: #fbbb36;
}

.header-contacts a {
  color: var(--yellow-color);
}
</style>