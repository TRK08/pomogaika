<template>
  <section class="articles" id="articles-block">
    <div class="container">
      <div class="articles-wrap">
        <h2 class="articles-title">Статьи</h2>
        <router-link tag="span" to="/articles" class="articles-all"
          >Все статьи</router-link
        >
      </div>
      <div class="row wow fadeIn">
        <SingleArticle
          v-for="singleArticle in articles.slice(0, itemToShow)"
          :key="singleArticle.date"
          :singleArticle="singleArticle"
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
  props: {
    itemToShow: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {};
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