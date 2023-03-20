<template>
	<v-dialog :value="showDialog" max-width="600px" @input="$emit('change', false)">
		<v-card>
			<v-card-title>新增用户</v-card-title>
			<v-card-text>
				<v-form>
					<v-text-field label="用户名" v-model="formData.username" />
					<v-text-field label="密码" v-model="formData.password" />
				</v-form>
			</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn depressed @click="$emit('change', false)"> 取消 </v-btn>
        <v-btn depressed color="primary" class="ml-4"> 提交 </v-btn>
      </v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'

@Component
export default class AddUser extends Vue {
	@Model('change', { type: Boolean, default: false }) showDialog
	formData = {
		username: '',
		password: ''
	}
}
</script>

<style scoped lang="scss"></style>
