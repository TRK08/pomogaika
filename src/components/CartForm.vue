<template>
  <div class="cart-form-component">
    <AdressForm />
    <div class="additional-info-form__wrap">
      <div class="cart-form-head-text">
        <h4>Дополнительная информация</h4>
        <span>Шаг 2 из 3</span>
      </div>
      <p>Если вам необходимо что-то сообщить по заказу</p>
      <form action="" class="additional-info-form">
        <div class="cart-form-textarea__wrap">
          <label for="additional-info-form-name">Сообщение к заказу</label>
          <textarea
            rows="3"
            type="text"
            placeholder="Здесь вы можете оставить сообщение, которое получат наши менеджеры"
            id="additional-info-form-name"
          />
        </div>
      </form>
    </div>
    <div class="submit-order-form__wrap">
      <div class="cart-form-head-text">
        <h4>Подтверждение заказа</h4>
        <span>Шаг 3 из 3</span>
      </div>
      <p>Последний шаг перед оплатой заказа</p>
      <form action="" class="submit-order-form">
        <div class="cart-form-checkbox__wrap">
          <input
            class="checkbox-custom"
            type="checkbox"
            id="submit-order-form-1"
          />
          <label class="checkbox-custom-label" for="submit-order-form-1"
            >Я согласен получать рассылку рекламных предложений и акций</label
          >
        </div>
        <div class="cart-form-checkbox__wrap">
          <input
            class="checkbox-custom"
            type="checkbox"
            id="submit-order-form-2"
          />
          <label class="checkbox-custom-label" for="submit-order-form-2"
            >Я принимаю условия политики обработки данных и
            конфиденциальности</label
          >
        </div>
        <button class="submit-order-form-btn" type="submit">Оплатить</button>
        <div class="submit-order-form-privacy">
          <img src="../assets/img/privacy.svg" alt="" />
          <span>Все ваши данные защищены</span>
          <p>
            Мы не храним ваши платежные данные, <br />
            поэтому вы можете не переживать о безопасности
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AdressForm from "./ui/AdressForm.vue";
export default {
  components: { AdressForm },
  name: "CartForm",
};
</script>

<style scoped>
</style>