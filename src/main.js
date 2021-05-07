import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import * as echarts from "echarts";
import axios from "axios";
const { mockXHR } = require("../mock");

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
Vue.prototype.$http = axios;
if (process.env.NODE_ENV == "development") {
  mockXHR();
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
