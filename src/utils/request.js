/*
 * @Author: your name
 * @Date: 2021-05-04 22:51:47
 * @LastEditTime: 2021-09-02 22:36:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo-vue\my-app\src\utils\request.js
 */
import axios from "axios";
// import store from "@/store";

function requests() {
  const service1 = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 50000,
  });
  const service2 = axios.create({
    timeout: 50000,
  });
  return [service1, service2];
}

requests()[0].interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
requests()[0].interceptors.response.use(
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
export default requests;
