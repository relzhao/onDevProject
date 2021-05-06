import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

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
});
