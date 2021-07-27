<template>
  <div>
    <HeaderShop
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
      :contacts="contacts"
    />
    <HeaderService v-else :contacts="contacts" />
  </div>
</template>

<script>
import HeaderShop from "../ui/Headers/HeaderShop.vue";
import HeaderService from "../ui/Headers/HeaderService.vue";
import { mapGetters } from "vuex";
export default {
  components: { HeaderShop, HeaderService },
  computed: {
    ...mapGetters({
      contacts: "info/getContacts",
    }),
  },
  created() {
    this.$store.dispatch("info/LOAD_CONTACTS");
  },
};
</script>

<style scoped>
</style>