/*
 * @Author: your name
 * @Date: 2021-06-09 00:03:29
 * @LastEditTime: 2021-09-02 23:49:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /onDevProject/src/api/index.js
 */
import request from "../utils/request";

function getMock(data) {
  return request()[0]({
    url: "/vue-demo/user/login",
    method: "get",
    data,
  });
}
export { getMock };
