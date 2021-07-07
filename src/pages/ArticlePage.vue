<template>
  <div class="article-page" v-if="singleArticle">
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
          @click="
            prevArticle();
            disablePrevBtn;
          "
          :disabled="disablePrevBtn()"
        >
          Предыдущая статья
        </button>
        <button
          class="article-page-nav-next"
          :style="{ disabled: disabled }"
          @click="
            nextArticle();
            disableNextBtn;
          "
          :disabled="disableNextBtn()"
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
      this.$router.replace(`/articles/${this.singleArticle.id}`);
    },
    nextArticle() {
      this.$store.dispatch("articles/NEXT_ARTICLE", this.id);
      this.$router.replace(`/articles/${this.singleArticle.id}`);
    },
    disablePrevBtn() {
      if (this.singleArticle && this.articles[0]) {
        if (this.singleArticle.id !== this.articles[0].id) {
          return false;
        } else {
          return true;
        }
      }
    },
    disableNextBtn() {
      if (this.singleArticle && this.articles.length >= 1) {
        if (
          this.singleArticle.id !== this.articles[this.articles.length - 1].id
        ) {
          return false;
        } else {
          return true;
        }
      }
    },
  },
  computed: {
    ...mapGetters({
      singleArticle: "articles/getSingleArticle",
      articles: "articles/getArticles",
    }),
  },

  async mounted() {
    this.$store.dispatch("articles/LOAD_SINGLE_ARTICLE", this.id);
    this.$store.dispatch("articles/LOAD_ARTICLES");
  },
};
</script>

<style scoped>
</style>