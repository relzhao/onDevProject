/*
 * @Author: your name
 * @Date: 2021-06-09 00:03:29
 * @LastEditTime: 2021-06-18 10:54:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /onDevProject/src/api/user.js
 */
import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/yf-admin/user/login",
    method: "post",
    data,
  });
}
export function getInfo(token) {
  return request({
    url: "/yf-admin/user/info",
    method: "get",
    params: { token },
  });
}
