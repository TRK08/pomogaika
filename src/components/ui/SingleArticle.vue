<template>
  <div class="article-item__wrap col-sm-4 col-xs-6">
    <div class="article-item">
      <div class="article-item-img__wrap">
        <img :src="singleArticle.image" alt="" />
      </div>
      <div class="article-item-body">
        <span> {{ singleArticle.date }} </span>
        <p>{{ singleArticle.title }}</p>
        <router-link tag="button" :to="`/articles/${singleArticle.id}`"
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
  },
  data() {
    return {};
  },
  computed: {
    //
  },
};
</script>

<style scoped>
</style>