import axios from "axios";

const goods = {
  namespaced: true,
  state: {
    brands: null,
    goods: null,
    selectedGoodId: 0,
    cart: [],
    sales: []
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
    SET_CART(state, payload) {
      if (state.cart !== null) {
        let isProductAdd = false
        if (state.cart.length > 0) {
          state.cart.map((item) => {
            if (item.number === payload.number) {
              isProductAdd = true
              item.quantity++
            }
          })
          if (!isProductAdd) {
            state.cart.push(payload)
          }
        }
        else {
          state.cart.push(payload)
        }
        localStorage.setItem('cart', JSON.stringify(state.cart))
      }
    },
    QUANTITY_MINUS(state, index) {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    QUANTITY_PLUS(state, index) {
      state.cart[index].quantity++
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    DELETE_FROM_CART(state, index) {
      state.cart.splice(index, 1)
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    GET_CART_FROM_STORAGE(state) {
      if (localStorage.getItem('cart') !== null) {
        state.cart = [...JSON.parse(localStorage.getItem('cart'))]
      }
    },
    CLEAR_CART(state) {
      state.cart = []
      localStorage.removeItem('cart')
    },
    SET_SALES(state, sales) {
      state.sales = sales
    }
  },
  actions: {
    LOAD_GOODS({ commit, state }) {
      if (state.brands) {
        let id = state.selectedGoodId,
          brand = state.brands[id].brand,
          num = state.brands[id].number
        axios.get(`https://pomogayka96.ru/wp-json/pg/v1/shop/product/?brand=${brand}&article=${num}`).then((res => {

          res.data.crosses.forEach(item => {
            item.isAdded = false
          })

          res.data.crosses = res.data.crosses.filter(item => {
            return item.price !== ''
          })
          commit('SET_GOODS', res.data)
        })).catch((err) => {
          console.log(err);
        })
      }

    },
    LIVE_SEARCH({ commit }, value) {
      axios
        .get(
          `https://pomogayka96.ru/wp-json/pg/v1/shop/search/?article=${value}`
        )
        .then((res) => {

          commit('SET_BRANDS', res.data)
        });
    },
    SET_ORDER({ commit, state }, userInfo) {
      let products = []
      for (let i = 0; i < state.cart.length; i++) {
        let obj = {
          id: state.cart[i].id,
          amount: state.cart[i].quantity
        }
        products.push(obj)
      }
      userInfo.products = products
      let info = JSON.stringify(userInfo)
      axios.post('https://pomogayka96.ru/wp-json/pg/v1/shop/order/', info, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((res) => {
          let invoice = JSON.stringify(res.data.invoice_id)
          localStorage.setItem('invoice_id', invoice)
          window.location.assign(res.data.paylink)
        })
    },
    TAKE_GOOD_INDEX({ commit }, index) {
      commit('SET_GOOD_INDEX', index)
    },
    ADD_TO_CART({ commit }, item) {
      commit('SET_CART', item)
    },
    QUANTITY_MINUS({ commit }, index) {
      commit('QUANTITY_MINUS', index)
    },
    QUANTITY_PLUS({ commit }, index) {
      commit('QUANTITY_PLUS', index)
    },
    DELETE_FROM_CART({ commit }, index) {
      commit('DELETE_FROM_CART', index)
    },
    GET_CART_FROM_STORAGE({ commit }) {
      commit('GET_CART_FROM_STORAGE')
    },
    CLEAR_CART({ commit }) {
      commit('CLEAR_CART')
    },
    LOAD_SALES({ commit }) {
      axios.get('https://pomogayka96.ru/wp-json/pg/v1/get/sales').then((res) => {
        commit('SET_SALES', res.data)
      })
    },
  },
  getters: {
    getGoods(state) {
      return state.goods
    },
    getBrands(state) {
      return state.brands
    },
    getCart(state) {
      return state.cart
    },
    getSales(state) {
      return state.sales
    }
  },
}


export default goods