import { RouteConfig } from 'vue-router'
import Layout from '@/layout/Layout.vue'
import SectionRouterView from '@/components/SectionRouterView.vue'

const adminRoutes: RouteConfig = {
	path: '/',
	redirect: '/home',
	component: Layout,
	children: [
		{
			path: 'home',
			name: 'Home',
			meta: {
				title: '首页',
				icon: 'mdi-home'
			},
			component: () => import('@/pages/Home.vue')
		},
		{
			path: 'user',
			redirect: '/user/list',
			name: 'User',
			meta: {
				title: '用户管理',
				icon: 'mdi-account-multiple-outline'
			},
			component: SectionRouterView,
			children: [
				{
					path: 'list',
					name: 'UserList',
					meta: { title: '用户列表' },
					component: () => import('@/pages/user/UserList.vue')
				}
			]
		},
		{
			path: 'system',
			redirect: '/system/app_version_manager',
			meta: {
				title: '系统管理',
				icon: 'mdi-cog'
			},
			component: SectionRouterView,
			children: [
				{
					path: 'app_version_manager',
					name: 'AppVersionManager',
					meta: { title: 'App版本管理' },
					component: () => import('@/pages/system/AppVersionManager.vue')
				}
			]
		}
	]
}

export default adminRoutes
