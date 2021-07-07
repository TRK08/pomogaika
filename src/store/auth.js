import axios from "axios";

const auth = {
  namespaced: true,
  state : {
    token: null,
    user: null,
    error: false,
    preload: false
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
    },
    PRELOADER(state) {
      state.preload = !state.preload
    },
    CHANGE_AVATAR(state, avatar){
      state.user.avatar = avatar
      localStorage.setItem("user", JSON.stringify(state.user));
  }
  },
  actions: {
    SET_PRELOAD ({commit}) {
      commit('PRELOADER')
    },
    async REGISTR({commit}, user) {
      try {
        let requestParams = {
          name: user.name,
          surname: user.surname,
          email: user.email,
          password: user.password,
        }

        await axios
        .post(`https://pomogayka96.ru/wp-json/pg/v1/registration?`, user, {params: requestParams})
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
        console.log(user);
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
          console.log(user);
          let error = false
          commit('SET_ERROR', error)
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
    changeAvatar({commit}, avatar){
      console.log(avatar);
      localStorage.removeItem("user");
      commit("CHANGE_AVATAR", avatar)
  }
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



