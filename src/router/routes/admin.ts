import { RouteConfig } from 'vue-router'
import SectionRouterView from '@/components/SectionRouterView.vue'

const adminRoutes: RouteConfig[] = [
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
	},
	{
		path: 'test',
		redirect: '/test/vuetify/button',
		meta: {
			title: '测试',
			icon: 'mdi-cog'
		},
		component: SectionRouterView,
		children:[
			{
				path: 'vuetify',
				redirect: '/test/vuetify/button',
				meta: {
					title: 'vuetify测试',
				},
				component: SectionRouterView,
				children:[
					{
						path: 'button',
						name: 'VuetifyButton',
						meta: { title: '按钮' },
						component: () => import('@/pages/test/vuetify/VuetifyButton.vue')
					},
				]
			},
			{
				path: 'mysql_manager',
				name: 'MysqlManager',
				meta: { title: 'mysql管理' },
				component: () => import('@/pages/test/mysql/index.vue')
			},
		]
	},
	{
		path: 'nest',
		redirect: '/nest/one',
		meta: {
			title: '嵌套菜单',
			icon: 'mdi-cog'
		},
		component: SectionRouterView,
		children: [
			{
				path: 'one',
				name: 'One',
				meta: { title: '一级菜单' },
				component: () => import('@/pages/nest/One.vue')
			},
			{
				path: 'child',
				redirect: '/nest/child/two',
				meta: { title: '子菜单' },
				component: SectionRouterView,
				children: [
					{
						path: 'two',
						name: 'Two',
						meta: { title: '二级菜单' },
						component: () => import('@/pages/nest/Two.vue')
					},
				]
			}
		]
	}
]

export default adminRoutes
