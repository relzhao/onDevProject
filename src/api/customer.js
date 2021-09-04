/*
 * @Author: your name
 * @Date: 2021-09-02 22:01:01
 * @LastEditTime: 2021-09-03 23:23:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /onDevProject/src/api/customer.js
 */
import request from "@/utils/request";

export function getGeocode(data) {
  const customerInfo = {
    address: data.address,
    customer: data.customer,
  };
  return request()[1]({
    url: `https://restapi.amap.com/v3/geocode/geo?key=${data.AmapKey}&address=${data.address}${data.customer}`,
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
