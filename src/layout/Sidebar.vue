<template>
	<v-navigation-drawer v-model="adminLayoutStore.darwer" app clipped touchless fixed hide-overlay :width="adminLayoutStore.darwerWidth">
		<!--由于vuetify list最多只能嵌套2层，同时嵌套所需要添加属性也不一样，所以无法使用递归方式渲染-->
		<v-list nav dense expand>
			<template v-for="routeMenu in adminLayoutStore.menus">
				<!--第一层渲染-->
				<v-list-item-group :key="routeMenu.path" v-if="routeMenu.children.length === 0" color="primary">
					<v-list-item :to="routeMenu.path" ondragstart="return false">
						<v-list-item-icon v-if="routeMenu.icon !== undefined">
							<v-icon v-text="routeMenu.icon" />
						</v-list-item-icon>
						<v-list-item-title>{{ routeMenu.title }}</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
				<!--第二层渲染-->
				<v-list-group
					:key="routeMenu.path"
					v-else
					:prepend-icon="routeMenu.icon"
					no-action
					:value="$route.fullPath.indexOf(routeMenu.path) !== -1">
					<template v-slot:activator>
						<v-list-item-title>{{ routeMenu.title }}</v-list-item-title>
					</template>
					<template v-for="child in routeMenu.children">
						<v-list-item :key="child.path" v-if="child.children.length === 0" :to="child.path" ondragstart="return false">
							<v-list-item-title>{{ child.title }}</v-list-item-title>
							<v-list-item-icon v-if="child.icon !== undefined">
								<v-icon v-text="child.icon" />
							</v-list-item-icon>
						</v-list-item>
						<!--第三层渲染-->
						<v-list-group :key="child.path" v-else no-action sub-group :value="$route.fullPath.indexOf(routeMenu.path) !== -1">
							<template v-slot:activator>
								<v-list-item-title>{{ child.title }}</v-list-item-title>
							</template>
							<v-list-item v-for="grandchild in child.children" :key="grandchild.path" :to="grandchild.path" ondragstart="return false">
								<v-list-item-title>{{ grandchild.title }}</v-list-item-title>
								<v-list-item-icon v-if="grandchild.icon !== undefined">
									<v-icon v-text="grandchild.icon" />
								</v-list-item-icon>
							</v-list-item>
						</v-list-group>
					</template>
				</v-list-group>
			</template>
		</v-list>

		<!--自定义vuetify右边框-->
		<template #append>
			<div class="m-resize-border-container" v-if="!$vuetify.breakpoint.mobile" @mousedown="startResize">
				<div class="m-resize-border-line"></div>
			</div>
		</template>
	</v-navigation-drawer>
</template>

<script lang="ts">
import adminRoutes from '@/router/routes/admin'
import Vue from 'vue'

@Component
export default class UserListPage extends Vue {
	adminLayoutStore = useAdminLayoutStore()
	resizeAttr = {
		initValue: 0,
		startX: 0
	}

	mounted() {
		this.adminLayoutStore.menus = this.adminLayoutStore.routerToMenu(adminRoutes, '')
	}

	startResize(e: MouseEvent) {
		this.resizeAttr.initValue = this.adminLayoutStore.darwerWidth
		this.resizeAttr.startX = e.clientX

		document.body.style.userSelect = 'none'
		document.body.addEventListener('mousemove', this.moveResize)
		document.body.addEventListener('mouseup', this.endResize)
	}

	moveResize(e: MouseEvent) {
		this.adminLayoutStore.darwerWidth = this.resizeAttr.initValue + e.clientX - this.resizeAttr.startX
	}

	endResize() {
		document.body.style.userSelect = ''
		document.body.removeEventListener('mousemove', this.moveResize)
		document.body.removeEventListener('mouseup', this.endResize)
	}
}
</script>

<style lang="scss">
.v-navigation-drawer__border {
	display: none;
}

.m-resize-border-container {
	position: absolute;
	top: 0;
	right: -4px;
	height: 100%;
	width: 9px;
	cursor: ew-resize;

	.m-resize-border-line {
		width: 1px;
		height: 100%;
		margin: 0 auto;
		background: rgba(0, 0, 0, 0.12);
	}
}
</style>
