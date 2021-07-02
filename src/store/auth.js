import axios from "axios";

const auth = {
  namespaced: true,
  state : {
    token: null,
    user: null,
    error: false
  },
  mutations: {
		SET_USER(state, user){
			state.user = user
		},
		SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_ERROR(state, err) {
      state.error = err
    }
  },
  actions: {
    async REGISTR({commit}, user) {
      try {
        let requestParams = {
          rest_route: "/jwt-auth/v1/users",
          email: user.email,
          password: user.password,
          AUTH_KEY: ";)XI(-c MzAYphrmW*5~e2s-F=5:N!9/(/%,*@6k8Z?y;PBHC),x-VM:f^-pfbWi",
        }

        await axios
        .post('https://pomogayka96.ru', user, {params: requestParams})
        .then(res => {
          console.log(res)
        })
      }
      catch (err) {
        console.log(err);
      }
    },

    async AUTH_REQUEST({commit, dispatch }, payload) {
      try {
          const {data} = await axios.post(`https://pomogayka96.ru/wp-json/jwt-auth/v1/token`, payload)
          let error = false
          commit('SET_ERROR', error)
          return dispatch('VALIDATE', data)
      }
      catch (err) {
        if(err.message.slice(-3) === '403') {
          console.log(1);
          let error = true
          commit('SET_ERROR', error)
        }
        else {
          alert('Что-то пошло не так')
        }
        
      }
    },
    async VALIDATE({ commit, state }, user) {
      if (user) {
          commit("SET_TOKEN", user.token);
          commit("SET_USER", user);
      }
      if (!state.user) {
          return
      }
      try {
          const response = await axios({
              url: 'https://pomogayka96.ru/wp-json/jwt-auth/v1/token/validate',
              method: 'post',
              headers: {
                  'Authorization': `Bearer ${user.token}`
              }
          });
          localStorage.setItem("user", JSON.stringify(user));
          commit("SET_TOKEN", user.token);
          commit("SET_USER", user);
      }
      catch (err) {
          localStorage.removeItem("user");
          commit("SET_TOKEN", null);
          commit("SET_USER", null);
      }
    },
    async SIGN_OUT({ commit }) {
      localStorage.removeItem("user");
      commit("SET_TOKEN", null);
      commit("SET_USER", null);
    },
  },
  getters: {
    getAuthenticated(state){
      return state.user
    },
    getError(state) {
      return state.error
    }
  }
}

export default auth



