/*
 * @Author: your name
 * @Date: 2021-06-09 00:03:29
 * @LastEditTime: 2021-06-17 09:25:05
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
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line no-undef
      getInfo(state.token)
        .then((response) => {
          const { data } = response;
          if (!data) {
            reject("getInfo:必须为非空数组");
          }
          const { roles, name } = data;
          commit("SET_ROLES", roles);
          commit("SET_NAME", name);
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  resetToken() {},
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
