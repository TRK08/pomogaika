<template>
  <div class="adress-form__wrap">
    <div class="cart-form-head-text">
      <h4>Адрес доставки</h4>
      <span>Шаг 1 из 3</span>
    </div>
    <p>Заполните необходимую информацию для оформления заказа</p>
    <form action="" class="adress-form row">
      <div class="cart-form-input__wrap col-sm-6">
        <label for="adress-form-name">Имя</label>
        <input type="text" placeholder="Введите имя" id="adress-form-name" />
      </div>
      <div class="cart-form-input__wrap col-sm-6">
        <label for="adress-form-surname">Фамилия</label>
        <input
          type="text"
          placeholder="Введите фамилию"
          id="adress-form-surname"
        />
      </div>
      <div class="cart-form-input__wrap col-sm-6">
        <label for="adress-form-email">Email </label>
        <input type="text" placeholder="Введите Email" id="adress-form-email" />
      </div>
      <div class="cart-form-input__wrap col-sm-6">
        <label for="adress-form-number">Номер телефона</label>
        <input
          type="text"
          placeholder="+7 --- --- -- --"
          id="adress-form-number"
          v-mask="'+7 (###) ###-##-##'"
          required
        />
      </div>
      <div class="cart-form-input__wrap col-sm-6">
        <label for="adress-form-adress">Адрес</label>
        <input
          type="text"
          placeholder="Введите адрес"
          id="adress-form-adress"
        />
      </div>
      <div class="cart-form-input__wrap col-sm-6">
        <label for="adress-form-city">Город</label>
        <input
          type="text"
          placeholder="Введите название города"
          id="adress-form-city"
        />
      </div>
      <div class="cart-form-input__wrap col-sm-6">
        <label for="adress-form-country">Страна</label>
        <input
          type="text"
          placeholder="Выберите страну"
          id="adress-form-country"
        />
      </div>
      <div class="cart-form-input__wrap col-sm-6">
        <label for="adress-form-index">Индекс</label>
        <input
          type="text"
          placeholder="Введите индекс"
          id="adress-form-index"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AdressForm",
};
</script>

<style scoped>
</style>