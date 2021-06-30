<template>
  <div>
    <h2 @click="showInfo">123</h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CabinetPage",
  methods: {
    showInfo() {
      console.log(this.getUser);
    },
  },
  computed: {
    ...mapGetters({
      getUser: "auth/getAuthenticated",
    }),
  },
};
</script>


<style scoped>
</style>