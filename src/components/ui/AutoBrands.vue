<template>
  <section class="auto-brands-component">
    <div class="container">
      <h2>Производим ремонтные работы для следующих производителей:</h2>
      <div class="auto-brands__wrap row">
        <img src="../../assets/img/auto-brands.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AutoBrands",
};
</script>

<style scoped>
.auto-brands-component {
  margin-bottom: 70px;
}

h2 {
  color: #fbbb36;
  margin-bottom: 30px;
}

.auto-brands__wrap img {
  width: 100%;
}
</style>