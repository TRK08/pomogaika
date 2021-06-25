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
.registr-page {
  padding: 130px 0;
}

.container {
  max-width: 768px !important;
  width: 100%;
  margin: 0 auto;
}

.registr-page h2 {
  margin-bottom: 30px;
}

.registr-form-input {
  width: 100%;
  margin-bottom: 30px;
  border: none;
  padding: 12px 16px;
  background-color: rgba(9, 19, 33, 0.0638304);
}

.registr-form-input::placeholder {
  color: #000;
}

.registr-form-name {
  margin-right: 30px;
}

.registr-form-inputs-box {
  display: flex;
}

.registr-form-checkbox {
  margin-bottom: 30px;
}

.registr-page-form button {
  width: 100%;
  padding: 14px;
  color: #fff;
  background-color: var(--yellow-color);
  border: none;
  margin-bottom: 18px;
}
</style>