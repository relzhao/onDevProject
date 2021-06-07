/*
 * @Author: your name
 * @Date: 2021-04-25 00:29:29
 * @LastEditTime: 2021-06-08 01:28:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /onDevProject/src/router/index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../layout";
// import Config from "../views/Config.vue";
// import Application from "../views/Application.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/redirect",
    component: Layout,
    children: [
      {
        path: "/redirect/:path*",
        component: () => import("../views/redirect"),
      },
    ],
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("../views/Home"),
        meta: {
          title: "Dashboard",
        },
      },
    ],
  },
  // {
  //   path: "/about",
  //   // name: "About",
  //   component: Layout,
  //   children: [
  //     {
  //       path: "",
  //       // name: "About",
  //       component: () => import("../views/About"),
  //       meta: {
  //         title: "关于",
  //       },
  //     },
  //   ],
  // },
  {
    path: "/config",
    component: Layout,
    children: [
      {
        path: "",
        name: "Config",
        component: () => import("../views/Config"),
        meta: {
          title: "配置",
        },
      },
    ],
  },
  {
    path: "/application",
    component: Layout,
    meta: { title: "应用管理" },
    redirect: "/app",
    children: [
      {
        name: "App",
        path: "/app",
        component: () => import("../views/Application"),
        meta: {
          title: "应用",
        },
      },
      {
        name: "About",
        path: "/about",
        component: () => import("../views/About"),
        meta: {
          title: "关于",
        },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
