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
          <button class="login-btn registr-btn">Зарегистрироваться</button>
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
.login-page {
  padding: 130px 0;
}

.container {
  max-width: 950px !important;
  margin: 0 auto;
}

.login-page__wrap {
  display: flex;
  justify-content: center;
  height: 320px;
}

.login-page-left,
.login-page-right {
  width: 100%;
}

.login-page-separator {
  height: 100%;
  width: 1px;
  background-color: #6b6963;
  margin: 0 110px;
}

.login-form {
  margin-top: 30px;
}

.login-form input {
  width: 100%;
  margin-bottom: 30px;
  padding: 12px 16px;
  background-color: rgba(9, 19, 33, 0.0638304);
  border: none;
}

.login-page-left h2,
.login-page-right h2 {
  margin-bottom: 30px;
}

.login-page-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.login-btn {
  padding: 12px;
  width: 100%;
  border: none;
  color: #fff;
  background-color: var(--yellow-color);
}

.registr-btn {
  background-color: #000;
}
</style>