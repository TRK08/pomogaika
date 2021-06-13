
import axios from 'axios'

const serv = {
	state: {
		articles: [
        {
          id: "1",
          img: require("../assets/img/article-img.png"),
          date: "17 сентября 2020",
          title: "Лось бросился под колеса ",
        },
        {
          id: "2",
          img: require("../assets/img/article-img.png"),
          date: "18 сентября 2020",
          title: "Лось бросился под колеса — я что, еще и платить буду?!",
        },
        {
          id: "3",
          img: require("../assets/img/article-img.png"),
          date: "19 сентября 2020",
          title: "Лось бросился под колеса — я что, еще и платить буду?!",
        },
        {
          id: "4",
          img: require("../assets/img/article-img.png"),
          date: "27 сентября 2020",
          title: "Лось бросился под колеса — я что, еще и платить буду?!",
        },
        {
          id: "5",
          img: require("../assets/img/article-img.png"),
          date: "8 сентября 2020",
          title: "Лось бросился под колеса — я что, еще и платить буду?!",
        },
        {
          id: "6",
          img: require("../assets/img/article-img.png"),
          date: "9 сентября 2020",
          title: "Лось бросился под колеса — я что, еще и платить буду?!",
        },
        {
          id: "7",
          img: require("../assets/img/article-img.png"),
          date: "4 сентября 2020",
          title: "Лось бросился под колеса — я что, еще и платить буду?!",
        },
        {
          id: "8",
          img: require("../assets/img/article-img.png"),
          date: "21 сентября 2020",
          title: "Лось бросился под колеса — я что, еще и платить буду?!",
        },
		]
  	},
	mutations: {
		
	},
	actions: {
  
	},
	getters: {
		getArticles (state) {
			return state.articles
		}
		}
}

export default serv


