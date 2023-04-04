import Vue from 'vue'

@Component
export class BaseTableMixins extends Vue {
	tableData = []
	selectedData = []
	tableLoading = false

	/**
	 * 获取表格数据
	 * @param api  接口地址
	 */
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

	/**
	 * 新增表格数据
	 * @param api  接口地址
	 */
	addTableData(api) {
		request.patch(api).then(res => {
			console.log(res)
		})
	}

	/**
	 * 删除表格数据
	 * @param api  接口地址
	 * @param id   删除的数据id
	 */
	deleteTableData(api, id) {
		request.delete(`${api}/${id}`).then(res => {
			this.getTableData(api)
		})
	}
}
