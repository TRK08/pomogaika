<template>
  <div class="services" id="services-block">
    <div class="container">
      <h2 class="services-title">Услуги</h2>
      <div class="services__wrap">
        <router-link
          :to="`/service/${item.id}`"
          tag="div"
          class="services-item__wrap"
          v-for="item in services"
          :key="item.id"
        >
          <div class="services-item">
            <img :src="item.icon" alt="" />
            <span> {{ item.title }} </span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ServiceServices",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      services: "services/getServicesCard",
    }),
  },

  created() {
    this.$store.dispatch("services/LOAD_SERVICES_CARD");
  },
};
</script>

<style scoped>
</style>