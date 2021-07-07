<template>
  <section class="online-registr" id="online-registr">
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
            <a :href="`tel:${contacts.phone}`">{{ contacts.phone }}</a>
          </div>
          <div class="online-registr-adress">
            <span>Адрес</span>
            <p>{{ contacts.adress }}</p>
          </div>
        </div>
        <div class="col-sm-6 online-registr-form__wrap">
          <h3 class="online-registr-form-title">Записаться</h3>
          <form class="online-registr-form" @submit.prevent="submitForm()">
            <input type="text" placeholder="Имя" v-model="emailBody.client" />
            <select value="" v-model="emailBody.service">
              <option value="" selected disabled>Услуга</option>
              <option
                :value="option.name"
                v-for="(option, index) in options"
                :key="index"
              >
                {{ option.name }}
              </option>
            </select>
            <input type="text" placeholder="E-mail" v-model="emailBody.email" />
            <datepicker
              :disabled-dates="this.disabledDates"
              class="date-picker"
              :monday-first="true"
              :language="ru"
              :placeholder="placeholder"
              v-model="emailBody.date"
            ></datepicker>
            <input
              type="text"
              placeholder="Телефон"
              v-model="emailBody.phone"
            />
            <input
              type="text"
              placeholder="Кратко опишите проблему"
              v-model="emailBody.problem"
            />
            <div class="online-registr-btn__wrap">
              <button>Отправить</button>
              <a href="mailto:pomogaika96@yandex.ru">pomogaika96@yandex.ru</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
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
      url: "https://pomogayka96.ru/wp-json/contact-form-7/v1/contact-forms/246/feedback",
      emailBody: {
        client: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        problem: "",
      },
    };
  },

  computed: {
    ...mapGetters({
      contacts: "info/getContacts",
    }),
  },
  created() {
    this.$store.dispatch("info/LOAD_CONTACTS");
  },
  methods: {
    submitForm() {
      var form1 = new FormData();
      let date = new Date(this.emailBody.date);
      this.emailBody.date = date.toLocaleDateString();

      for (let field in this.emailBody) {
        form1.append(field, this.emailBody[field]);
      }
      axios
        .post(this.url, form1)
        .then((response) => {
          this.errors = response.data;
          if (response.data.status === "mail_sent") {
            this.emailBody = {
              client: "",
              email: "",
              phone: "",
              service: "",
              date: "",
              problem: "",
            };
          }
        })
        .catch((error) => {
          this.errors = error.response.data;
        });
    },
  },
};
</script>

<style scoped>
.date-picker {
  width: 100%;
}
</style>