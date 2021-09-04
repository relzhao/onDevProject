/*
 * @Author: your name
 * @Date: 2021-04-25 00:29:29
 * @LastEditTime: 2021-08-30 18:02:44
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
        },
      },
    ],
  },
  {
    path: "/application",
    component: Layout,
    name: "应用管理",
    meta: { title: "应用管理" },
    // redirect: "noRedirect",
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
