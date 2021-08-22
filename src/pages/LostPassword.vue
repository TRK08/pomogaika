<template>
  <div class="lost-password">
    <div class="container">
      <form
        @submit.prevent="setNewPassword"
        action=""
        class="reset-pass-form login-form"
      >
        <h2>Введите новый пароль</h2>
        <div
          class="form-group"
          :class="{ 'form-group--error': $v.password.$error }"
        >
          <input
            v-model.trim="$v.password.$model"
            class="form__input"
            type="password"
            placeholder="Введите новый пароль"
          />
        </div>
        <div
          class="form-group"
          :class="{ 'form-group--error': $v.passwordConfirm.$error }"
        >
          <input
            v-model.trim="$v.passwordConfirm.$model"
            class="form__input"
            type="password"
            placeholder="Повторите новый пароль"
          />
        </div>
        <button :disabled="this.$v.$invalid" class="login-btn">
          Сбросить пароль
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { required, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  name: "LostPassword",
  data() {
    return {
      currrentUrl: "",
      password: "",
      passwordConfirm: "",
    };
  },
  validations: {
    password: {
      required,
      minLength: minLength(6),
    },
    passwordConfirm: {
      required,
      minLength: minLength(6),
      sameAsPassword: sameAs("password"),
    },
  },
  methods: {
    getCurrentUrl() {
      this.currentUrl = document.URL.split("?")[1];
    },
    setNewPassword() {
      axios
        .post(
          `https://pomogayka96.ru/wp-json/pg/v1/user/updatep?${this.currentUrl}&password=${this.password}`
        )
        .then((res) => {
          console.log(res);
        });
    },
  },
  mounted() {
    this.getCurrentUrl();
  },
};
</script>

<style scoped>
.lost-password {
  padding: 100px 0;
}

.lost-password .container {
  height: 50vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

.lost-password form {
  max-width: 400px;
}

.lost-password h2 {
  margin-bottom: 30px;
}

.reset-pass-form button:disabled {
  opacity: 0.5;
}

.form-group--error input {
  border-right: 5px solid red;
}
</style>