import { defineStore } from 'pinia'
import { RouteConfig } from 'vue-router'

// 侧边栏菜单模型
interface MenuModel {
	title: string // 菜单标题
	path: string // 跳转路径
	icon: string // 菜单icon
	children: Array<MenuModel> // 子路由菜单
}

export const useAdminLayoutStore = defineStore('admin-layout', {
	state: () => ({
		darwer: true,
		menus: [] as Array<MenuModel>
	}),
	actions: {
		/**
		 * 路由转菜单，由于vuetify限制，菜单嵌套最多三级
		 * @param routes     路由集合
		 * @param parentPath 父级路由
		 */
		routerToMenu(routes: Array<RouteConfig>, parentPath: string): Array<MenuModel> {
			const menus = []
			for (let i = 0; i < routes.length; i++) {
				let menu: MenuModel = {
					title: routes[i].meta.title,
					path: parentPath + '/' + routes[i].path,
					icon: routes[i].meta.icon || '',
					children: []
				}
				if (routes[i].children && routes[i].children.length > 0) {
					menu.children = this.routerToMenu(routes[i].children, menu.path)
				}
				menus.push(menu)
			}
			return menus
		}
	}
})
