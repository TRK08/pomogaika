<template>
  <div class="article-item__wrap col-sm-4">
    <div class="article-item">
      <div
        class="article-item-img__wrap"
        :style="{ backgroundImage: 'url(' + singleArticle.image + ')' }"
      >
        <!-- <img :src="singleArticle.image" alt="" /> -->
      </div>
      <div class="article-item-body">
        <span> {{ setDateFormat }} </span>
        <p>{{ singleArticle.title }}</p>
        <router-link tag="button" :to="`/articles/${artId}`"
          >Читать</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleArticle",
  props: {
    singleArticle: {
      type: Object,
      required: true,
    },
    artId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    setDateFormat() {
      let date = new Date(this.singleArticle.date);
      let options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return date.toLocaleDateString("ru-RU", options).slice(0, -2);
    },
  },
};
</script>

<style scoped>
</style>