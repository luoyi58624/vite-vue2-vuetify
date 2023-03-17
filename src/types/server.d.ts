// 声明服务端返回的数据模型
declare global {
	interface ServerUserModel {
		_id: string;
		username: string;
		password: string;
		email: string;
		nickname: string;
		sex: number;
		avatarUrl: string;
		menus: Array<string>;
		roles: Array<ServerRoleModel>;
		permissions: Array<ServerPermissionModel>;
	}

	interface ServerRoleModel {
		_id: number;
		roleName: string;
		roleDesc: string;
		enabled: boolean;
	}

	interface ServerPermissionModel {
		_id: number;
		permissionName: string;
		permissionDesc: string;
	}

	// 后端返回的菜单模型
	interface ServerMenuModel {
		_id: string;
		menuName: string;
		routePath: string; // 路由菜单
		redirectPath: string;
		componentPath: string;
		menuIcon: string;
		menuType: number;
		enabledCache: boolean;
		visiable: boolean;
		enabled: boolean;
		parentMenuId: string;
	}
}

export {};
