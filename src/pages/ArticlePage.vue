<template>
  <div>
    <div class="container">
      <Breadcrumbs :articleTitle="article.title" />
      <div class="article-page__wrap">
        <div
          :style="{
            background:
              'linear-gradient(180deg, #030405 0%, rgba(255, 255, 255, 0) 100%),url(' +
              article.img +
              ')',
          }"
        ></div>
        <span> {{ article.date }} </span>
        <h2>{{ article.title }}</h2>
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
  data() {
    return {
      articleId: this.$route.params["id"],
    };
  },
  computed: {
    ...mapGetters({
      getArticles: "getArticles",
    }),
    article() {
      let result = {};
      let vm = this;
      this.getArticles.map(function (item) {
        if (item.id === vm.$route.params.id) {
          result = item;
        }
      });
      return result;
    },
  },
};
</script>

<style scoped>
</style>