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
              <img v-if="user.user_avatar" :src="user.user_avatar" alt="" />
            </div>
          </div>
          <div class="cabinet-load-img">
            <small>Загрузить фотографию </small>
            <label class="custom-load-profile-img" for="load-profile-img"
              >Выбрать файл (.jpg, .png)</label
            >
            <input
              ref="file"
              type="file"
              name="upload"
              placeholder="Выбрать файл"
              accept=".jpg,.jpeg,.png"
              id="load-profile-img"
              @change="changeAvatar"
            />
          </div>
        </div>
        <div class="cabinet-info">
          <div class="cabinet-info-notifications" v-if="notifications">
            <div class="cabinet-info-notifications__header">
              <h3>Уведомления</h3>
              <div @click="readAllNotify" class="cabinet-notifications-bell">
                Прочитать все
                <img src="../assets/img/bell.svg" alt="" />
                <div
                  v-if="!readAll"
                  class="cabinet-notifications-bell__unread"
                ></div>
              </div>
            </div>
            <div
              class="cabinet-info-notification"
              v-for="item in notifications.slice(0, showNotify)"
              :key="item.link"
            >
              <p>
                <span
                  class="cabinet-info-notification-status"
                  :class="{ readed: !item.readed }"
                ></span>
                {{ item.text }}
              </p>
              <a :href="item.link"> {{ item.button }}</a>
            </div>
            <button
              class="cabinet-info__show-more"
              v-if="showNotify <= notifications.length - 1"
              @click="showNotify += 3"
            >
              Показать еще
            </button>
            <button
              class="cabinet-info__show-more"
              v-else
              @click="showNotify = 3"
            >
              Скрыть все
            </button>
          </div>
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
                <tr v-for="order in orders" :key="order.id">
                  <td>№ {{ order.id }}</td>
                  <td>{{ order.date.split("-").reverse().join("-") }}</td>
                  <td>{{ order.total }} р.</td>
                  <td>{{ order.status }}</td>
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
      orders: [],
      readAll: true,
      // notifications: [],
      showNotify: 3,
    };
  },
  methods: {
    ...mapActions({
      SIGN_OUT: "auth/SIGN_OUT",
    }),

    checkReadedNotify() {
      this.notifications.forEach((item) => {
        if (!item.readed) {
          this.readAll = false;
        }
      });
    },
    readAllNotify() {
      this.notifications.forEach((item) => {
        item.readed = true;
      });

      this.readAll = true;

      let data = {
        user: this.user.user_id,
        notifications: this.notifications,
      };

      axios
        .post(
          "https://pomogayka96.ru/wp-json/pg/v1/update/notifications",
          JSON.stringify(data),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          // console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    signOut() {
      this.SIGN_OUT().then(() => {
        this.$router.replace("/");
      });
    },
    getOrders() {
      axios
        .get(
          `https://pomogayka96.ru/wp-json/pg/v1/get/orders?user=${this.user.user_id}`
        )
        .then((res) => {
          this.orders = res.data;
          for (let i = 0; i < this.orders.length; i++) {
            if (this.orders[i].status === "completed") {
              this.orders[i].status = "Оплачен";
            }
            if (this.orders[i].status === "on-hold") {
              this.orders[i].status = "Не оплачен";
            }
            if (this.orders[i].status === "failed") {
              this.orders[i].status = "Оплата не прошла";
            }
            if (this.orders[i].status === "processing") {
              this.orders[i].status = "Оплата на подтверждении";
            }
            if (this.orders[i].status === "shipped") {
              this.orders[i].status = "Отправлен";
            }
            if (this.orders[i].status === "cancelled") {
              this.orders[i].status = "Отменен";
            }
            if (this.orders[i].status === "refunded") {
              this.orders[i].status = "Возвращен";
            }
            if (this.orders[i].status === "pending") {
              this.orders[i].status = "Ожидается оплата";
            }
          }
        });
    },
    changeAvatar() {
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
          var form2 = new FormData();
          for (var field in userData) {
            form2.append(field, userData[field]);
          }

          return form2;
        })
        .then((form2) => {
          axios
            .post("https://pomogayka96.ru/wp-json/pg/v1/set/avatar", form2)
            .then((res) => {
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
      notifications: "auth/getNotifications",
    }),
    formatStatus() {
      return this.orders.forEach((item) => {
        if (item.status === "completed") {
          return "Оплачен";
        }
        if (item.status === "on-hold") {
          return "Не оплачен";
        }
        if (item.status === "failed") {
          return "Оплата не прошла";
        }
        if (item.status === "processing") {
          return "Оплата на подтверждении";
        }
        if (item.status === "shipped") {
          return "Отправлен";
        }
        if (item.status === "cancelled") {
          return "Отменен";
        }
        if (item.status === "refunded") {
          return "Возвращен";
        }
        if (item.status === "pending") {
          return "Отправка";
        }
      });
    },
  },
  created() {
    this.getOrders();
    this.$store.dispatch("auth/getNotify").then((res) => {
      this.checkReadedNotify();
    });
  },
};
</script>


<style scoped>
.img-format {
  text-align: center;
  margin-top: 10px;
}

.cabinet-info-notifications__header {
  display: flex;
  justify-content: space-between;
}

.cabinet-notifications-bell {
  position: relative;
  cursor: pointer;
}

.cabinet-notifications-bell img {
  width: 30px;
  height: 30px;
}

.cabinet-info-notifications {
  margin-bottom: 30px;
}

.cabinet-info-notification p {
  display: flex;
  align-items: center;
}

.cabinet-info__show-more {
  margin: 0 auto;
  margin-top: 15px;
  width: 100%;
  background-color: transparent;
  border: none;
}

.cabinet-notifications-bell__unread {
  position: absolute;
  right: 0;
  top: -5px;
  display: block;
  width: 15px;
  height: 15px;
  background-color: #f84f31;
  border-radius: 100%;
}

.cabinet-info-notification-status {
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #2c2c2c;
  margin-right: 10px;
}

.cabinet-info-notification-status.readed {
  background-color: #f84f31;
}

.cabinet-info-notification {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  border-bottom: 1px solid #c4c4c4;
  padding: 15px 0;
}
</style>