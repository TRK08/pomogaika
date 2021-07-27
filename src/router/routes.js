import VueRouter from 'vue-router'
import HomeShop from '../pages/HomeShop'
import HomeService from '../pages/HomeService'
import ArticlesPage from '../pages/ArticlesPage'
import ArticlePage from '../pages/ArticlePage'
import UslugaPage from '../pages/UslugaPage'
import PaymentPage from '../pages/PaymentPage'
import SendPage from '../pages/SendPage'
import GuaranteePage from '../pages/GuaranteePage'
import CartPage from '../pages/CartPage'
import CabinetPage from '../pages/CabinetPage'
import LoginPage from '../pages/LoginPage'
import RegistrPage from '../pages/RegistrPage'
import SingleGood from '../pages/SingleGood'
import NotFound from '../pages/NotFound'

import store from '../store'

const routes = [
	{
		path: '/',
		component: HomeShop,
	},
	{
		path: '*',
		component: NotFound
	},
	{
		path: '/cart',
		component: CartPage
	},
	{
		path: '/cabinet',
		component: CabinetPage,
		beforeEnter: (to, from, next) => {
			if (store.getters["auth/getAuthenticated"]) {
				next()
			}
			else {
				if (to.path != "/login") {
					next("/login")
				}
				else {
					next()
				}
			}
		}
	},
	{
		path: '/login',
		component: LoginPage,
		beforeEnter: (to, from, next) => {
			if (!store.getters["auth/getAuthenticated"]) {
				next()
			}
			else {
				if (to.path != "/cabinet") {
					next("/cabinet")
				}
				else {
					next()
				}
			}
		}
	},
	{
		path: '/registr',
		component: RegistrPage
	},
	{
		path: '/payment',
		component: PaymentPage
	},
	{
		path: '/send',
		component: SendPage
	},
	{
		path: '/guarantee',
		component: GuaranteePage
	},
	{
		path: '/service',
		component: HomeService,
	},
	{
		path: '/service/:name',
		component: UslugaPage,
		props: true
	},
	{
		path: '/articles',
		component: ArticlesPage
	},
	{
		path: '/articles/:id',
		component: ArticlePage,
		props: true
	},
	{
		path: '/good/:id',
		component: SingleGood,
		props: true
	}
]

export default routes
