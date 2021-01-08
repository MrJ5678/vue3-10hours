/*
 * @Author: hhhhhq
 * @Date: 2021-01-06 11:22:12
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-07 15:52:09
 * @Description: file content
 */
import { createStore } from "vuex"

// Create a new store instance.
const store = createStore({
  state() {
    return {
      isLoggedIn: false,
      authUser: {},
      isLoginOpen: false,
    }
  },
  mutations: {
    setIsLoggedin(state, payload) {
      state.isLoggedIn = payload
    },
    setAuthUser(state, payload) {
      state.authUser = payload
    },
    setLoginModal(state, payload) {
      state.isLoginOpen = payload
    },
  },
})

export default store
