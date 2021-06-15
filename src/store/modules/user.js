/*
 * @Author: your name
 * @Date: 2021-06-09 00:03:29
 * @LastEditTime: 2021-06-11 16:12:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /onDevProject/src/store/modules/user.js
 */
import { login } from "@/api/user";
import { getToken, setToken } from "@/utils/auth";

const state = {
  token: getToken(),
  name: "",
  role: [],
};

const mutations = {
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_ROLE: (state, role) => {
    state.role = role;
  },
};

const actions = {
  login({ commit }, userInfo) {
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      try {
        login({ username: username.trim(), password: password })
          .then((response) => {
            const { data } = response;
            commit("SET_TOKEN", data.token);
            commit("SET_NAME", username);
            setToken(data.token);
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      } catch (error) {
        console.log("error: ", error);
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
