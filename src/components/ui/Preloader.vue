<template>
  <div class="prlder" :class="{ activate: activate }">
    <img src="../../assets/img/logo-yellow.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "Preloader",
  props: {
    activate: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.prlder {
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  position: fixed;
  z-index: -15;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-backdrop-filter: saturate(180%) blur(5px);
  backdrop-filter: saturate(180%) blur(5px);
  transition: 0.2s ease opacity;
  opacity: 0;
}
.prlder img {
  height: 80px;
  animation-name: spin;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transition: cubic-bezier(0.5, 0.8, 0.5, 0.2);
}
.prlder-bl {
  height: 50px;
  margin: 20px 0;
  animation-name: spin;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transition: cubic-bezier(0.5, 0.8, 0.5, 0.2);
}
.activate {
  z-index: 15;
  opacity: 1;
}
</style>