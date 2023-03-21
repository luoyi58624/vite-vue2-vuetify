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
			<v-img class="shrink mr-2" :src="logo" width="40" alt="Blog Logo" contain @click="$vuetify.breakpoint.mobile && openNavDrawer()" />
			<v-toolbar-title style="font-weight: bold">后台管理系统</v-toolbar-title>
		</div>
		<v-spacer />
		<v-btn icon class="mr-2" @click="$vuetify.theme.dark = !$vuetify.theme.dark">
			<v-icon v-if="$vuetify.theme.dark">mdi-theme-light-dark</v-icon>
			<v-icon v-else>mdi-white-balance-sunny</v-icon>
		</v-btn>
		<!--用户菜单栏-->
		<v-menu transition="slide-y-transition" nudge-bottom="5" offset-y bottom z-index="10000">
			<template v-slot:activator="{ on, attrs }">
				<v-btn icon v-bind="attrs" v-on="on">
					<v-icon>mdi-account-circle</v-icon>
				</v-btn>
			</template>
			<v-list dense nav>
				<v-list-item-group>
					<v-list-item to="/userInfo">
						<v-list-item-content>
							<v-list-item-title>
								<v-icon>mdi-account</v-icon>
								个人信息
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item>
						<v-list-item-content>
							<v-list-item-title>
								<v-icon>mdi-update</v-icon>
								修改密码
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item @click="adminUserStore.logout()">
						<v-list-item-content>
							<v-list-item-title>
								<v-icon>mdi-logout</v-icon>
								退出登录
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-menu>
	</v-app-bar>
</template>
