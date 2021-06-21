<template>
  <div>
    <div class="breadcrumbs">
      <router-link class="main-breadcrumb" to="/articles" tag="span">
        Все статьи</router-link
      >
      <span v-if="articleTitle" class="breadcrumb-article-title">
        {{ articleTitle }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Breadcrumbs",
  props: {
    articleTitle: {
      type: String,
    },
  },
};
</script>

<style scoped>
</style>