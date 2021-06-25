<template>
  <div class="login-page">
    <div class="container">
      <div class="login-page__wrap">
        <div class="login-page-left">
          <h2>Войти</h2>
          <p>Войдите в существующий аккаунт, используя логин и пароль</p>
          <form class="login-form" action="">
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Пароль" />
            <router-link tag="button" to="/cabinet" class="login-btn"
              >Войти</router-link
            >
          </form>
        </div>
        <div class="login-page-separator"></div>
        <div class="login-page-right">
          <div class="login-page-right-text">
            <h2>Зарегистрироваться</h2>
            <p>
              Зарегистрируйтесь, чтобы совершать покупки. Это займет не более
              2-х минут
            </p>
          </div>
          <router-link tag="button" to="/registr" class="login-btn registr-btn"
            >Зарегистрироваться</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>

<style scoped>
.container {
  max-width: 950px !important;
  margin: 0 auto;
}
</style>