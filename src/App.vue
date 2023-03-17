<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const title = ref('Welcome to Your Vue.js + TypeScript App')
const appStore = useAppStore()
function updateTitle(value) {
  title.value = value
}
</script>

<template>
	<v-app>
		<router-view></router-view>
	</v-app>
</template>

<style scoped></style>
