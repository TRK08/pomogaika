<template>
  <div class="not-found-page">
    <div class="container">
      <div class="not-found-page__wrap">
        <h1>404</h1>
        <h2>Такой страницы нет</h2>
        <router-link class="not-found-to-home" tag="button" to="/"
          >На главную</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.not-found-page__wrap {
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.not-found-page__wrap h1 {
  font-size: 196px;
  display: block;
  margin-bottom: 10px;
}

.not-found-page__wrap h2 {
  margin-bottom: 100px;
}

.not-found-to-home {
  padding: 12px;
  max-width: 500px;
  width: 100%;
  border: none;
  color: #fff;
  background-color: var(--yellow-color);
}
</style>