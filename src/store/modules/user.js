/*
 * @Author: your name
 * @Date: 2021-06-09 00:03:29
 * @LastEditTime: 2021-09-03 22:26:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /onDevProject/src/store/modules/user.js
 */
import { login, getInfo, logout } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";

const state = {
  token: getToken(),
  name: "",
  roles: [],
};

const mutations = {
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  },
};

const actions = {
  login({ commit }, userInfo) {
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      try {
        login({ username: username.trim(), password: password })
          .then((response) => {
            const { data } = response.data;
            console.log(response);
            console.log(data);
            commit("SET_TOKEN", data.token);
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
          const { data } = response.data;
          if (!data) {
            reject("getInfo:必须为非空数组");
          }
          console.log("data:", data);
          const { roles, username } = data;
          commit("SET_ROLES", roles);
          commit("SET_NAME", username);
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line no-undef
      logout(state.token)
        .then(() => {
          commit("SET_TOKEN", "");
          commit("SET_ROLES", "");
          removeToken();
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  resetToken({ commit }) {
    return new Promise((resolve) => {
      commit("SET_TOKEN", "");
      commit("SET_ROLES", []);
      removeToken();
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
