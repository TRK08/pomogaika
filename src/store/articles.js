import axios from 'axios'

const articles = {
  namespaced: true,
	state: {
		articles: [],
    singleArticle: null
  },
	mutations: {
		SET_ARTICLES(state, art) {
      state.articles = art
    },

    SET_SINGLE_ARTICLE(state, article) {
      state.singleArticle = article
    }
	},
	actions: {
    LOAD_ARTICLES({commit}){
      axios
      .get("https://pomogayka96.ru/wp-json/pg/v1/get/articles")
      .then(res => {
        commit('SET_ARTICLES', res.data)
      })
    },

    LOAD_SINGLE_ARTICLE({commit, state}, id){
      state.singleArticle = {}

      axios
      .get(`https://pomogayka96.ru/wp-json/pg/v1/get/articles/${id}`)
      .then(res => {
        console.log(res.data);
        commit('SET_SINGLE_ARTICLE', res.data)
      })
    },
	},
	getters: {
		getArticles (state) {
      console.log(state.articles);
			return state.articles
		},

    getSingleArticle (state) {
      return state.singleArticle
    }
		}
}

export default articles


