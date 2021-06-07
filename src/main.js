import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
import "./plugins/element.js";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import * as echarts from "echarts";
<<<<<<< HEAD
=======
import axios from "axios";
const { mockXHR } = require("../mock");
>>>>>>> 1cab51f9ee2111876dffa1198acc2f05c7d7aa54

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
<<<<<<< HEAD
=======
Vue.prototype.$http = axios;
if (process.env.NODE_ENV == "development") {
  mockXHR();
}
>>>>>>> 1cab51f9ee2111876dffa1198acc2f05c7d7aa54

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
