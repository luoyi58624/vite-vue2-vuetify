<template>
	<v-container>
		<h1>首页</h1>
		<div>
			<v-btn @click="count++">count:{{ count }}</v-btn>
			<v-btn class="ma-1" @click="appStore.increment()">appStore count:{{ appStore.count }}</v-btn>
			<v-btn class="ma-1" @click="printComponent">打印HelloWorld组件</v-btn>
			<v-btn class="ma-1" @click="execHelloWorldMethod">执行HelloWorld更新props方法</v-btn>
			<v-icon>mdi-home</v-icon>
			<hello-world ref="helloWorldRef" :title="title" @updateTitle="updateTitle"></hello-world>
			<file-upload />
		</div>
	</v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

@Component({
	components: {
		HelloWorld
	}
})
export default class HomePage extends Vue {
	@Ref() helloWorldRef: HelloWorld
	appStore = useAppStore()
	count = 0
	title = 'Hello'

	updateTitle(value) {
		this.title = value
	}

	printComponent() {
		console.log(this.helloWorldRef.title)
	}

	execHelloWorldMethod() {
		this.helloWorldRef.updateTitle('hello')
	}
}
</script>

<style scoped></style>
