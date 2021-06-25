import axios from "axios";

const auth = {
  namespaced: true,
  state : {
    isLoggined: false
  },
  mutations: {},
  actions: {},
  getters: {
    getStatus (state) {
      return state.isLoggined
    }
  }
}

export default auth