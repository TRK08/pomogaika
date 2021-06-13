import VueRouter from 'vue-router'
import HomeShop from '../pages/HomeShop'
import HomeService from '../pages/HomeService'
import ArticlesPage from '../pages/ArticlesPage'
import ArticlePage from '../pages/ArticlePage'

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
