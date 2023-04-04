<!--基于vuetify的密码组件-->
<template>
	<v-text-field
		class="my-4"
		label="密码"
		prepend-icon="mdi-lock"
		hide-details="auto"
		:type="show ? 'text' : 'password'"
		:append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
		:rules="rules.requiredRule"
		:value="password"
		@input="$emit('change', $event)"
		@click:append="show = !show" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'VPassword',
	mixins: [FormRuleMixins],
	props: {
		password: String
	},
	model: {
		prop: 'password',
		event: 'change'
	},
	data() {
		return {
			show: false
		}
	}
})
</script>
