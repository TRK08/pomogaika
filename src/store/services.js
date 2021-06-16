import axios from 'axios'

const serv = {
  namespaced: true,
	state: {
		servicesCard: [],
    singleService: null,
  },
	mutations: {
		SET_SERVICES_CARD(state, serv) {
      state.servicesCard = serv
    },
    SET_SINGLE_SERVICE(state, serv) {
      state.singleService = serv
    }
	},
	actions: {
    LOAD_SERVICES_CARD({commit}){
      axios
      .get("https://pomogayka96.ru/wp-json/pg/v1/get/main/services")
      .then(res => {
        commit('SET_SERVICES_CARD', res.data)
      })
    },
    LOAD_SINGLE_SERVICE({commit}, id) {
      axios
        .get(`http://pomogayka96.ru/wp-json/pg/v1/get/services/${id}`)
        .then(res => {
          console.log(res.data['']);
          commit('SET_SINGLE_SERVICE', res.data[''])
        })
    }
	},
	getters: {
		getServicesCard(state) {
      return state.servicesCard
    },
    getSingleService(state) {
      return state.singleService
    }
		}
}

export default serv