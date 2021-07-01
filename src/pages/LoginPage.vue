<template>
  <div class="login-page">
    <div class="container">
      <div class="login-page__wrap">
        <div class="login-page-left">
          <h2>Войти</h2>
          <p>Войдите в существующий аккаунт, используя логин и пароль</p>
          <form class="login-form" action="" @submit.prevent="login">
            <input v-model="email" type="text" placeholder="Email" />
            <input v-model="password" type="text" placeholder="Пароль" />
            <button class="login-btn">Войти</button>
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
import { mapActions } from "vuex";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions({
      AUTH_REQUEST: "auth/AUTH_REQUEST",
    }),
    login() {
      let form = {
        username: this.email,
        password: this.password,
      };

      this.AUTH_REQUEST(form).then(() => {
        this.$router.replace("/cabinet");
      });
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 950px !important;
  margin: 0 auto;
}
</style>