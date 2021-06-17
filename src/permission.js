/*
 * @Author: rel
 * @Date: 2021-06-11 17:19:43
 * @LastEditTime: 2021-06-17 09:23:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /onDevProject/src/permission.js
 */
import router from "./router";
import store from "./store";
import { getToken } from "./utils/auth";

const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
  const hasToken = getToken();
  if (hasToken) {
    if (to.path === "/login") {
      next({ path: "/" });
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.lengtn > 0;
      if (hasRoles) {
        next();
      } else {
        try {
          const { roles } = await store.dispatch("user/get");
        } catch {}
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  }
});
