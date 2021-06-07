// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

<<<<<<< HEAD
// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context("./modules", true, /\.js$/);

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

const store = new Vuex.Store({
  modules,
=======
export default new Vuex.Store({
  // data
  state: {
    age: 100,
    first: "rel",
    secondname: "zhao",
    price: 73.55,
  },
  // computed
  getters: {
    realname: (state) => state.first + state.secondname,
    money_us: (state) => state.price / 7,
  },
  //methods
  //this.$store.commit("mutationsName")
  mutations: {
    addAge: (state, payload) => (state.age += payload.num),
  },
  actions: {
    addAgeAsync(context, payload) {
      setTimeout(() => {
        context.commit("addAge", payload);
      }, 1000);
    },
  },
  modules: {},
>>>>>>> 1cab51f9ee2111876dffa1198acc2f05c7d7aa54
});

export default store;
