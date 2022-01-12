import { createStore } from 'vuex'

export default createStore({
  state: {
    onHome: null
  },
  mutations: {
    changeNavbar(state, payload) {
      state.onHome = payload
    }
  },
  actions: {},
  getters: {}
})
