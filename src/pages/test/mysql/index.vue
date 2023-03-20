<template>
	<v-container>
		<v-card>
			<v-app-bar flat color="white">
				<v-toolbar-title> Mysql数据库</v-toolbar-title>
				<v-spacer></v-spacer>
				<v-btn depressed @click="$refs.addConnectionRef.show = true"> 创建连接</v-btn>
			</v-app-bar>
			<v-card-text></v-card-text>
		</v-card>
		<add-connection ref="addConnectionRef" />
	</v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import AddConnection from './AddConnection.vue'

@Component({
	components: { AddConnection }
})
export default class MysqlManagerPage extends Vue {
  @Provide() api = '/mysql'
}
</script>

<style scoped lang="scss"></style>
