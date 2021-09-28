/*
 * @Author: your name
 * @Date: 2021-04-01 21:49:22
 * @LastEditTime: 2021-09-26 12:12:20
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
import "@/styles/index.scss"; // global css
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import * as echarts from "echarts";
// import VueAMap from "vue-amap";
import AmapVueConfig from "@amap/amap-vue/lib/config";
import AmapVue from "@amap/amap-vue";

AmapVueConfig.key = "93e17215e23ba1c2caad18705a6fbeb1";
AmapVue.config.plugins = [
  "AMap.ToolBar",
  "AMap.MoveAnimation",
  "AMap.Driving",
  "AMap.Geolocation",
];
Vue.use(AmapVue);
// Vue.use(VueAMap);
// VueAMap.initAMapApiLoader({
//   key: "93e17215e23ba1c2caad18705a6fbeb1",
//   plugin: [
//     "AMap.Autocomplete",
//     "AMap.PlaceSearch",
//     "AMap.Scale",
//     "AMap.OverView",
//     "AMap.ToolBar",
//     "AMap.MapType",
//     "AMap.PolyEditor",
//     "AMap.CircleEditor",
//     "AMap.GeometryUtil",
//     "AMap.AMapManager",
//     "AMap.Marker",
//   ],
//   v: "1.4.4",
// });
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
