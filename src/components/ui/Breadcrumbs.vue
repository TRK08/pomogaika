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
.breadcrumbs {
  display: flex;
  align-items: center;
  padding: 30px 0;
  font-weight: 400;
}

.main-breadcrumb {
  font-size: 20px;
  line-height: 22px;
  color: #7f7b7b;
  display: flex;
  align-items: center;
}

.main-breadcrumb::after {
  content: url("../../assets/img/breadcrumb-arrow.svg");
  display: inline-block;
  width: 19px;
  height: 16px;
  margin: 0 10px;
}

.breadcrumb-article-title {
  font-size: 20px;
  line-height: 22px;
}
</style>