<template>
  <div class="login-page">
    <div class="container">
      <div class="login-page__wrap">
        <div class="login-page-left">
          <h2>Войти</h2>
          <p>Войдите в существующий аккаунт, используя логин и пароль</p>
          <form class="login-form" action="" @submit.prevent="login">
            <small class="login-form-error" v-if="error"
              >Неверный логин или пароль</small
            >
            <div
              class="form-group"
              :class="{ 'form-group--error': $v.email.$error }"
            >
              <input
                v-model.trim="$v.email.$model"
                class="form__input"
                type="text"
                placeholder="Email"
              />
            </div>
            <div
              class="form-group"
              :class="{ 'form-group--error': $v.password.$error }"
            >
              <input
                v-model.trim="$v.password.$model"
                type="password"
                placeholder="Пароль"
              />
            </div>
            <button class="login-btn">Войти</button>
            <router-link
              class="remember-password"
              tag="span"
              to="/reset-password"
              >Забыли пароль?</router-link
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
import { mapActions, mapGetters } from "vuex";
import { required, minLength, email } from "vuelidate/lib/validators";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
    },
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
        if (!this.error && !this.$v.$invalid) {
          this.$router.replace("/cabinet");
        }
      });
    },
  },
  computed: {
    ...mapGetters({
      error: "auth/getError",
    }),
  },
};
</script>

<style scoped>
.container {
  max-width: 950px !important;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 0;
}

.form-group--error input {
  border-right: 5px solid red;
}

.login-form {
  position: relative;
}

.remember-password {
  display: block;
  text-align: center;
  margin-bottom: 10px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -40px;
  cursor: pointer;
}

.remember-password:hover {
  text-decoration: underline;
}

@media (max-width: 671px) {
  .login-form {
    margin-bottom: 50px;
  }
}
</style>