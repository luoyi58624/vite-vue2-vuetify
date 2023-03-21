<template>
	<v-container>
		<v-card>
			<v-card-title class="indigo white--text text-h5"> User Directory</v-card-title>
			<v-row class="pa-4" justify="space-between">
				<v-col cols="5">
					<v-treeview
						:active.sync="active"
						:items="items"
						:load-children="fetchUsers"
						:open.sync="open"
						activatable
						color="warning"
						open-on-click
						transition>
						<template v-slot:prepend="{ item }">
							<v-icon v-if="!item.children"> mdi-account</v-icon>
						</template>
					</v-treeview>
				</v-col>

				<v-divider vertical></v-divider>

				<v-col class="d-flex text-center">
					<div v-if="!selected" class="text-h6 grey--text text--lighten-1 font-weight-light" style="align-self: center">Select a User</div>
					<v-card v-else :key="selected.id" class="pt-6 mx-auto" flat max-width="400">
						<v-card-text>
							<h3 class="text-h5 mb-2">
								{{ selected.name }}
							</h3>
							<div class="blue--text mb-2">
								{{ selected.email }}
							</div>
							<div class="blue--text subheading font-weight-bold">
								{{ selected.username }}
							</div>
						</v-card-text>
						<v-divider></v-divider>
						<v-row class="text-left" tag="v-card-text">
							<v-col class="text-right mr-4 mb-2" tag="strong" cols="5"> Company:</v-col>
							<v-col>{{ selected.company.name }}</v-col>
							<v-col class="text-right mr-4 mb-2" tag="strong" cols="5"> Website:</v-col>
							<v-col>
								<a :href="`//${selected.website}`" target="_blank">{{ selected.website }}</a>
							</v-col>
							<v-col class="text-right mr-4 mb-2" tag="strong" cols="5"> Phone:</v-col>
							<v-col>{{ selected.phone }}</v-col>
						</v-row>
					</v-card>
				</v-col>
			</v-row>
		</v-card>
	</v-container>
</template>

<script lang="ts">
import Vue from 'vue'

const pause = ms => new Promise(resolve => setTimeout(resolve, ms))
@Component
export default class VuetifyTreePage extends Vue {
	active = []
	avatar = null
	open = []
	users = []

	get items() {
		return [
			{
				name: 'Users',
				children: this.users
			}
		]
	}

	get selected() {
		if (!this.active.length) return undefined

		const id = this.active[0]

		return this.users.find(user => user.id === id)
	}

	async fetchUsers(item) {
		await pause(1500)

		return fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(json => item.children.push(...json))
			.catch(err => console.warn(err))
	}
}
</script>

<style scoped lang="scss"></style>
