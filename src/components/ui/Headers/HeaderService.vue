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
                <a href=""> {{ contacts.phone }} </a>
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
            <router-link
              tag="li"
              :to="nav.link"
              v-for="nav in navs"
              :key="nav.text"
            >
              <div class="burger-menu" v-if="nav.text === 'Услуги'">
                <span></span>
                <span></span>
                <span></span>
              </div>
              {{ nav.text }}
            </router-link>
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
          link: "/service/#services-block",
        },
        {
          text: "Акции",
          link: "/",
        },
        {
          text: "Магазин автозапчастей",
          link: "/",
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
    };
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