import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../layout";
// import Config from "../views/Config.vue";
// import Application from "../views/Application.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Layout,
    children: [
      {
        path: "",
        name: "Dashboard",
        component: () => import("../views/Home"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: Layout,
    children: [
      {
        path: "",
        name: "About",
        component: () => import("../views/About"),
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
      },
    ],
  },
  {
    path: "/application",
    component: Layout,
    children: [
      {
        name: "Application",
        path: "",
        component: () => import("../views/Application"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
