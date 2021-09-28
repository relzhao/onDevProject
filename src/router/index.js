/*
 * @Author: your name
 * @Date: 2021-04-25 00:29:29
 * @LastEditTime: 2021-09-17 13:52:57
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

export const constantRoutes = [
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
          icon: "el-icon-s-home",
        },
      },
    ],
  },
  {
    path: "/application",
    component: Layout,
    name: "应用管理",
    // redirect: "noRedirect",
    redirect: "/application/app",
    meta: {
      title: "应用管理",
      icon: "el-icon-s-operation",
    },
    children: [
      {
        path: "app",
        component: () => import("../views/Application"),
        meta: {
          title: "应用",
          icon: "el-icon-setting",
        },
      },
      {
        path: "test",
        component: () => import("../views/Application"),
        meta: {
          title: "应用测试",
          icon: "el-icon-menu",
        },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    hidden: true,
    component: () => import("../views/login"),
  },
  {
    path: "/map",
    component: Layout,
    children: [
      {
        path: "amap",
        component: () => import("../views/map/Map"),
        name: "Map",
        meta: {
          title: "地图",
          icon: "el-icon-map-location",
        },
      },
    ],
  },
  {
    path: "/full-map",
    component: () => import("../views/map/FullMap"),

    children: [
      {
        path: "index",
        name: "FullMap",
        meta: {
          title: "移动端地图",
          icon: "el-icon-map-location",
        },
      },
    ],
  },
  {
    path: "/test",
    component: () => import("../views/map/Map"),
    meta: {
      title: "测试",
      icon: "el-icon-map-location",
    },
  },
];

export const asyncRoutes = [
  {
    path: "/config",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Config",
        component: () => import("../views/Config"),
        meta: {
          title: "配置",
          icon: "el-icon-s-tools",
          roles: ["admin"],
        },
      },
    ],
  },
];
const createRouter = () =>
  new VueRouter({
    routes: constantRoutes,
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}
export default router;
