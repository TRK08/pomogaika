<template>
  <div class="registr-page">
    <div class="container">
      <h2>Регистрация</h2>
      <form action="" class="registr-page-form">
        <div class="registr-form-inputs-box">
          <input
            type="text"
            placeholder="Имя"
            class="registr-form-input registr-form-name"
          />
          <input
            type="text"
            placeholder="Фамилия"
            class="registr-form-input registr-form-surname"
          />
        </div>
        <input
          type="text"
          placeholder="Email"
          class="registr-form-input registr-form-email"
        />
        <input
          type="text"
          placeholder="Пароль"
          class="registr-form-input registr-form-pass"
        />
        <input
          type="text"
          placeholder="Повторите пароль"
          class="registr-form-input registr-form-pass-repeat"
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
        <router-link tag="button" to="/login" type="submit"
          >Зарегистрироваться</router-link
        >
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
};
</script>

<style scoped>
.container {
  max-width: 768px !important;
  width: 100%;
  margin: 0 auto;
}
</style>