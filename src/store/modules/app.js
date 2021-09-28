/*
 * @Author: your name
 * @Date: 2021-09-14 23:20:09
 * @LastEditTime: 2021-09-15 08:39:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /onDevProject/src/store/modules/app.js
 */
const state = {
  sidebar: {
    status: true,
  },
};
const mutations = {
  TOGGLE_SIDEBAR: (state) => {
    state.sidebar.status = !state.sidebar.status;
  },
};
const actions = {
  toggleSidebar({ commit }) {
    commit("TOGGLE_SIDEBAR");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
