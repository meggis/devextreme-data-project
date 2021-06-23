import App from "./App.vue";
import router from "./router";
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "devextreme/dist/css/dx.light.css";
import createAxios from "./utils/create-axios";
import createApi from "./api/index.js";
import createStore from "./store/index.js";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const axios = createAxios(process.env.VUE_APP_API_BASE_URL);
const api = createApi({ axios });
const store = createStore({ ...api, axios });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
