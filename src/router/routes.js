import VueRouter from 'vue-router'
import HomeShop from '../pages/HomeShop'
import HomeService from '../pages/HomeService'
import ArticlesPage from '../pages/ArticlesPage'
import ArticlePage from '../pages/ArticlePage'
import UslugaPage from '../pages/UslugaPage'

const routes = [
	{
		path: '/',
		component: HomeShop,
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
