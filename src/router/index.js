/*
 * @Author: your name
 * @Date: 2021-04-25 00:29:29
 * @LastEditTime: 2021-06-09 00:31:48
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
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
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
    name: "应用管理",
    meta: { title: "应用管理" },
    // redirect1: "noRedirect",
    redirect: "/application/app",
    children: [
      {
        path: "app",
        component: () => import("../views/Application"),
        meta: {
          title: "应用",
        },
      },
      {
        path: "about",
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
