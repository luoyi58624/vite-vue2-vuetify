<template>
	<v-container>
		<v-card>
			<v-card-title>普通按钮</v-card-title>
			<v-card-text>
				<v-btn class="ma-2" @click="count++">count:{{ count }}</v-btn>
				<v-btn class="ma-2" color="primary" @click="count++">count:{{ count }}</v-btn>
				<v-btn class="ma-2" color="secondary" @click="count++">count:{{ count }}</v-btn>
				<v-btn class="ma-2" color="accent" @click="count++">count:{{ count }}</v-btn>
				<v-btn class="ma-2" color="info" @click="count++">count:{{ count }}</v-btn>
				<v-btn class="ma-2" color="success" @click="count++">count:{{ count }}</v-btn>
				<v-btn class="ma-2" color="warning" @click="count++">count:{{ count }}</v-btn>
				<v-btn class="ma-2" color="error" @click="count++">count:{{ count }}</v-btn>
			</v-card-text>
		</v-card>

		<v-card class="mt-4">
			<v-card-title>水平按钮</v-card-title>
			<v-card-text>
				<v-btn depressed class="ma-2" @click="count++">count:{{ count }}</v-btn>
				<v-btn depressed class="ma-2" color="primary" @click="count++">count:{{ count }}</v-btn>
				<v-btn depressed class="ma-2" color="secondary" @click="count++">count:{{ count }}</v-btn>
				<v-btn depressed class="ma-2" color="accent" @click="count++">count:{{ count }}</v-btn>
				<v-btn depressed class="ma-2" color="info" @click="count++">count:{{ count }}</v-btn>
				<v-btn depressed class="ma-2" color="success" @click="count++">count:{{ count }}</v-btn>
				<v-btn depressed class="ma-2" color="warning" @click="count++">count:{{ count }}</v-btn>
				<v-btn depressed class="ma-2" color="error" @click="count++">count:{{ count }}</v-btn>
			</v-card-text>
		</v-card>

		<v-card class="mt-4">
			<v-card-title>轮廓按钮</v-card-title>
			<v-card-text>
				<v-btn outlined class="ma-2" @click="count++">count:{{ count }}</v-btn>
				<v-btn outlined class="ma-2" color="primary" @click="count++">count:{{ count }}</v-btn>
				<v-btn outlined class="ma-2" color="secondary" @click="count++">count:{{ count }}</v-btn>
				<v-btn outlined class="ma-2" color="accent" @click="count++">count:{{ count }}</v-btn>
				<v-btn outlined class="ma-2" color="info" @click="count++">count:{{ count }}</v-btn>
				<v-btn outlined class="ma-2" color="success" @click="count++">count:{{ count }}</v-btn>
				<v-btn outlined class="ma-2" color="warning" @click="count++">count:{{ count }}</v-btn>
				<v-btn outlined class="ma-2" color="error" @click="count++">count:{{ count }}</v-btn>
			</v-card-text>
		</v-card>

		<v-card class="mt-4">
			<v-card-title>文字按钮</v-card-title>
			<v-card-text>
				<v-btn text class="ma-2" @click="count++">count:{{ count }}</v-btn>
				<v-btn text class="ma-2" color="primary" @click="count++">count:{{ count }}</v-btn>
				<v-btn text class="ma-2" color="secondary" @click="count++">count:{{ count }}</v-btn>
				<v-btn text class="ma-2" color="accent" @click="count++">count:{{ count }}</v-btn>
				<v-btn text class="ma-2" color="info" @click="count++">count:{{ count }}</v-btn>
				<v-btn text class="ma-2" color="success" @click="count++">count:{{ count }}</v-btn>
				<v-btn text class="ma-2" color="warning" @click="count++">count:{{ count }}</v-btn>
				<v-btn text class="ma-2" color="error" @click="count++">count:{{ count }}</v-btn>
			</v-card-text>
		</v-card>

		<v-card class="mt-4">
			<v-card-title>Loading按钮</v-card-title>
			<v-card-text>
				<v-btn :loading="loading" class="ma-2" @click="showLoading">开启Loading</v-btn>
				<v-btn :loading="loading" class="ma-2" color="primary" @click="showLoading">开启Loading</v-btn>
				<v-btn :loading="loading" class="ma-2" color="secondary" @click="showLoading">开启Loading</v-btn>
				<v-btn :loading="loading" class="ma-2" color="accent" @click="showLoading">开启Loading</v-btn>
				<v-btn :loading="loading" class="ma-2" color="info" @click="showLoading">开启Loading</v-btn>
				<v-btn :loading="loading" class="ma-2" color="success" @click="showLoading">开启Loading</v-btn>
				<v-btn :loading="loading" class="ma-2" color="warning" @click="showLoading">开启Loading</v-btn>
				<v-btn :loading="loading" class="ma-2" color="error" @click="showLoading">开启Loading</v-btn>
			</v-card-text>
		</v-card>

		<v-card class="mt-4">
			<v-card-title>加载器按钮</v-card-title>
			<v-card-text>
				<v-btn :loading="loading" :disabled="loading" class="ma-2" @click="showLoading">开启Loading</v-btn>
				<v-btn :loading="loading" :disabled="loading" class="ma-2" color="primary" @click="showLoading">开启Loading </v-btn>
				<v-btn :loading="loading" :disabled="loading" class="ma-2" color="secondary" @click="showLoading">开启Loading </v-btn>
				<v-btn :loading="loading" :disabled="loading" class="ma-2" color="accent" @click="showLoading">开启Loading </v-btn>
				<v-btn :loading="loading" :disabled="loading" class="ma-2" color="info" @click="showLoading">开启Loading</v-btn>
				<v-btn :loading="loading" :disabled="loading" class="ma-2" color="success" @click="showLoading">开启Loading </v-btn>
				<v-btn :loading="loading" :disabled="loading" class="ma-2" color="warning" @click="showLoading">开启Loading </v-btn>
				<v-btn :loading="loading" :disabled="loading" class="ma-2" color="error" @click="showLoading">开启Loading </v-btn>
			</v-card-text>
		</v-card>
	</v-container>
</template>

<script lang="ts">
import Vue from 'vue'

@Component
export default class VuetifyButtonPage extends Vue {
	count = 0
	loading = false

	showLoading() {
		this.loading = true
		setTimeout(() => {
			this.loading = false
		}, 2000)
	}
}
</script>

<style scoped lang="scss"></style>
