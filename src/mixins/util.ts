import Vue from 'vue'
import { formatFileSize as $formatFileSize } from '@/utils/commons'

@Component
export class UtilMixins extends Vue {
	// 格式化文件尺寸
	formatFileSize(filesize: number) {
		return $formatFileSize(filesize)
	}
}
