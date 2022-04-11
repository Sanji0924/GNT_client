import Vue from "vue";
// Vue.prototype.$EventBus = new Vue();

import "../node_modules/material-icons/iconfont/material-icons.css";
import "bootstrap";

import VueLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

import axios from "axios";
import VueAxios from "vue-axios";

import L from "leaflet";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

import iconRetinaUrl from "../public/marker.svg";
import iconUrl from "../public/marker.svg";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

import VueAwesomeSwiper from "vue-awesome-swiper";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import VueEasyLightbox from "vue-easy-lightbox";

import VeeValidate from "vee-validate";
import zhTW from "vee-validate/dist/locale/zh_TW";
// import VueI18n from "vue-i18n";

// const i18n = new VueI18n({
//   locale: "zhTW",
// });
// configure({
//   generateMessage: localize({ zh_TW: zhTW }),
//   validateOnInput: true,
// });

Vue.use(VeeValidate, {
  events: "input|blur", //這是為了讓使用者離開該欄位時觸發驗證
  dictionary: {
    zhTW,
  },
  locale: "zhTW",
});

import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

const app = new Vue({
  router,
  // i18n,
  render: (h) => h(App),
});
// Vue.prototype.$bus = new Vue();

Vue.component("loading", VueLoading);
Vue.component("pulse-loader", PulseLoader);
Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);
Vue.use(VueAxios, axios);
Vue.use(VueAwesomeSwiper);
Vue.use(VueSweetalert2);
Vue.use(VueEasyLightbox);
// Vue.use(VeeValidate);
// Vue.use(VueI18n);
// Vue.use(VueAwesomeSwiper);

app.$mount("#app");
