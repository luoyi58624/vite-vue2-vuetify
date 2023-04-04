<template>
	<v-app>
		<Navbar />
<!--		<Sidebar />-->
		<Section />
	</v-app>
</template>

<script setup lang="ts">
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'
import Section from './Section.vue'
import vuetify from '@/plugins/vuetify'

const adminLayoutStore = useAdminLayoutStore()

if (vuetify.framework.breakpoint.mobile) adminLayoutStore.darwer = false
</script>
