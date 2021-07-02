<template>
  <div class="registr-page">
    <div class="container">
      <h2>Регистрация</h2>
      <form action="" @submit.prevent="registr()" class="registr-page-form">
        <div class="registr-form-inputs-box">
          <input
            type="text"
            placeholder="Имя"
            class="registr-form-input registr-form-name"
            v-model="name"
          />
          <input
            type="text"
            placeholder="Фамилия"
            class="registr-form-input registr-form-surname"
            v-model="surname"
          />
        </div>
        <input
          type="text"
          placeholder="Email"
          class="registr-form-input registr-form-email"
          v-model="email"
        />
        <input
          type="password"
          placeholder="Пароль"
          class="registr-form-input registr-form-pass"
          v-model="password"
        />
        <input
          type="password"
          placeholder="Повторите пароль"
          class="registr-form-input registr-form-pass-repeat"
          v-model="passwordConfirm"
        />
        <input
          class="checkbox-custom"
          type="checkbox"
          id="registr-form-checkbox"
        />
        <label
          class="checkbox-custom-label registr-form-checkbox"
          for="registr-form-checkbox"
          >Я принимаю условия политики обработки данных и
          конфиденциальности</label
        >
        <button type="submit">Зарегистрироваться</button>
        <p>
          Нажимая кнопку “Зарегистрироваться”, вы подтверждаете согласение на
          обработку персональных данных и ознакомление с политикой
          конфиденциальности
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistrPage",
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      password: "",
      passwordConfirm: "",
      load: false,
    };
  },
  methods: {
    registr() {
      let form = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("auth/REGISTR", form);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 768px !important;
  width: 100%;
  margin: 0 auto;
}
</style>