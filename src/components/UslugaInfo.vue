<template>
  <section class="usluga-info">
    <div class="usluga-info__wrap">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-xs-12 usluga-info-left">
            <h2 class="usluga-info-title">{{ singleService.title }}</h2>
            <div class="usluga-info-descr" v-html="singleService.text"></div>
          </div>
          <div class="col-sm-6 hidden-xs usluga-info-right">
            <img :src="singleService.main_img" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "UslugaInfo",
  props: {
    singleService: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>