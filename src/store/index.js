import { createStore } from 'vuex'

export default createStore({
  state: {
    lastScrollPosition: 0,
    navLight: null,
    showNav: true,
    showNavBg: false,
    showNavDropdown: false
  },
  mutations: {
    toggleNavTheme(state, payload) {
      state.navLight = payload
    },
    toggleNavVisibility (state, payload) {
      state.showNav = payload
    },
    changeScrollPosition (state, payload) {
      if (payload < 0) {
        return
      }
      if (Math.abs(payload - state.lastScrollPosition) < 60) {
        return
      }
      state.showMenu = false
      state.showNav = payload < state.lastScrollPosition
      state.lastScrollPosition = payload
      state.showNavDropdown = false
    },
    toggleNavBg (state, payload) {
      if (payload < state.lastScrollPosition) {
        state.showNavBg = true
        if (payload == 0) {
          state.showNavBg = false
        }
      }
    },
    toggleNavDropdown (state) {
      state.showNavDropdown = !state.showNavDropdown
    }
  },
  actions: {},
  getters: {}
})
