<template>
  <div class="article-item__wrap col-sm-4">
    <div class="article-item">
      <img :src="singleArticle.img" alt="" />
      <div class="article-item-body">
        <span> {{ singleArticle.date }} </span>
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
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>