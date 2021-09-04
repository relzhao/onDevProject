/*
 * @Author: your name
 * @Date: 2021-09-03 00:00:54
 * @LastEditTime: 2021-09-04 01:44:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /onDevProject/src/store/modules/customer.js
 */
import { getCustomer, getGeocode } from "@/api/customer";

const state = {
  customers: [],
};

const mutations = {
  SET_CUSTOMER: (state, customers) => {
    state.customers = customers;
  },
};

const actions = {
  getCustomer() {
    return new Promise((resolve, reject) => {
      try {
        getCustomer()
          .then((response) => {
            // commit("SET_CUSTOMER", response.data);
            resolve(response.data);
          })
          .catch((err) => {
            reject(err);
          });
      } catch (err) {
        reject(err);
      }
    });
  },
  getGeocode({ state }, AmapKey, address, customer) {
    return new Promise((resolve, reject) => {
      try {
        getGeocode(AmapKey, address, customer)
          .then((response) => {
            const { config, data } = response;
            if (data.status != 0) {
              state.customers.push({
                customer: config.customerInfo.customer,
                address: config.customerInfo.address,
                location: data.geocodes[0].location,
                formatted_address: data.geocodes[0].formatted_address,
                province: data.geocodes[0].province,
                city: data.geocodes[0].city,
                district: data.geocodes[0].district,
                citycode: data.geocodes[0].citycode,
                adcode: data.geocodes[0].adcode,
                level: data.geocodes[0].level,
              });
              // commit("SET_CUSTOMER", customerInfos);
              resolve();
            } else {
              console.log(`${customer} ${address} 请求为空`);
              reject("请求结果为空");
            }
          })
          .catch((err) => {
            reject(err);
          });
      } catch (err) {
        reject(err);
      }
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
