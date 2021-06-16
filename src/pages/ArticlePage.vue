<template>
  <div>
    <div class="container">
      <Breadcrumbs :articleTitle="singleArticle.title" />
      <div class="article-page__wrap">
        <div
          class="article-page-img"
          :style="{
            backgroundImage:
              'linear-gradient(180deg, #030405 0%, rgba(255, 255, 255, 0) 100%),url(' +
              singleArticle.image +
              ')',
          }"
        ></div>
        <span> {{ singleArticle.date }} </span>
        <h2>{{ singleArticle.title }}</h2>
        <div class="article-page-content" v-html="singleArticle.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumbs from "../components/ui/Breadcrumbs.vue";
export default {
  components: { Breadcrumbs },
  name: "ArticlePage",
  props: ["id"],
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      singleArticle: "articles/getSingleArticle",
    }),
  },
  created() {
    this.$store.dispatch("articles/LOAD_SINGLE_ARTICLE", this.id);
  },
};
</script>

<style scoped>
.article-page-content {
  color: #000;
}
</style>