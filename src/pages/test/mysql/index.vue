<template>
	<v-container>
		<v-card>
			<v-app-bar flat :color="$vuetify.theme.dark ? 'rgb(30, 30, 30)' : 'white'">
				<v-toolbar-title> Mysql数据库</v-toolbar-title>
				<v-spacer></v-spacer>
				<v-btn depressed @click="$refs.addConnectionRef.show = true"> 创建连接</v-btn>
			</v-app-bar>
			<v-card-text>
				<v-row>
					<v-col v-for="item in connectionList" cols="4">
						<v-card>
							<v-card-title>{{ item.name }}</v-card-title>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn text color="error">删除</v-btn>
								<v-btn text color="primary">连接</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
				</v-row>
			</v-card-text>
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
	connectionList = []

	mounted() {
		this.getAllConnection()
	}

	@Provide()
	getAllConnection() {
		request.get(this.api).then(res => {
			this.connectionList = res.data
		})
	}
}
</script>

<style scoped lang="scss"></style>
