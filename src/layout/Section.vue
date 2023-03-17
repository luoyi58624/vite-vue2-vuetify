<template>
	<v-main>
		<div class="section-container">
			<transition name="router-fade">
				<keep-alive :include="KeepaliveRoutes">
					<section-router-view />
				</keep-alive>
			</transition>
		</div>
	</v-main>
</template>

<script setup lang="ts">
import SectionRouterView from '@/components/SectionRouterView.vue'
import { ref } from 'vue'

const KeepaliveRoutes = ref(['Home'])
</script>

<style scoped lang="scss">
.section-container {
	width: 100%;
	height: 100%;
	padding: 8px;
}
</style>
