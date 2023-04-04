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
					<v-toolbar-title>App版本管理</v-toolbar-title>
					<v-divider class="mx-4" inset vertical></v-divider>
					<v-spacer></v-spacer>
					<v-btn class="mr-2" depressed @click="getNewVersion">获取最新版本</v-btn>
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
						<v-text-field label="版本号" outlined type="number" min="0" :rules="rules.requiredRule" v-model="formData.versionNum" />
						<v-radio-group label="App更新类型" v-model="formData.packageType" row>
							<v-radio label="热更新" :value="0"></v-radio>
							<v-radio label="整包更新" :value="1"></v-radio>
						</v-radio-group>
						<v-radio-group label="选择平台" v-if="formData.packageType === 1" v-model="formData.platform" row>
							<v-radio label="安卓" value="android"></v-radio>
							<v-radio label="苹果" value="ios"></v-radio>
						</v-radio-group>
						<v-file-input
							v-if="formData.packageType === 0 || formData.platform === 'android'"
							:label="fileSelect.label"
							outlined
							show-size
							prepend-icon=""
							truncate-length="50"
							:accept="fileSelect.accept"
							:rules="rules.requiredRule"
							v-model="formData.file" />
						<v-text-field v-else label="AppStore安装包地址" outlined :rules="rules.requiredRule" v-model="formData.storeUrl" />
						<v-textarea label="更新描述" outlined auto-grow rows="4" v-model="formData.updateDesc" />
					</v-form>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn text color="primary" :disabled="formLoading" @click="uploadApp">{{ isEdit ? '提交更新' : '上传App' }} </v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
		<v-dialog v-model="showAuthDialog" max-width="400" @input="clearAuth">
			<v-card :loading="authLoading">
				<v-card-title>需要验证</v-card-title>
				<v-card-text class="mt-4">
					<v-form>
						<v-text-field label="请输入验证码" :error-messages="authError" v-model="authCode" @input="authError = ''"></v-text-field>
					</v-form>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn text color="primary" :disabled="authLoading" @click="submitAuth">提交</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-container>
</template>

<script lang="ts">
import { DataTableHeader } from 'vuetify'

@Component
export default class AppVersionManagerPage extends Mixins(BaseTableMixins, FormRuleMixins, UtilMixins) {
	readonly api = '/app-version'
	readonly tableHeader = tableHeader
	auth = false
	isEdit = false
	showFormDialog = false
	formLoading = false
	formData = {
		versionName: '1.0.0',
		versionNum: 100,
		packageType: 0,
		platform: 'android',
		updateDesc: '',
		storeUrl: '',
		file: null
	}

	showAuthDialog = false
	authLoading = false
	authError = ''
	authCode = ''

	get fileSelect() {
		return this.formData.packageType === 0
			? { label: '选择wgt安装包', accept: '.wgt' }
			: {
					label: '选择apk安装包',
					accept: '.apk'
			  }
	}

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
			versionNum: 100,
			packageType: 0,
			platform: 'android',
			updateDesc: '',
			storeUrl: '',
			file: null
		}
		;(this.$refs.addFormRef as any).resetValidation()
	}

	uploadApp() {
		if (!this.auth) {
			this.showAuthDialog = true
			return
		}
		if ((this.$refs.addFormRef as any).validate()) {
			this.formLoading = true
			const formData = new FormData()
			formData.set('file', this.formData.file!)
			formData.set('versionName', this.formData.versionName)
			formData.set('packageType', this.formData.packageType.toString())
			formData.set('platform', this.formData.packageType === 0 ? 'all' : this.formData.platform)
			formData.set('versionNum', this.formData.versionNum.toString())
			this.formData.updateDesc.split('\n').forEach((item, index) => {
				formData.set(`updateDesc[${index}]`, item)
			})
			request
				.post(this.api + '/upload', formData)
				.then(() => {
					this.showFormDialog = false
					this.getTableData(this.api)
				})
				.finally(() => {
					this.formLoading = false
				})
		}
	}

	getNewVersion() {
		request.get(`${this.api}/newVersion`).then(res => {
			console.log(res)
			// this.$message.success()
		})
	}

	deleteHandler(id) {
		if (this.auth) {
			this.deleteTableData(this.api, id)
		} else {
			this.showAuthDialog = true
		}
	}

	submitAuth() {
		if (this.authCode === '') {
			this.authError = '请输入验证码'
			return
		}
		this.authLoading = true
		setTimeout(() => {
			this.authLoading = false
			if (this.authCode !== '654321') {
				this.authError = '验证码错误'
			} else {
				this.auth = true
				this.showAuthDialog = false
			}
		}, Math.random() * 1000 + 500)
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
	{ text: '版本号', value: 'versionNum', sortable: false, align: 'center' },
	{ text: '下载地址', value: 'downloadUrl', sortable: false, align: 'center' },
	// { text: '创建时间', value: 'createTime', sortable: false, align: 'center' },
	{ text: '操作', value: 'actions', sortable: false, align: 'center' }
]
</script>

<style scoped lang="scss"></style>
