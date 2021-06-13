<template>
  <section class="home-shop">
    <ShopSlider />
    <AboutUs />
  </section>
</template>

<script>
import AboutUs from "../components/AboutUs";
import ShopSlider from "../components/ShopSlider";
export default {
  components: { ShopSlider, AboutUs },
  name: "HomeShop",
  data() {
    return {};
  },
};
</script>

<style scoped>
h2 {
  color: red;
}
</style>