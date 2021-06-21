import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index.js'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueTheMask from 'vue-the-mask'
import Vuelidate from 'vuelidate'
import VueScrollTo from 'vue-scrollto'
import VueTyperPlugin from 'vue-typer'
import YmapPlugin from 'vue-yandex-maps'


import 'swiper/css/swiper.css'


const settings = {
  apiKey: 'e422ee4c-d64b-4823-81cd-e3460e50f7d4',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
}


Vue.use(VueTyperPlugin)
Vue.use(VueRouter) 
Vue.use(Vuelidate)
Vue.use(require('vue-cookies'))
Vue.use(VueAwesomeSwiper)
Vue.use(VueScrollTo)
Vue.use(VueTheMask)
Vue.use(YmapPlugin, settings)






// const basicScroll = require('basicscroll')



new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
