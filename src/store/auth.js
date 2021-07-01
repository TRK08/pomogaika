import axios from "axios";

const auth = {
  namespaced: true,
  state : {
    token: null,
    user: null
  },
  mutations: {
		SET_USER(state, user){
			state.user = user
		},
		SET_TOKEN(state, token) {
      state.token = token;
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

    async AUTH_REQUEST({dispatch }, payload) {
      try {
          const {data} = await axios.post(`https://pomogayka96.ru/wp-json/jwt-auth/v1/token`, payload)
          console.log(data);
          return dispatch('VALIDATE', data)
      }
      catch (err) {
        alert('что-то пошло не так')
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
              // params: {
              //   rest_route: '/jwt-auth/v1/auth/validate',
              // },
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
  },
  getters: {
    getAuthenticated(state){
      return state.user
  }
  }
}

export default auth



