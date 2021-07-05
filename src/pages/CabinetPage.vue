<template>
  <div class="cabinet-page" v-if="user">
    <div class="container">
      <h2 class="cabinet-page-title">Личный кабинет</h2>
      <h3 class="cabinet-user-name">
        Здравствуйте, {{ user.user_display_name }}
      </h3>
      <button @click="signOut">выйти</button>
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
      this.file = this.$refs.file.files[0];
      let userData = {
        avatar: this.file,
        user_id: 17,
      };
      console.log(userData);
      var form2 = new FormData();
      for (var field in userData) {
        form2.append(field, userData[field]);
      }

      axios
        .post("https://pomogayka96.ru/wp-json/pg/v1/set/avatar", form2)
        .then((res) => {
          console.log(res);
          this.$store.dispatch("auth/changeAvatar", res.data.avatar);
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
.cabinet-page {
  padding: 30px 0;
}

.cabinet-page-title {
  margin-bottom: 70px;
}

.cabinet-user-name {
  margin-bottom: 30px;
}

.cabinet-page__wrap {
  display: flex;
  justify-content: space-between;
}

.cabinet-photo {
  max-width: 400px;
  width: 100%;
  margin-right: 80px;
}

.cabinet-photo small {
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  margin-bottom: 10px;
  display: block;
}

input[type="file"] {
  display: none;
}

.custom-load-profile-img {
  display: block;
  padding: 13px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  background-color: #000;
}

.cabinet-img {
  margin-bottom: 30px;
}

.cabinet-img__wrap {
  width: inherit;
  height: 400px;
  background-color: #c4c4c4;
}

.cabinet-info {
  width: 100%;
}

.cabinet-offers-table {
  border-collapse: collapse;
}

.cabinet-offers-table td {
  padding: 15px 0;
  text-align: left;
}

.cabinet-offers-table tr,
.cabinet-offers-table thead {
  border-bottom: 1px solid #c4c4c4;
}

@media (max-width: 991px) {
  .cabinet-img__wrap {
    height: 320px;
  }
}

@media (max-width: 767px) {
  .cabinet-offers-table td {
    text-align: center;
  }

  .cabinet-photo {
    margin-right: 30px;
  }
}
</style>