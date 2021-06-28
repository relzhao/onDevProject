/*
 * @Author: your name
 * @Date: 2021-04-01 21:49:22
 * @LastEditTime: 2021-06-23 18:02:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo-vue\my-app\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
import "./permission";
import "./plugins/element.js";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import * as echarts from "echarts";

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
