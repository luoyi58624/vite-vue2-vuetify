import Vue from 'vue'

@Component
export default class BaseTable extends Vue {
	tableData = []
	selected = []
	tableLoading = false

	getTableData() {
		this.tableLoading = true
		request
			.get(this['api'])
			.then(res => {
				this.tableData = res.data
			})
			.finally(() => {
				this.tableLoading = false
			})
	}

	mounted() {
		this.getTableData()
	}
}
