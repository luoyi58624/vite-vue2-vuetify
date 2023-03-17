import Vue from 'vue'
import VueRouter from 'vue-router'
import adminRoutes from '@/router/routes/admin'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'hash',
	routes: [
		adminRoutes,
		{
			path: '/login',
			name: 'Login',
			component: () => import('@/pages/Login.vue')
		}
	]
})

export default router
