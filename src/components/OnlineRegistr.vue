<template>
  <section class="online-registr">
    <div class="container">
      <h2 class="online-registr-title">Онлайн-запись</h2>
      <div class="row">
        <div class="col-sm-6">
          <p class="online-registr-text">
            Здесь вы можете оформить онлайн-запись на любое удобное для вас
            время, предварительно выбрав необходимую услугу. В рабочее время с
            вами свяжется наш специалист для подтверждения записи и уточнения
            всех деталей.
          </p>
          <div class="online-registr-contacts">
            <span>Свяжитесь с нами</span>
            <a href="tel:+79923402383">+7 (992) 340-23-83</a>
          </div>
          <div class="online-registr-adress">
            <span>Адрес</span>
            <p>г. Екатеринбург, ул. Депутатская д. 95</p>
          </div>
        </div>
        <div class="col-sm-6 online-registr-form__wrap">
          <h3 class="online-registr-form-title">Записаться</h3>
          <form class="online-registr-form">
            <input type="text" placeholder="Имя" />
            <select value="">
              <option value="" selected disabled>Услуга</option>
              <option value="" v-for="(option, index) in options" :key="index">
                {{ option.name }}
              </option>
            </select>
            <input type="text" placeholder="E-mail" />
            <datepicker
              :disabled-dates="this.disabledDates"
              class="date-picker"
              :monday-first="true"
              :language="ru"
              :placeholder="placeholder"
            ></datepicker>
            <input type="text" placeholder="Телефон" />
            <input type="text" placeholder="Кратко опишите проблему" />
            <button @click.prevent type="submit">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import { ru } from "vuejs-datepicker/dist/locale";
export default {
  components: { Datepicker },
  name: "OnlineRegistr",
  data() {
    return {
      ru: ru,
      placeholder: "Выберите дату",
      disabledDates: {
        to: new Date(new Date() - 864e5),
      },
      options: [
        {
          name: "Шиномонтаж",
        },
        {
          name: "Арматурные работы",
        },
        {
          name: "Подвеска",
        },
        {
          name: "Тормозная система",
        },
        {
          name: "Топливная система",
        },
        {
          name: "Электрика",
        },
        {
          name: "Смаз.-диагност. работы",
        },
        {
          name: "Техническое обслуживание",
        },
        {
          name: "Выхлопная система",
        },
        {
          name: "Ремонт двигателя",
        },
      ],
    };
  },
};
</script>

<style scoped>
.date-picker {
  width: 100%;
}

button {
  max-width: 130px;
}
</style>