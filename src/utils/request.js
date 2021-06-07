/*
 * @Author: your name
 * @Date: 2021-05-04 22:51:47
 * @LastEditTime: 2021-06-08 01:06:35
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \demo-vue\my-app\src\utils\request.js
 */
import axios from "axios";
// import store from "@/store";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 50000,
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    //20000:错误代码
    if (res.code !== 20000) {
      console.log("输入错误:" + res.code);
      // 50008:非法代码 500012：其他地方已登录
      if (res.code === 50008 || res.code === 500012) {
        console.log("有错误：" + res.code);
      }
      return Promise.reject(res);
    }
    return res;
  },
  (error) => {
    console.log("err:" + error);
    return Promise.reject(error);
  }
);
export default service;
