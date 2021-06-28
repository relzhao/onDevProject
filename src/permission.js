/*
 * @Author: rel
 * @Date: 2021-06-11 17:19:43
 * @LastEditTime: 2021-06-28 21:18:14
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
  console.log("token:", hasToken);
  if (hasToken) {
    console.log("enter hastoken");
    console.log(to.path);
    if (to.path === "/login") {
      console.log("enter login if");
      next({ path: "/" });
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0;
      console.log("hasRoles:", hasRoles);
      if (hasRoles) {
        console.log("enter hasroles");
        next();
      } else {
        console.log("no enter hasrole");
        try {
          // const { roles } = await store.dispatch("user/get");
          const data = await store.dispatch("user/getInfo");
          console.log("data", data);
          next();
        } catch (error) {
          console.log("catch", error);
          await store.dispatch("user/resetToken");
          next(`/login?redirect=${to.path}`);
        }
      }
    }
  } else {
    /* 没有token */
    console.log(to.path);
    if (whiteList.indexOf(to.path) !== -1) {
      console.log(1);
      next();
    } else {
      console.log(2);
      // next(`/login?redirect=${to.path}`);
      next("/login");
    }
  }
});
