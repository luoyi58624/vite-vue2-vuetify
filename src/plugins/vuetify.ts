import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import zhHans from 'vuetify/lib/locale/zh-Hans'
import Message from 'vuetify-message-snackbar'
import { UserVuetifyPreset } from 'vuetify/types/services/presets'

Vue.use(Vuetify)

const vuetifyPreset: UserVuetifyPreset = {
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
			}
		}
	},
	breakpoint: {
		thresholds: {
			xs: 360,
			sm: 640,
			md: 960,
			lg: 1280
		},
		mobileBreakpoint: 'md',
		scrollBarWidth: 24
	}
}

const vuetify = new Vuetify(vuetifyPreset)

Vue.use(Message, {
	autoRemove: true,
	closeButtonContent: '关闭',
	class: 'margin-top-animation',
	// 预设icon
	presetIcon: {
		success: 'mdi-checkbox-marked-circle'
	},
	vuetifyInstance: vuetify,
	vuetifyPreset,
	dark: true,
	width: 300,
	timeout: 3000,
	height: 50
})

export default vuetify
