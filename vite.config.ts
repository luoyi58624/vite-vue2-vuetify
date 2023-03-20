import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
	plugins: [
		vue(),
		AutoImport({
			imports: [
				'pinia',
				{
					'vue-property-decorator': ['Component', 'Prop', 'Emit', 'Watch', 'Model', 'Mixins', 'Ref', 'Provide', 'Inject']
				}
			],
			dirs: ['./src/store', './src/utils'],
			dts: true
		}),
		Components({
			extensions: ['vue', 'tsx'],
			deep: true,
			directoryAsNamespace: false,
			dirs: ['src/components'],
			dts: true
		})
	],
	server: {
		host: '0.0.0.0',
		port: 8079,
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, '')
			}
		}
	},
	build: {
		target: 'esnext',
		minify: 'esbuild',
		sourcemap: false,
		reportCompressedSize: true, // 禁止输出压缩尺寸
		cssCodeSplit: true, // css代码分割，true启用、false禁止
		chunkSizeWarningLimit: 2000, // 文件大小超出警告，单位kb
		rollupOptions: {
			output: {
				entryFileNames: `js/App.${new Date().getTime()}.js`,
				chunkFileNames: `js/[name].${new Date().getTime()}.js`,
				assetFileNames: `assets/[name].${new Date().getTime()}.[ext]`,
				compact: true,
				manualChunks: {
					'vendors/vue': ['vue', 'vue-router', 'pinia'],
					'vendors/element-plus': ['vuetify'],
					'vendors/common': ['axios']
				}
			}
		}
	}
})
