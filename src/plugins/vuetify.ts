import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import zhHans from 'vuetify/lib/locale/zh-Hans'

Vue.use(Vuetify)

export default new Vuetify({
	lang: {
		locales: { zhHans },
		current: 'zhHans'
	},
	icons: {
		iconfont: 'mdi' // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
	},
	theme: {
		themes: {
			// light: {
			// 	primary: '#3f51b5',
			// 	secondary: '#b0bec5',
			// 	accent: '#8c9eff',
			// 	error: '#b71c1c',
			// },
		},
	},
	breakpoint: {
		thresholds: {
			xs: 360,
			sm: 640,
			md: 960,
			lg: 1280,
		},
		scrollBarWidth: 24,
	},
})
