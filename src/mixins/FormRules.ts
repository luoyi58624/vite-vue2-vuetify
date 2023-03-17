/* vuetify表单验证规则 */
import { verifyEmail } from '@/utils/commons'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class FormRules extends Vue {
	rules = {
		// 非空规则
		requiredRule: [(value: any) => !!value || '必填！']
	}

	// 邮箱验证规则
	emailRules(value: string) {
		if (value.length <= 0) {
			return '邮箱不能为null'
		}
		if (!verifyEmail(value)) {
			return '邮箱格式不正确'
		}
		return true
	}
}
