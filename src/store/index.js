import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import articles from '../store/articles'

export default new Vuex.Store({
	modules: {	
		articles
	}
}) 