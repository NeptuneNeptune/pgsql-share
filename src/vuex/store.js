import Vuex from "vuex"
import Vue from "vue";

import pgState from "./pgsql-store"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pgState
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {}
})
