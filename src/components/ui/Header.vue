<template>
  <div>
    <HeaderShop v-if="this.$route.path === '/'" />
    <HeaderService v-else />
  </div>
</template>

<script>
import HeaderShop from "../ui/Headers/HeaderShop.vue";
import HeaderService from "../ui/Headers/HeaderService.vue";
export default {
  components: { HeaderShop, HeaderService },
};
</script>

<style scoped>
</style>