<template>
	<v-container>
		<v-data-table
			class="elevation-2"
			show-select
			hide-default-footer
			:items-per-page="100"
			:loading="tableLoading"
			:headers="tableHeader"
			:items="tableData"
			v-model="selectedData">
			<template v-slot:top>
				<v-toolbar flat>
					<v-toolbar-title>App版本管理</v-toolbar-title>
					<v-divider class="mx-4" inset vertical></v-divider>
					<v-spacer></v-spacer>
					<v-btn depressed @click="showAddDialog = true">上传App</v-btn>
				</v-toolbar>
			</template>
		</v-data-table>
		<v-dialog v-model="showAddDialog" max-width="600px">
			<v-card>
				<v-card-title>上传App</v-card-title>
				<v-card-text>
					<v-form>
						<v-file-input label="选择文件" v-model="addFormData.file" />
					</v-form>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn text color="primary" :loading="addFormLoading" :disabled="addFormLoading" @click="uploadApp"> 开始上传 </v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-container>
</template>

<script lang="ts">
import BaseTable from '@/mixins/BaseTable'

@Component
export default class AppVersionManagerPage extends Mixins(BaseTable) {
	readonly api = '/app-version'
	readonly tableHeader = tableHeader
	showAddDialog = false
	addFormLoading = false
	addFormData = {
		file: null
	}

	uploadApp() {
		this.addFormLoading = true
		const formData = new FormData()
		formData.set('file', this.addFormData.file)
		request
			.post(this.api + '/upload', formData)
			.then(res => {
				console.log(res)
			})
			.finally(() => {
				setTimeout(() => {
					this.addFormLoading = false
				}, 500)
			})
	}

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
		text: '名称',
		sortable: false,
		value: 'appName'
	},
	{
		text: '版本号',
		sortable: false,
		value: 'appVersion'
	},
	{
		text: '创建时间',
		sortable: false,
		value: 'createTime'
	}
]
</script>

<style scoped lang="scss"></style>
