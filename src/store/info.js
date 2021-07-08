import axios from 'axios'

const info = {
  namespaced: true,
  state: {
    contacts: {},
    shopSlides: [],
    shopText: [],
    serviceSlides: [],
    serviceText: []

  },
  mutations: {
    SET_CONTACTS(state, contacts) {
      state.contacts = contacts
    },
    SET_SHOP_TEXT(state, text) {
      state.shopText = text
    },
    SET_SERVICE_TEXT(state, text) {
      state.serviceText = text
    },
    SET_SHOP_SLIDES(state, slides) {
      state.shopSlides = slides
    },
    SET_SERVICE_SLIDES(state, slides) {
      state.serviceSlides = slides
    }
  },
  actions: {
    LOAD_CONTACTS({ commit }) {
      axios
        .get('https://pomogayka96.ru/wp-json/pg/v1/get/main/contacts')
        .then(res => {
          commit('SET_CONTACTS', res.data)
        })
    },
    LOAD_SHOP_TEXT({ commit }) {
      axios
        .get('https://pomogayka96.ru/wp-json/pg/v1/get/main/shop-about')
        .then(res => {
          commit('SET_SHOP_TEXT', res.data)
        })
    },
    LOAD_SERVICE_TEXT({ commit }) {
      axios
        .get('https://pomogayka96.ru/wp-json/pg/v1/get/main/about')
        .then(res => {
          commit('SET_SERVICE_TEXT', res.data)
        })
    },
    LOAD_SHOP_SLIDES({ commit }) {
      axios
        .get('https://pomogayka96.ru/wp-json/pg/v1/get/main/shop-slider')
        .then(res => {
          commit('SET_SHOP_SLIDES', res.data)
        })
    },
    LOAD_SERVICE_SLIDES({ commit }) {
      axios
        .get('https://pomogayka96.ru/wp-json/pg/v1/get/main/slider')
        .then(res => {
          commit('SET_SERVICE_SLIDES', res.data)
        })
    }
  },
  getters: {
    getContacts(state) {
      return state.contacts
    },
    getShopSlides(state) {
      return state.shopSlides
    },
    getShopText(state) {
      return state.shopText
    },
    getServiceSlides(state) {
      return state.serviceSlides
    },
    getServiceText(state) {
      return state.serviceText
    }
  },
}

export default info