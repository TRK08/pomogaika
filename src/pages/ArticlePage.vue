<template>
  <div class="article-page">
    <div class="container">
      <Breadcrumbs :articleTitle="singleArticle.title" />
      <div class="article-page__wrap">
        <div class="article-page-img">
          <img :src="singleArticle.image" alt="" />
        </div>
        <span> {{ singleArticle.date }} </span>
        <h2>{{ singleArticle.title }}</h2>
        <div class="article-page-content" v-html="singleArticle.content"></div>
      </div>
      <div class="article-page-nav">
        <button
          class="article-page-nav-prev"
          :style="{ disabled: disabled }"
          @click="prevArticle"
        >
          Предыдущая статья
        </button>
        <button
          class="article-page-nav-next"
          :style="{ disabled: disabled }"
          @click="nextArticle"
        >
          Следующая статья
        </button>
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
    return {
      disabled: false,
    };
  },
  methods: {
    prevArticle() {
      this.$store.dispatch("articles/PREV_ARTICLE", this.id);
      if (this.singleArticle) {
        this.disabled = false;
        this.$router.replace(`/articles/${this.singleArticle.id}`);
      } else {
        this.disabled = true;
      }
    },
    nextArticle() {
      this.$store.dispatch("articles/NEXT_ARTICLE", this.id);
      if (this.singleArticle) {
        this.disabled = false;
        this.$router.replace(`/articles/${this.singleArticle.id}`);
      } else {
        this.disabled = true;
      }
    },
  },
  computed: {
    ...mapGetters({
      singleArticle: "articles/getSingleArticle",
      articles: "articles/getArticles",
    }),
  },
  created() {
    this.$store.dispatch("articles/LOAD_SINGLE_ARTICLE", this.id);
    this.$store.dispatch("articles/LOAD_ARTICLES");
  },
};
</script>

<style scoped>
.article-page {
  padding-bottom: 70px;
}

.article-page-content {
  color: #000;
}

.disabled {
  color: red;
}

.article-page-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 70px;
}

.article-page-nav button {
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  color: #7f7b7b;
}

.article-page-nav-prev::before {
  content: url("../assets/img/breadcrumb-arrow.svg");
  display: inline-block;
  width: 19px;
  height: 16px;
  margin-right: 30px;
  transform: rotate(180deg);
}

.article-page-nav-next::after {
  content: url("../assets/img/breadcrumb-arrow.svg");
  display: inline-block;
  width: 19px;
  height: 16px;
  margin-left: 30px;
}
</style>