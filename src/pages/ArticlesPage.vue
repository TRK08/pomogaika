<template>
  <div class="container">
    <router-link
      class="big-article"
      tag="div"
      :style="{
        backgroundImage:
          'linear-gradient(180deg, #030405 0%, rgba(255, 255, 255, 0) 100%),url(' +
          bigArticle.image +
          ')',
      }"
      v-for="bigArticle in articles.slice(0, 1)"
      :key="bigArticle.id"
      :to="`/articles/${bigArticle.id}`"
    >
      <h3>{{ bigArticle.title }}</h3>
      <span> {{ bigArticle.date }} </span>
    </router-link>
    <h2>Статьи</h2>
    <div class="row">
      <SingleArticle
        style="margin-bottom: 35px"
        v-for="singleArticle in articles.slice(1, itemsToShow + 1)"
        :key="singleArticle.id"
        :singleArticle="singleArticle"
        :artId="singleArticle.id"
      />
    </div>
    <button @click="loadMore" v-if="itemsToShow < articles.length">
      Смотреть больше
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SingleArticle from "../components/ui/SingleArticle.vue";

export default {
  components: { SingleArticle },
  name: "ArticlesPage",
  data() {
    return {
      itemsToShow: 6,
    };
  },
  computed: {
    ...mapGetters({
      articles: "articles/getArticles",
    }),
  },
  methods: {
    loadMore() {
      this.itemsToShow = this.itemsToShow + 3;
    },
  },
  created() {
    this.$store.dispatch("articles/LOAD_ARTICLES");
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 30px;
}
.container {
  margin-bottom: 70px;
}

.row {
  margin-right: -30px;
}
</style>