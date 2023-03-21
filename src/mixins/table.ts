import Vue from 'vue'

@Component
export class BaseTable extends Vue {
	tableData = []
	selectedData = []
	tableLoading = false

	getTableData(api) {
		this.tableLoading = true
		request
			.get(api)
			.then(res => {
				this.tableData = res.data
			})
			.finally(() => {
				this.tableLoading = false
			})
	}

	addTableData(api) {
		request.patch(api).then(res => {
			console.log(res)
		})
	}

	deleteTableData(api, id) {
		request.delete(`${api}/${id}`).then(res => {
			this.getTableData(api)
		})
	}
}
