import Vue from "vue";

import "../node_modules/material-icons/iconfont/material-icons.css";
import "bootstrap";

import axios from "axios";
import VueAxios from "vue-axios";

import "../node_modules/swiper/swiper-bundle.css";
import VueAwesomeSwiper from "vue-awesome-swiper";

import VueC3 from "vue-c3";

import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

const app = new Vue({
  router,
  render: (h) => h(App),
});

Vue.component(VueC3);
Vue.use(VueAxios, axios);
Vue.use(VueAwesomeSwiper);

app.$mount("#app");
