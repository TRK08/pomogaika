<template>
  <section class="articles">
    <div class="container">
      <div class="articles-wrap">
        <h2 class="articles-title">Статьи</h2>
        <router-link tag="span" to="/articles" class="articles-all"
          >Все статьи</router-link
        >
      </div>
      <div class="row">
        <SingleArticle
          v-for="singleArticle in articles.slice(0, articlesToShow)"
          :key="singleArticle.date"
          :singleArticle="singleArticle"
          :artId="singleArticle.id"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import SingleArticle from "./ui/SingleArticle.vue";
export default {
  components: { SingleArticle },
  name: "Articles",
  data() {
    return {
      articlesToShow: 3,
    };
  },
  computed: {
    ...mapGetters({
      articles: "articles/getArticles",
    }),
  },
  created() {
    this.$store.dispatch("articles/LOAD_ARTICLES");
  },
};
</script>

<style scoped>
</style>