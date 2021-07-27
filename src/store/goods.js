import axios from "axios";

const goods = {
  namespaced: true,
  state: {
    brands: null,
    goods: null,
    selectedGoodId: null
  },
  mutations: {
    SET_GOODS(state, payload) {
      state.goods = payload
    },
    SET_BRANDS(state, payload) {
      state.brands = payload
    },
    SET_GOOD_INDEX(state, payload) {
      state.selectedGoodId = payload
    },
  },
  actions: {
    LOAD_GOODS({ commit, state }) {
      let id = state.selectedGoodId,
        brand = state.brands[id].brand,
        num = state.brands[id].number
      axios.get(`https://pomogayka96.ru/wp-json/pg/v1/shop/product/?brand=${brand}&article=${num}`).then((res => {
        commit('SET_GOODS', res.data)
      })).catch((err) => {
        console.log(err);
      })
    },
    LIVE_SEARCH({ commit }, value) {
      axios
        .get(
          `https://pomogayka96.ru/wp-json/pg/v1/shop/search/?article=${value}`
        )
        .then((res) => {
          commit('SET_BRANDS', res.data)
          console.log(res);
        });
    },
    TAKE_GOOD_INDEX({ commit }, index) {
      commit('SET_GOOD_INDEX', index)
    }
  },
  getters: {
    getGoods(state) {
      return state.goods
    },
    getBrands(state) {
      return state.brands
    }
  },
}


export default goods