import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import articles from '../store/articles'
import services from '../store/services'

export default new Vuex.Store({
	modules: {	
		articles,
		services
	}
}) 