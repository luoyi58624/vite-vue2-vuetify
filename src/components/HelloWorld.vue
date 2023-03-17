<template>
	<div class="hello">
		<h1>{{ title }}</h1>
		<v-btn class="ma-1" @click="updateTitle()">更新prop</v-btn>
		<v-btn class="ma-1" @click="appStore.increment()">count: {{ appStore.count }}</v-btn>
	</div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
	@Prop() readonly title!: string

	appStore = useAppStore()

	@Emit('updateTitle')
	updateTitle(value?) {
		return value ?? 'hi，title update'
	}

	mounted() {
		this.appStore.increment()
	}
}
</script>
<style scoped></style>
