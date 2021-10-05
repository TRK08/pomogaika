<template>
  <section class="form-admin">
    <h2>Введите E-mail пользователя которому хотите отправить корзину</h2>
    <form action="" @submit.prevent="sendCart">
      <input v-model="email" type="text" placeholder="E-mail" />
      <button>Отправить</button>
    </form>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CartFormAdmin",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    sendCart() {
      this.$store.dispatch("goods/SEND_ADMIN_CART", this.email);
      this.email = "";
    },
  },
  computed: {
    ...mapGetters({
      cart: "goods/getCart",
    }),
  },
};
</script>

<style scoped>
.form-admin {
  text-align: center;
}

.form-admin h2 {
  margin-bottom: 30px;
}

.form-admin form {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
}

.form-admin form button {
  padding: 12px 15px;
  background-color: #030405;
  color: #fff;
  border: none;
  font-family: "Noah";
  font-weight: 700;
  width: 100%;
  margin-top: 30px;
}

.form-admin form input {
  background-color: #f0f0f1;
  padding: 14px 25px 12px 25px;
  outline: none;
  border: none;
  width: 100%;
}
</style>