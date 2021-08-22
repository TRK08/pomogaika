<template>
  <div class="lost-password">
    <div class="container">
      <form
        @submit.prevent="submitResetForm"
        action=""
        class="reset-pass-form login-form"
        v-if="!succes"
      >
        <h2>Восстановить пароль</h2>
        <small class="login-form-error" v-if="userNotFound"
          >Такой пользователь не найден</small
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
          :class="{ 'form-group--error': $v.emailConfirm.$error }"
        >
          <input
            v-model.trim="$v.emailConfirm.$model"
            class="form__input"
            type="text"
            placeholder="Повторите email"
          />
        </div>
        <button :disabled="this.$v.$invalid" class="login-btn">
          Сбросить пароль
        </button>
      </form>
      <div class="succes-block" v-else>
        <h2>На ваш E-mail выслано письмо с ссылкой для сброса пароля</h2>
        <router-link class="login-btn back-btn" tag="button" to="/login">
          Вернуться
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { required, email, sameAs } from "vuelidate/lib/validators";
export default {
  name: "LostPassword",
  data() {
    return {
      email: "",
      emailConfirm: "",
      userNotFound: false,
      succes: false,
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    emailConfirm: {
      required,
      email,
      sameAsPassword: sameAs("email"),
    },
  },
  methods: {
    submitResetForm() {
      axios
        .post(
          `https://pomogayka96.ru/wp-json/pg/v1/user/resetp?login=${this.email}`
        )
        .then((res) => {
          console.log(res.data);
          if (res.data.code === "200") {
            this.succes = true;
            this.userNotFound = false;
          } else {
            this.succes = false;
            this.userNotFound = true;
          }
        });
    },
  },
};
</script>

<style scoped>
.succes-block {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 800px;
}
.reset-pass-form {
  max-width: 400px;
}

.reset-pass-form button:disabled {
  opacity: 0.5;
}

.form-group--error input {
  border-right: 5px solid red;
}

.lost-password .container {
  height: 50vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 100px 0;
}

.lost-password h2 {
  margin-bottom: 30px;
}

.back-btn {
  width: 50%;
}
</style>