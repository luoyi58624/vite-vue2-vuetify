import { GridColumns, TreeConfig } from 'vxe-table';

// 声明应用全局类型
declare global {
	// 侧边栏菜单模型
	interface MenuModel {
		title: string; // 菜单标题
		path: string; // 跳转路径
		icon: string; // 菜单icon
		children: Array<MenuModel>; // 子路由菜单
	}

	// 渲染TagView的路由标签接口
	interface NavTabModel {
		title: string; // 标签名字
		path: string; // 标签跳转url
		icon: string; // 标签icon
	}

	interface ThemeModel {
		// layout布颜色局主题
		layout: {
			navbar: string;
			sidebar: string;
			section: string;
			navTab: string;
			navTabActive: string; // 导航标签激活背景色
			sidebarActiveText: string; // 侧边栏激活文字颜色
		};
		// ui组件库全局样式
		ui: {
			primary: string;
			success: string;
			warning: string;
			danger: string;
			info: string;
		};
	}

	// vxe高级表格选项配置
	interface GridOptions {
		id: string; // 表格id
		title: string; // 表格标题  用户->用户管理，新增用户，编辑用户
		apiName: string; // restfulApi名字，restfulApi[apiName]
		border?: boolean; // 是否显示边框，默认true
		rowId?: string; // 表格行id，默认_id
		columns: GridColumns[]; // 表格列
		disablePage?: boolean; //禁用分页，默认false
		autoLoad?: boolean; // 自动发送请求，默认为true
		// 树形表格配置
		treeConfig?: TreeConfig;
		// 表格查询模型
		queryModel?: any;
		// 表格新增、更新模型
		editModel?: any;
	}

	// 分页对象
	interface PageConfig {
		currentPage: number;
		pageSize: number;
	}

	/**
	 * vxe-table响应式对象
	 * D -> 表格数据结构
	 * Q -> 查询对象
	 */
	interface TableReactive<D = any, Q = any> {
		selectData: D; // 选中的数据
		checkboxData: Array<D>; // 批量选中的数据
		showQueryFormPanel: boolean; // 是否显示查询表单
		queryFormData: Q; // 查询表单对象
		showAddFormPanel: boolean; // 是否显示添加表单面板
		addFormLoading: boolean; // 提交添加表单loading
		addFormData: D; // 查询表单对象
		showUpdateFormPanel: boolean; // 是否显示更新表单面板
		updateFormLoading: boolean; // 提交更新表单loading
		updateFormData: D; // 更新表单对象
	}
}
