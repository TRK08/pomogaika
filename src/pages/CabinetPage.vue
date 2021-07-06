<template>
  <div class="cabinet-page" v-if="user">
    <div class="container">
      <h2 class="cabinet-page-title">Личный кабинет</h2>
      <div class="user-name-block__wrap">
        <h3 class="cabinet-user-name">
          Здравствуйте, {{ user.user_display_name }}
        </h3>
        <button @click="signOut">Выйти</button>
      </div>
      <div class="cabinet-page__wrap">
        <div class="cabinet-photo">
          <div class="cabinet-img">
            <small>Фотография</small>
            <div class="cabinet-img__wrap">
              <img :src="user.avatar" alt="" />
            </div>
          </div>
          <div class="cabinet-load-img">
            <small>Загрузить фотографию</small>
            <label class="custom-load-profile-img" for="load-profile-img"
              >Выбрать файл</label
            >
            <input
              ref="file"
              type="file"
              name="upload"
              placeholder="Выбрать файл"
              id="load-profile-img"
              @change="changeAvatar"
            />
          </div>
        </div>
        <div class="cabinet-info">
          <form class="cabinet-change-info" action=""></form>
          <div class="cabinet-info-offers">
            <h3>Мои заказы</h3>
            <table class="cabinet-offers-table">
              <thead>
                <td>Номер заказа</td>
                <td>Дата оформления</td>
                <td>Сумма</td>
                <td>Статус заказа</td>
              </thead>
              <tbody>
                <tr>
                  <td>№ 005451</td>
                  <td>25.12.2020</td>
                  <td>15 600 р.</td>
                  <td>Доставлено</td>
                </tr>
                <tr>
                  <td>№ 005451</td>
                  <td>25.12.2020</td>
                  <td>15 600 р.</td>
                  <td>Доставлено</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
export default {
  name: "CabinetPage",
  data() {
    return {
      file: "null",
    };
  },
  methods: {
    ...mapActions({
      SIGN_OUT: "auth/SIGN_OUT",
    }),

    signOut() {
      this.SIGN_OUT().then(() => {
        this.$router.replace("/");
      });
    },
    changeAvatar() {
      console.log(this.user);
      axios
        .get(
          `https://pomogayka96.ru/wp-json/pg/v1/get/user?email=${this.user.user_email}`
        )
        .then((res) => {
          this.file = this.$refs.file.files[0];
          let userData = {
            avatar: this.file,
            user_id: res.data.ID,
          };
          console.log(userData);
          var form2 = new FormData();
          for (var field in userData) {
            form2.append(field, userData[field]);
          }
          console.log(form2);
          return form2;
        })
        .then((form2) => {
          axios
            .post("https://pomogayka96.ru/wp-json/pg/v1/set/avatar", form2)
            .then((res) => {
              console.log(res.data);
              this.$store.dispatch("auth/changeAvatar", res.data.avatar);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    ...mapGetters({
      user: "auth/getAuthenticated",
    }),
  },
};
</script>


<style scoped>
</style>