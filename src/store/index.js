import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import articles from '../store/articles'
import services from '../store/services'
import info from '../store/info'

export default new Vuex.Store({
	modules: {	
		articles,
		services,
		info
	}
}) 