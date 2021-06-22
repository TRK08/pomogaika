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

const routes = [
	{
		path: '/',
		component: HomeShop,
	},
	{
		path: '/cart',
		component: CartPage
	},
	{
		path: '/cabinet',
		component: CabinetPage
	},
	{
		path: '/login',
		component: LoginPage
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
	}
]

export default routes
