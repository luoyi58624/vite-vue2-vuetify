<template>
	<v-container>
		<v-form ref="form" class="w-100 text-center">
			<v-file-input v-model="file" label="选择文件"></v-file-input>
			<div class="mx-auto">
				<v-btn class="mr-4" :disabled="file == null" :loading="loading" @click="uploadFile">上传文件</v-btn>
			</div>
		</v-form>
		<v-divider class="my-5" />
		<v-card class="mx-auto" width="300">
			<v-list>
				<v-list-item-group>
					<v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
				</v-list-item-group>
			</v-list>
		</v-card>
	</v-container>
</template>

<script lang="ts">
import Vue from 'vue'

@Component
export default class FileUpload extends Vue {
	file = null
	loading = false
	items = []

	uploadFile() {
		this.loading = true
		const formData = new FormData()
		formData.set('file', this.file)
		request
			.post('/upload', formData)
			.then(res => {
				console.log(res)
			})
			.finally(() => {
				setTimeout(() => {
					this.loading = false
				}, 500)
			})
	}

	mounted() {
		request.get('/user').then(res => {
			this.items = res.data.map(item => {
				return {
					title: item.username,
					value: item.id
				}
			})
		})
	}
}
</script>

<style scoped lang="scss"></style>
