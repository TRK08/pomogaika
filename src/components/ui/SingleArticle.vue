<template>
  <div class="article-item__wrap col-sm-4">
    <div class="article-item">
      <div
        class="article-item-img__wrap"
        :style="{ backgroundImage: 'url(' + singleArticle.image + ')' }"
      >
        <!-- <img :src="singleArticle.image" alt="" /> -->
      </div>
      <div class="article-item-body">
        <span> {{ singleArticle.date }} </span>
        <p>{{ singleArticle.title }}</p>
        <router-link tag="button" :to="`/articles/${artId}`"
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
    artId: {
      type: Number,
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