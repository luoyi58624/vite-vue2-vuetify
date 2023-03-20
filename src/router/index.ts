import Vue from 'vue'
import VueRouter from 'vue-router'
import adminRoutes from '@/router/routes/admin'
import Layout from "@/layout/Layout.vue";

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'hash',
	routes: [
		{
			path: '/',
			redirect: '/home',
			component: Layout,
			children: adminRoutes
		},
		{
			path: '/login',
			name: 'Login',
			component: () => import('@/pages/Login.vue')
		}
	]
})

export default router
