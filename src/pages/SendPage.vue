<template>
  <div class="send-page">
    <div class="container">
      <h2>Информация о доставке</h2>
      <div
        class="send-page-text-block"
        v-for="text in pageTexts"
        :key="text.title"
      >
        <h3 v-html="text.title"></h3>
        <p v-html="text.text"></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SendPage",
  computed: {
    ...mapGetters({
      pageTexts: "info/getSendText",
    }),
  },

  created() {
    this.$store.dispatch("info/LOAD_SEND_INFO");
  },
};
</script>

<style scoped>
.send-page {
  padding: 30px 0;
}

.send-page p:last-child {
  margin-bottom: 0;
}

.send-page * {
  margin-bottom: 30px;
}

.send-page h3 {
  color: #fbbb36;
}

@media (max-width: 991px) {
  .send-page * {
    margin-bottom: 25px;
  }

  .send-page h3 {
    margin-bottom: 15px;
  }

  .mb-custom {
    margin-bottom: 15px;
  }
}
</style>