<template>
  <div id="app">
    <router-view />
    <ToastMessage></ToastMessage>
  </div>
</template>

<script>
import emitter from "./assets/methods/eventBus";
import ToastMessage from "./components/ToastMessage.vue";

export default {
  provide() {
    return {
      emitter,
    };
  },
  components: {
    ToastMessage,
  },
  // 每次換頁面就滾到最上層
  watch: {
    $route: function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;700&display=swap");
@import "./assets/stylesheet/all.scss";
</style>
