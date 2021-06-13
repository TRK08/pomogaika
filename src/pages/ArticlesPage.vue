<template>
  <div class="container">
    <div class="big-article">
      <h3>Как часто нужно проводить диагностику автомобиля?</h3>
      <span>5 ноября 2020</span>
    </div>
    <h2>Статьи</h2>
    <div class="row">
      <SingleArticle
        style="margin-bottom: 35px"
        v-for="singleArticle in articles.slice(0, itemsToShow)"
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
      bigArticle: [],
    };
  },
  computed: {
    ...mapGetters({
      articles: "getArticles",
    }),
  },
  methods: {
    loadMore() {
      this.itemsToShow = this.itemsToShow + 3;
    },
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