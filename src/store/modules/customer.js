/*
 * @Author: your name
 * @Date: 2021-09-03 00:00:54
 * @LastEditTime: 2021-09-28 17:04:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /onDevProject/src/store/modules/customer.js
 */
import {
  getCustomer,
  getGeocode,
  getCustomer1,
  getGeocode1,
} from "@/api/customer";

const state = {
  customers: [],
};

const mutations = {
  SET_CUSTOMER: (state, customers) => {
    state.customers.some((item, index) => {
      if (item.customer === customers.customer) {
        state.customers[index] = customers;
        return;
      }
    });
    state.customers.push(customers);
  },
};

const actions = {
  getCustomer1() {
    return new Promise((resolve, reject) => {
      try {
        getCustomer1()
          .then((response) => {
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

  getCustomer() {
    // let fullData = []
    return new Promise((resolve, reject) => {
      try {
        getCustomer()
          .then((response) => {
            // console.log(123);
            // console.log(response.data);
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
  getGeocode({ commit }, params) {
    // 地理编码
    // console.log(params);
    return new Promise((resolve, reject) => {
      try {
        getGeocode(params)
          .then((response) => {
            const { config, data } = response;
            // console.log(response);
            if (data.status != 0) {
              let arr = {
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
              };
              // state.customers.push(arr);
              // console.log(arr);
              commit("SET_CUSTOMER", arr);
              resolve();
            } else {
              console.log(`${params.customer} ${params.add} 请求为空`);
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
  getGeocode1({ commit }, params) {
    console.log(params);
    return new Promise((resolve) => {
      getGeocode1(params)
        .then((response) => {
          let customer = JSON.parse(response.config.data);
          let amapRes = response.data;
          let commitArray = Object.assign(customer, amapRes.geocodes[0]);
          // console.log(commitArray);
          commit("SET_CUSTOMER", commitArray);
          resolve();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
