<script setup lang="ts">
import adminRoutes from "@/router/routes/admin";

const adminLayoutStore = useAdminLayoutStore()
adminLayoutStore.menus = adminLayoutStore.routerToMenu(adminRoutes.children, '')
</script>

<template>
	<v-navigation-drawer v-model="adminLayoutStore.darwer" app clipped touchless fixed hide-overlay>
		<!--由于vuetify list最多只能嵌套2层，同时嵌套所需要添加属性也不一样，所以无法使用递归方式渲染-->
		<v-list nav dense expand>
			<template v-for="routeMenu in adminLayoutStore.menus">
				<!--第一层渲染-->
				<v-list-item-group :key="routeMenu.path" v-if="routeMenu.children.length === 0">
					<v-list-item :to="routeMenu.path" ondragstart="return false">
						<v-list-item-icon v-if="routeMenu.icon !== undefined">
							<v-icon v-text="routeMenu.icon" />
						</v-list-item-icon>
						<v-list-item-title>{{ routeMenu.title }}</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
				<!--第二层渲染-->
				<v-list-group :key="routeMenu.path" v-else :prepend-icon="routeMenu.icon" no-action>
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
						<v-list-group :key="child.path" v-else no-action sub-group>
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
	</v-navigation-drawer>
</template>

<style lang="scss"></style>
