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
        res.data.forEach(item => {

        function formatDate(date){
          return new Date(date.replace(/-/g, "/"))
        }
        let date = formatDate(item.date)
          let options = {
            year: "numeric",
            month: "long",
            day: "numeric",
          };
          item.date = date.toLocaleDateString("ru-RU", options).slice(0, -2);
        })
        commit('SET_ARTICLES', res.data)
      })
    },

    LOAD_SINGLE_ARTICLE({commit, state}, id){
      state.singleArticle = {}

      axios
      .get(`https://pomogayka96.ru/wp-json/pg/v1/get/articles/${id}`)
      .then(res => {
        function formatDate(date){
          return new Date(date.replace(/-/g, "/"))
        }
        let date = formatDate(res.data.date)
          let options = {
            year: "numeric",
            month: "long",
            day: "numeric",
          };
          res.data.date = date.toLocaleDateString("ru-RU", options).slice(0, -2);
        commit('SET_SINGLE_ARTICLE', res.data)
      })
    },

    PREV_ARTICLE({commit, state}, id) {
      state.articles.forEach((item, index) => {
        if (item.id === +id && index >= 0) {
          commit('SET_SINGLE_ARTICLE', state.articles[index - 1])
        }
      })
    },

    NEXT_ARTICLE({commit, state}, id) {
      state.articles.forEach((item, index) => {
        if (item.id === +id && index < state.articles.length) {
          commit('SET_SINGLE_ARTICLE', state.articles[index + 1])
        }
        else {
          console.log('error');
        }
      })
    },
	},
	getters: {
		getArticles (state) {
			return state.articles
		},

    getSingleArticle (state) {
      // return state.articles.find(item => item.name === id)
      return state.singleArticle
    }
		}
}

export default articles


