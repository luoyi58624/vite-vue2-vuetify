<script lang="ts">
import FormRules from '@/mixins/FormRules'
import VPassword from '@/components/VPassword.vue'
import { request } from '@/utils/request'

@Component({
	components: {
		VPassword
	}
})
export default class LoginPage extends Mixins(FormRules) {
	@Ref() readonly formRef
	cardLoading = false // 卡片加载动画
	disabled = false // 是否禁用登录按钮
	user = {
		loginType: 1,
		account: '',
		password: ''
	}

	accountLogin() {
		if (this.formRef.validate()) {
			this.cardLoading = true
			this.disabled = true
			request
				.post('/user/login', {
					username: this.user.account,
					password: this.user.password
				})
				.then(res => {
					localStorage.setItem('token', res.data.token)
					this.$router.push({ name: 'Dashboard' }).then(() => {
						this.$message.success(res.msg)
					})
				})
				.finally(() => {
					this.cardLoading = false
					this.disabled = false
				})
		}
	}

	// 重置错误消息
	resetError() {
		this.formRef.resetValidation()
	}
}
</script>

<template>
	<v-app style="background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)">
		<v-container class="fill-height">
			<v-row justify="center">
				<v-col xs="10" sm="7" md="6" lg="4" xl="3">
					<v-card :loading="cardLoading" elevation="4">
						<v-card-title>
							<h3 class="mx-auto">用户登录</h3>
						</v-card-title>
						<v-card-text>
							<v-form ref="formRef">
								<v-text-field
									class="mb-4"
									prepend-icon="mdi-account-circle"
									hide-details="auto"
									label="用户名"
									v-model="user.account"
									:rules="rules.requiredRule" />
								<v-password v-model="user.password" />
								<v-container>
									<v-btn class="mr-4" color="primary" :disabled="disabled" @click="accountLogin">登录系统</v-btn>
									<v-btn :disabled="disabled" @click="resetError">重置表单</v-btn>
								</v-container>
							</v-form>
						</v-card-text>
						<v-card-actions>
							<router-link class="mx-4" to="/registry" target="_blank">注册账号？</router-link>
							<v-spacer />
							<router-link class="mx-4" to="/getBackPassword" target="_blank">忘记密码？</router-link>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-app>
</template>

<style lang="scss"></style>
