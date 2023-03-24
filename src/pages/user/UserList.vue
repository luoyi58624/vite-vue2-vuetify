<template>
	<v-container>
		<v-data-table
			class="elevation-1"
			show-select
			hide-default-footer
			:items-per-page="100"
			:loading="tableLoading"
			:headers="tableHeader"
			:items="tableData"
			v-model="selectedData">
			<template v-slot:top>
				<v-toolbar flat>
					<v-toolbar-title>用户列表</v-toolbar-title>
					<v-divider class="mx-4" inset vertical></v-divider>
					<v-spacer></v-spacer>
					<v-btn depressed  @click="showAddUser=true">新增用户</v-btn>
					<v-btn class="ml-1" depressed color="error">删除用户</v-btn>
				</v-toolbar>
			</template>
			<template v-slot:item.isActive="{ item }">
				<v-switch class="mt-n1" hide-details v-model="item.isActive" />
			</template>
		</v-data-table>
		<add-user v-model="showAddUser" />
	</v-container>
</template>

<script lang="ts">
import AddUser from './AddUser.vue'

@Component({
	components: { AddUser }
})
export default class UserListPage extends Mixins(BaseTable) {
	readonly api = '/user'
	readonly tableHeader = tableHeader
  showAddUser = false

	mounted() {
		this.getTableData(this.api)
	}
}

const tableHeader = [
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
</script>

<style scoped lang="scss"></style>
