<script setup lang="ts">
import logo from '@/assets/logo.png'

const adminLayoutStore = useAdminLayoutStore()
const adminUserStore = useAdminUserStore()

function openNavDrawer() {
	adminLayoutStore.darwer = true
}
</script>

<template>
	<v-app-bar app clipped-left elevation="3">
		<div class="d-flex align-center">
			<v-img
				class="shrink mr-2"
				:src="logo"
				width="40"
				alt="Blog Logo"
				contain
				@click="$vuetify.breakpoint.mobile && openNavDrawer()" />
			<v-toolbar-title style="font-weight: bold">后台管理系统</v-toolbar-title>
		</div>
		<v-spacer />
		<!--用户菜单栏-->
		<v-menu transition="slide-y-transition" nudge-bottom="5" offset-y bottom z-index="10000">
			<template v-slot:activator="{ on, attrs }">
				<v-avatar color="accent" size="40" v-bind="attrs" v-on="on">
					<img
						v-if="adminUserStore.avatarUrl"
						v-bind="attrs"
						v-on="on"
						:src="adminUserStore.avatarUrl"
						alt="user" />
					<v-icon v-else dark>mdi-account-circle</v-icon>
				</v-avatar>
			</template>
			<v-list dense nav>
				<v-list-item-group>
					<v-list-item to="/userInfo">
						<v-list-item-content>
							<v-list-item-title>
								<v-icon class="mr-2">mdi-account</v-icon>
								个人信息
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item>
						<v-list-item-content>
							<v-list-item-title>
								<v-icon class="mr-2">mdi-update</v-icon>
								修改密码
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item @click="adminUserStore.logout()">
						<v-list-item-content>
							<v-list-item-title>
								<v-icon class="mr-2">mdi-logout</v-icon>
								退出登录
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-menu>
	</v-app-bar>
</template>
