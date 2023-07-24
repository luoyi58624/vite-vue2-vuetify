<template>
	<v-container>
		<v-data-table
			class="elevation-2"
			show-select
			hide-default-footer
			item-key="_id"
			:items-per-page="100"
			:loading="tableLoading"
			:headers="tableHeader"
			:items="tableData"
			v-model="selectedData">
			<template v-slot:top>
				<v-toolbar flat>
					<v-toolbar-title>App版本管理2</v-toolbar-title>
					<v-divider class="mx-4" inset vertical></v-divider>
					<v-spacer></v-spacer>
					<v-btn depressed @click="showAddFormDialog">上传App</v-btn>
				</v-toolbar>
			</template>
			<template v-slot:item.actions="{ item }">
				<v-btn text small color="primary" @click="showEditFormDialog(item)">编辑</v-btn>
				<v-btn text small color="error" @click="deleteHandler(item._id)">删除</v-btn>
			</template>
		</v-data-table>
		<v-dialog v-model="showFormDialog" max-width="600px" @input="closeFormDialog">
			<v-card :loading="formLoading">
				<v-card-title>{{ isEdit ? '编辑App' : '上传App' }}</v-card-title>
				<v-card-text class="mt-4">
					<v-form ref="addFormRef">
						<v-text-field label="版本名字" outlined :rules="rules.requiredRule" v-model="formData.versionName" />
						<v-text-field label="版本号" outlined type="number" min="0" :rules="rules.requiredRule" v-model="formData.versionCode" />
						<v-file-input
							label="安装包"
							outlined
							show-size
							prepend-icon=""
							truncate-length="50"
							accept=".apk"
							:rules="rules.requiredRule"
							v-model="formData.file" />
						<v-textarea label="更新描述" outlined auto-grow rows="4" v-model="formData.updateDesc" />
					</v-form>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn text color="primary" :disabled="formLoading" @click="uploadApp">{{ isEdit ? '提交更新' : '上传App' }} </v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-container>
</template>

<script lang="ts">
import { DataTableHeader } from 'vuetify'

@Component
export default class AppVersionManagerPage extends Mixins(BaseTableMixins2, FormRuleMixins, UtilMixins) {
	readonly api = '/app-version'
	readonly tableHeader = tableHeader
	isEdit = false
	showFormDialog = false
	formLoading = false
	formData = {
		versionName: '0.0.1',
		versionCode: 1,
		updateDesc: '',
		file: null
	}

	authLoading = false
	authError = ''
	authCode = ''

	showAddFormDialog() {
		this.isEdit = false
		this.showFormDialog = true
	}

	showEditFormDialog(dataItem) {
		this.isEdit = true
		this.showFormDialog = true
		Object.keys(dataItem).forEach(key => {
			this.formData[key] = dataItem[key]
		})
		this.formData.updateDesc = dataItem.updateDesc.join('\n')
	}

	closeFormDialog() {
		this.formData = {
			versionName: '1.0.0',
			versionCode: 100,
			updateDesc: '',
			file: null
		}
		;(this.$refs.addFormRef as any).resetValidation()
	}

	uploadApp() {
		console.log(this.formData.file);
		
		if ((this.$refs.addFormRef as any).validate()) {
			this.formLoading = true
			const formData = new FormData()

			formData.set('appName', this.formData.file!.name)
			formData.set('versionName', this.formData.versionName)
			formData.set('versionCode', this.formData.versionCode.toString())
			formData.set('updateDesc', '')
			formData.set('file', this.formData.file!)
			// this.formData.updateDesc.split('\n').forEach((item, index) => {
			// 	formData.set(`updateDesc[${index}]`, item)
			// })
			request2
				.post(this.api, formData)
				.then(() => {
					this.showFormDialog = false
					this.getTableData(this.api)
				})
				.finally(() => {
					this.formLoading = false
				})
		}
	}

	deleteHandler(id) {
		this.deleteTableData(this.api, id)
	}

	clearAuth() {
		this.authError = ''
		this.authCode = ''
	}

	mounted() {
		this.getTableData(this.api)
	}
}

const tableHeader: Array<DataTableHeader> = [
	{ text: '编号', value: '_id' },
	{ text: '名称', value: 'appName', sortable: false, align: 'center' },
	{ text: '版本名字', value: 'versionName', sortable: false, align: 'center' },
	{ text: '版本号', value: 'versionCode', sortable: false, align: 'center' },
	{ text: '下载地址', value: 'downloadUrl', sortable: false, align: 'center' },
	{ text: '操作', value: 'actions', sortable: false, align: 'center' }
]
</script>

<style scoped lang="scss"></style>
