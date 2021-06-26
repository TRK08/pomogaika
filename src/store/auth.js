import axios from "axios";

const auth = {
  namespaced: true,
  state : {
    isLoggined: true
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