<template>
	<v-data-table
		class="elevation-2"
		show-select
		hide-default-footer
		:items-per-page="100"
		:loading="tableLoading"
		:headers="tableHeader"
		:items="tableData"
		v-model="selected">
		<template v-slot:top>
			<v-toolbar flat>
				<v-toolbar-title>用户列表</v-toolbar-title>
				<v-divider class="mx-4" inset vertical></v-divider>
				<v-spacer></v-spacer>
				<v-btn depressed>新增用户</v-btn>
				<v-btn class="ml-1" depressed color="error">删除用户</v-btn>
			</v-toolbar>
		</template>
		<template v-slot:item.isActive="{ item }">
			<v-switch class="mt-n1" hide-details v-model="item.isActive" />
		</template>
	</v-data-table>
</template>

<script lang="ts">
import BaseTable from '@/mixins/BaseTable'

@Component
export default class UserListPage extends Mixins(BaseTable) {
	readonly api = '/user'
	readonly tableHeader = [
		{
			text: '编号',
			value: 'id'
		},
		{
			text: '用户名',
			sortable: false,
			value: 'username'
		},
		{
			text: '密码',
			sortable: false,
			value: 'password'
		},
		{
			text: '是否启用',
			sortable: false,
			value: 'isActive'
		}
	]
}
</script>

<style scoped lang="scss"></style>
