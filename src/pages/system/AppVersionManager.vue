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
					<v-btn class="mr-2" depressed @click="getNewVersion">获取最新版本</v-btn>
					<v-btn depressed @click="showAddDialog = true">上传App</v-btn>
				</v-toolbar>
			</template>
			<template v-slot:item.actions="{ item }">
				<v-btn text small color="error" @click="deleteTableData(api, item._id)">删除</v-btn>
			</template>
		</v-data-table>
		<v-dialog v-model="showAddDialog" max-width="600px">
			<v-card>
				<v-card-title>上传App</v-card-title>
				<v-card-text class="mt-4">
					<v-form ref="addFormRef">
						<v-text-field label="版本名字" outlined :rules="rules.requiredRule" v-model="addFormData.versionName" />
						<v-text-field label="版本号" outlined type="number" min="0" :rules="rules.requiredRule" v-model="addFormData.versionNum" />
						<v-file-input
							label="选择文件"
							outlined
							prepend-icon=""
							truncate-length="50"
							:rules="rules.requiredRule"
							v-model="addFormData.file" />
						<v-textarea label="更新描述" outlined auto-grow rows="4" v-model="addFormData.updateDesc" />
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
import { DataTableHeader } from 'vuetify'

@Component
export default class AppVersionManagerPage extends Mixins(BaseTable, FormRules) {
	readonly api = '/app-version'
	readonly tableHeader = tableHeader
	showAddDialog = false
	addFormLoading = false
	addFormData = {
		versionName: '1.0.0',
		versionNum: 100,
		updateDesc: '',
		file: null
	}

	uploadApp() {
		if ((this.$refs.addFormRef as any).validate()) {
			this.addFormLoading = true
			const formData = new FormData()
			formData.set('file', this.addFormData.file!)
			formData.set('versionName', this.addFormData.versionName)
			formData.set('versionNum', this.addFormData.versionNum.toString())
			this.addFormData.updateDesc.split('\n').forEach((item, index) => {
				formData.set(`updateDesc[${index}]`, item)
			})
			request
				.post(this.api + '/upload', formData)
				.then(() => {
					this.showAddDialog = false
					this.getTableData(this.api)
				})
				.finally(() => {
					this.addFormLoading = false
				})
		}
	}

	getNewVersion() {
		request.get(`${this.api}/newVersion`).then(res => {
			console.log(res)
			// this.$message.success()
		})
	}

	mounted() {
		this.getTableData(this.api)
	}
}

const tableHeader: Array<DataTableHeader> = [
	{ text: '编号', value: '_id' },
	{ text: '名称', value: 'appName', sortable: false, align: 'center' },
	{ text: '版本名字', value: 'versionName', sortable: false, align: 'center' },
	{ text: '版本号', value: 'versionNum', sortable: false, align: 'center' },
	{ text: '下载地址', value: 'downloadUrl', sortable: false, align: 'center' },
	// { text: '创建时间', value: 'createTime', sortable: false, align: 'center' },
	{ text: '操作', value: 'actions', sortable: false, align: 'center' }
]
</script>

<style scoped lang="scss"></style>
