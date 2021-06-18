<template>
  <div>
    <HeaderShop
      v-if="
        this.$route.path === '/' ||
        this.$route.path === '/cabinet' ||
        this.$route.path === '/send' ||
        this.$route.path === '/payment' ||
        this.$route.path === '/guarantee'
      "
    />
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