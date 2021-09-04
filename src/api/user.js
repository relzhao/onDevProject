/*
 * @Author: your name
 * @Date: 2021-06-09 00:03:29
 * @LastEditTime: 2021-09-02 22:21:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /onDevProject/src/api/user.js
 */
import request from "@/utils/request";

export function login(data) {
  return request()[0]({
    url: "/yf-admin/user/login",
    method: "post",
    data,
  });
}
export function getInfo(token) {
  return request()[0]({
    url: "/yf-admin/user/info",
    method: "get",
    params: { token },
  });
}
export function logout() {
  return request()[0]({
    url: "/yf-admin/user/logout",
    method: "post",
  });
}
