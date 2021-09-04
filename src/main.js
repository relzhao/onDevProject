/*
 * @Author: your name
 * @Date: 2021-04-01 21:49:22
 * @LastEditTime: 2021-09-02 21:46:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo-vue\my-app\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "@/store";
import "@/styles/index.scss";
import "./permission";
import "./plugins/element.js";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import * as echarts from "echarts";
import AmapVueConfig from "@amap/amap-vue/lib/config";

AmapVueConfig.key = "93e17215e23ba1c2caad18705a6fbeb1";
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
