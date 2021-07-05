import axios from "axios";

const catalog = {
  namespaced: true,
  state: {
    carBrands: null
  },
  mutations: {
    SET_BRANDS (state, payload) {
      state.carBrands = payload
    }
  },
  actions: {
    LOAD_BRANDS ({commit}) {
      axios.get('https://pomogayka96.ru/wp-json/pg/v1/get/main/bases').then((res => {
        commit('SET_BRANDS', res.data)
      })).catch((err) => {
        console.log(err);
      })
    }
  },
  getters: {
    getCarBrands(state) {
      return state.carBrands
    }
  },
}


export default catalog