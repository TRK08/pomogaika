<template>
  <div class="cart-form-component">
    <form action="">
      <div class="adress-form__wrap">
        <div class="cart-form-head-text">
          <h4>Адрес доставки</h4>
          <span>Шаг 1 из 3</span>
        </div>
        <p>Заполните необходимую информацию для оформления заказа</p>
        <div action="" class="adress-form row">
          <div
            class="cart-form-input__wrap col-sm-6"
            :class="{ 'form-group--error': $v.name.$error }"
          >
            <label for="adress-form-name form__label">Имя*</label>

            <input
              ref="nameInput"
              type="text"
              class="form__input"
              placeholder="Введите имя"
              v-model.trim="$v.name.$model"
              id="adress-form-name"
            />
          </div>

          <div
            class="cart-form-input__wrap col-sm-6"
            :class="{ 'form-group--error': $v.surname.$error }"
          >
            <label for="adress-form-surname form__label">Фамилия*</label>
            <input
              type="text"
              class="form__input"
              placeholder="Введите фамилию"
              v-model.trim="$v.surname.$model"
              id="adress-form-surname"
            />
          </div>

          <div
            class="cart-form-input__wrap col-sm-6"
            :class="{ 'form-group--error': $v.email.$error }"
          >
            <label for="adress-form-email form__label">Email*</label>
            <input
              type="text"
              class="form__input"
              placeholder="Введите Email"
              v-model.trim="$v.email.$model"
              id="adress-form-email"
            />
          </div>

          <div
            class="cart-form-input__wrap col-sm-6"
            :class="{ 'form-group--error': $v.phone.$error }"
          >
            <label for="adress-form-number form__label">Номер телефона*</label>
            <input
              type="text"
              class="form__input"
              placeholder="+7 --- --- -- --"
              id="adress-form-number"
              v-mask="'+7 (###) ###-##-##'"
              v-model.trim="$v.phone.$model"
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
        </div>
      </div>
      <div class="additional-info-form__wrap">
        <div class="cart-form-head-text">
          <h4>Дополнительная информация</h4>
          <span>Шаг 2 из 3</span>
        </div>
        <p>Если вам необходимо что-то сообщить по заказу</p>
        <div action="" class="additional-info-form">
          <div class="cart-form-textarea__wrap">
            <label for="additional-info-form-name">Сообщение к заказу</label>
            <textarea
              rows="3"
              type="text"
              placeholder="Здесь вы можете оставить сообщение, которое получат наши менеджеры"
              id="additional-info-form-name"
            />
          </div>
        </div>
      </div>
      <div class="submit-order-form__wrap">
        <div class="cart-form-head-text">
          <h4>Подтверждение заказа</h4>
          <span>Шаг 3 из 3</span>
        </div>
        <p>Последний шаг перед оплатой заказа</p>
        <div action="" class="submit-order-form">
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
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
export default {
  name: "CartForm",
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      phone: "",
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(3),
    },
    surname: {
      required,
      minLength: minLength(3),
    },
    email: {
      required,
      email,
    },
    phone: {
      required,
      minLength: minLength(18),
    },
  },
  methods: {
    fillInputsValue() {
      if (this.isLoginUser) {
        this.name = this.isLoginUser.user_nicename;
        this.email = this.isLoginUser.user_email;
      }
    },
  },
  computed: {
    ...mapGetters({
      isLoginUser: "auth/getAuthenticated",
    }),
  },
  created() {
    this.fillInputsValue();
  },
};
</script>

<style scoped>
.form-group--error label {
  color: red;
}
</style>

<style scoped>
</style>