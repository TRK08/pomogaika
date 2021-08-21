<template>
  <div class="registr-page">
    <div class="container">
      <h2>Регистрация</h2>
      <form action="" @submit.prevent="registr" class="registr-page-form">
        <small v-if="errorFlag">Все поля должны быть заполнены правильно</small>
        <div class="registr-form-inputs-box">
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.name.$error }"
          >
            <input
              type="text"
              placeholder="Имя"
              class="registr-form-input registr-form-name"
              v-model.trim="$v.name.$model"
            />
          </div>
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.surname.$error }"
          >
            <input
              type="text"
              placeholder="Фамилия"
              class="registr-form-input registr-form-surname"
              v-model.trim="$v.surname.$model"
            />
          </div>
        </div>
        <div
          class="form-group"
          :class="{ 'form-group--error': $v.email.$error }"
        >
          <input
            type="text"
            placeholder="Email"
            class="registr-form-input registr-form-email"
            v-model.trim="$v.email.$model"
          />
        </div>
        <div
          class="form-group"
          :class="{ 'form-group--error': $v.password.$error }"
        >
          <input
            type="password"
            placeholder="Пароль"
            class="registr-form-input registr-form-pass"
            v-model.trim="$v.password.$model"
          />
        </div>
        <div
          class="form-group"
          :class="{ 'form-group--error': $v.passwordConfirm.$error }"
        >
          <input
            type="password"
            placeholder="Повторите пароль"
            class="registr-form-input registr-form-pass-repeat"
            v-model.trim="$v.passwordConfirm.$model"
          />
        </div>
        <input
          class="checkbox-custom"
          type="checkbox"
          id="registr-form-checkbox"
        />
        <label
          ref="rulesCheckbox"
          class="checkbox-custom-label registr-form-checkbox"
          for="registr-form-checkbox"
          @click="confidenceRules = !confidenceRules"
          >Я принимаю условия политики обработки данных и
          конфиденциальности</label
        >
        <button
          :disabled="!(confidenceRules && !this.$v.$invalid)"
          :class="{ 'disable-btn': !(confidenceRules && !this.$v.$invalid) }"
          type="submit"
        >
          Зарегистрироваться
        </button>
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
import { mapActions } from "vuex";
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
export default {
  name: "RegistrPage",
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      password: "",
      passwordConfirm: "",
      confidenceRules: false,
      errorFlag: false,
      load: false,
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
    ...mapActions({
      REGISTR: "auth/REGISTR",
    }),
    registr() {
      let form = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password,
      };

      this.$v.$invalid ? (this.errorFlag = true) : (this.errorFlag = false);

      if (this.confidenceRules && !this.$v.$invalid) {
        this.REGISTR(form).then(() => {
          this.$router.push("/login");
        });
      } else {
        if (!this.confidenceRules) {
          this.$refs.rulesCheckbox.classList.add("checkbox-error");
        } else {
          this.$refs.rulesCheckbox.classList.remove("checkbox-error");
        }
      }
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

.form-group {
  margin: 0;
  width: 100%;
}

.registr-form-inputs-box .form-group:first-child {
  margin-right: 30px;
}

.form-group--error input {
  border-right: 5px solid red;
}

.checkbox-error {
  color: red;
}

small {
  display: block;
  margin-bottom: 15px;
  font-size: 15px;
  line-height: 16px;
  text-align: center;
  color: red;
}

.disable-btn {
  opacity: 0.5;
}
</style>