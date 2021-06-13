<template>
  <section class="articles">
    <div class="container">
      <h2 class="articles-title">Статьи</h2>
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
      articles: "getArticles",
    }),
  },
};
</script>

<style scoped>
</style>