<template>
  <div class="services">
    <div class="container">
      <h2 class="services-title">Услуги</h2>
      <div class="services__wrap">
        <router-link
          to="/"
          tag="div"
          class="services-item"
          v-for="item in services"
          :key="item.img"
        >
          <img :src="item.img" alt="" />
          <span> {{ item.text }} </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceServices",
  data() {
    return {
      services: [
        {
          img: require("../assets/img/shinomontazh.svg"),
          text: "Шиномонтаж",
        },
        {
          img: require("../assets/img/armaturniye-raboty.svg"),
          text: "Арматурные работы",
        },
        {
          img: require("../assets/img/toplivnaya-sistema.svg"),
          text: "Топливная система",
        },
        {
          img: require("../assets/img/diagnosticheskie-raboty.svg"),
          text: "Смазочно-диагностические работы",
        },
        {
          img: require("../assets/img/tech-obslujivanie.svg"),
          text: "Техническое обслуживание",
        },
        {
          img: require("../assets/img/podveska.svg"),
          text: "Подвеска",
        },
        {
          img: require("../assets/img/tormoznaya-sistema.svg"),
          text: "Тормозная система",
        },
        {
          img: require("../assets/img/elektrika.svg"),
          text: "Электрика",
        },
        {
          img: require("../assets/img/remont-dvigatelya.svg"),
          text: "Ремонт двигателя",
        },
        {
          img: require("../assets/img/vyhlopnaya-sistema.svg"),
          text: "Выхлопная система",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>