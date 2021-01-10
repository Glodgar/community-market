import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue')
	},
	{
		path: '/rules',
		name: 'Rules',
		component: () => import('../views/Rules')
	},
	{
		path: '/register',
		name: 'Register',
		component: () => import('../views/Register')
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login')
	},
	{
		path: '/account',
		name: 'Account',
		component: () => import('../views/Account')
	},
	{
		path: '/myOffers',
		name: 'MyOffers',
		component: () => import('../views/myOffers')
	},
	{
		path: '/newOffer',
		name: 'NewOffer',
		component: () => import('../views/newOffer')
	},
	{
		path: '/books',
		name: 'Books',
		component: () => import('../views/Books')
	},
	{
		path: '/books/:id',
		name: 'Book',
		props: true,
		component: () => import('../views/Book')
	},
	{
		path: '/automotives',
		name: 'Automotives',
		component: () => import('../views/Automotives')
	},
	{
		path: '/automotives/:id',
		name: 'Automotive',
		props: true,
		component: () => import('../views/Automotive')
	},
	
	{
		path: '/jobs',
		name: 'Jobs',
		component: () => import('../views/Jobs')
	},
	{
		path: '/jobs/:id',
		name: 'Job',
		props: true,
		component: () => import('../views/Job')
	},




	{
		path: '/test',
		name: 'Test',
		component: () => import('../views/test')
	}
]

const router = new VueRouter({
  routes
})

export default router
