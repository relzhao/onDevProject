/*
 * @Author: your name
 * @Date: 2021-09-02 22:01:01
 * @LastEditTime: 2021-09-27 23:38:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /onDevProject/src/api/customer.js
 */
import request from "@/utils/request";

const AmapKey = "1993158c7088a31b2c6b1806b1bac30d";

export function getGeocode(data) {
  console.log(data);
  const customerInfo = {
    address: data.add,
    customer: data.customer,
  };
  return request()[1]({
    url: data.url,
    method: "get",
    customerInfo,
  });
}

export function getCustomer() {
  return request()[0]({
    url: "/yf-admin/map/customer-info",
    method: "get",
  });
}

export function getCustomer1() {
  return request()[0]({
    url: "/yf-admin/customer/get-customers",
    method: "get",
  });
}

export function getGeocode1(data) {
  // console.log(data);
  let url = `https://restapi.amap.com/v3/geocode/geo?key=${AmapKey}&address=${data.add}${data.customer}`;
  return request()[1]({
    url: url,
    method: "get",
    data,
  });
}
