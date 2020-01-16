import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)



const store = new Vuex.Store({
  state: {
    user: {},
    token: '',
    menus: [],
    routes: []
  },
  getters: {

  },
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.routes = routes
    }
  }
})

export default store
