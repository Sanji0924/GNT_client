import Vue from "vue";
// Vue.prototype.$EventBus = new Vue();

import "../node_modules/material-icons/iconfont/material-icons.css";
import "bootstrap";

import VueLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

import axios from "axios";
import VueAxios from "vue-axios";

import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

import VueAwesomeSwiper from "vue-awesome-swiper";

// import "../node_modules/swiper/swiper-bundle.css";
// import VueAwesomeSwiper from "vue-awesome-swiper";

import VueC3 from "vue-c3";

// import "./assets/methods/eventBus";

import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

const app = new Vue({
  router,
  render: (h) => h(App),
});
// Vue.prototype.$bus = new Vue();

Vue.component("loading", VueLoading);
Vue.component("pulse-loader", PulseLoader);
Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);
Vue.component(VueC3);
Vue.use(VueAxios, axios);
Vue.use(VueAwesomeSwiper);
// Vue.use(VueAwesomeSwiper);

app.$mount("#app");
