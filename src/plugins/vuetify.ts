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
			light: {
				// primary: '#0078d4',
				// secondary: '#00BCD4',
				// accent: '#03A9F4',
				// info: '#546E7A',
				// success: '#10b981',
				// warning: '#f59e0b',
				// error: '#ef4444',
			},
		},
	},
	breakpoint: {
		thresholds: {
			xs: 360,
			sm: 640,
			md: 960,
			lg: 1280,
		},
		mobileBreakpoint: 'md',
		scrollBarWidth: 24,
	},
})
