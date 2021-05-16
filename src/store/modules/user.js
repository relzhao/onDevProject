import { login } from "@/api/user";
import { getToken, setToken } from "@/utils/auth";

const state = {
  token: getToken(),
  name: "",
};

const mutations = {
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
};

const actions = {
  login({ commit }, userInfo) {
    console.log(userInfo);
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      console.log(2222);
      login({ username: username.trim(), password: password })
        .then((response) => {
          console.log(response);
          const { data } = response;
          commit("SET_TOKEN", data.token);
          setToken(data.token);
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

export default {
  namesSpaced: true,
  state,
  mutations,
  actions,
};
