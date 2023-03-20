<template>
	<v-dialog v-model="show" max-width="600px">
		<v-card :loading="loading">
			<v-card-title>新建连接</v-card-title>
			<v-card-text>
				<v-form>
					<v-text-field label="连接名" v-model="formData.name" />
					<v-text-field label="主机地址" v-model="formData.host" />
					<v-text-field label="端口" type="number" v-model="formData.port" />
					<v-text-field label="用户名" v-model="formData.user" />
					<v-text-field label="密码" type="password" v-model="formData.password" />
				</v-form>
			</v-card-text>
			<v-card-actions>
				<v-btn depressed :disabled="loading" @click="testConnection"> 测试连接</v-btn>
				<v-spacer></v-spacer>
				<v-btn text @click="show = false"> 取消</v-btn>
				<v-btn text color="primary" :disabled="loading"> 保存</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'

@Component
export default class AddConnection extends Vue {
	@Inject() api
	show = false
	loading = false
	formData = {
		name: 'mysql',
		host: '115.159.28.38',
		port: 3306,
		user: 'luoyi_demo',
		password: '123456'
	}

	testConnection() {
		this.loading = true
		request
			.post(this.api + '/test-connection', this.formData, {
				timeout: 60000
			})
			.then(res => {
				console.log(res)
			})
			.finally(() => {
				this.loading = false
			})
	}
}
</script>

<style scoped lang="scss"></style>
