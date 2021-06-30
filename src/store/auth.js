import axios from "axios";

const auth = {
  namespaced: true,
  state : {
    isLoggined: false,
    status: null,
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
        .post('https://pomogayka96.ru/', user, {params: requestParams})
        .then(res => {
          console.log(res)
        })
      }
      catch (err) {
        console.log(err);
      }
    },

    // async AUTH_REQUEST({dispatch }, payload) {
    //   try {
    //       const {data} = await axios.post(`https://pomogayka96.ru`, payload, {params: {
    //         rest_route: '/jwt-auth/v1/auth',
    //         email: payload.email,
    //         password: payload.password
    //       }})
    //       return dispatch('VALIDATE', data)
    //   }
    //   catch (err) {
    //     alert('что-то пошло не так')
    //   }
    // },
    async AUTH_REQUEST({dispatch }, payload) {
      try {
          await axios.post(`https://pomogayka96.ru/wp-json/jwt-auth/v1/token`, payload).then(res => {
            console.log(res);
          })
          
      }
      catch (err) {
        alert('что-то пошло не так')
      }
    },
  //   async VALIDATE({ commit, state }, user) {
  //     console.log(user);
  //     // if (user) {
  //     //     commit("SET_TOKEN", user.token);
  //     //     commit("SET_USER", user);
  //     // }
  //     // if (!state.user) {
  //     //     return
  //     // }
  //     try {
  //         const response = await axios({
  //             url: 'https://pomogayka96.ru',
  //             method: 'get',
  //             params: {
  //               rest_route: '/jwt-auth/v1/auth/validate',
  //             },
  //             headers: {
  //                 'Authorization': `Bearer ${user.data.jwt}`
  //             }
  //         });
  //         console.log(response.data.data.user);
  //         localStorage.setItem("user", JSON.stringify(response.data.data.user));
  //         commit("SET_TOKEN", response.data.jwt[0].token);
  //         commit("SET_USER", response.data.data.user);
  //     }
  //     catch (err) {
  //         localStorage.removeItem("user");
  //         commit("SET_TOKEN", null);
  //         commit("SET_USER", null);
  //     }
  // },
  },
  getters: {
    getStatus (state) {
      return state.isLoggined
    },
    getAuthenticated(state){
      return state.user
  }
  }
}

export default auth



