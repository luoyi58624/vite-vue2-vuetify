<template>
<v-container>
  <v-data-table
      class="elevation-2"
      show-select
      hide-default-footer
      :items-per-page="100"
      :loading="tableLoading"
      :headers="tableHeader"
      :items="tableData"
      v-model="selected">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>App版本管理</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-btn depressed>上传App</v-btn>
      </v-toolbar>
    </template>
  </v-data-table>
</v-container>
</template>

<script lang="ts">
import BaseTable from "@/mixins/BaseTable";

@Component
export default class AppVersionManagerPage extends Mixins(BaseTable) {
  readonly api = '/app_version'
  readonly tableHeader = [
    {
      text: '编号',
      value: 'id'
    },
    {
      text: '名称',
      sortable: false,
      value: 'appName'
    },
    {
      text: '版本号',
      sortable: false,
      value: 'appVersion'
    },
    {
      text: '创建时间',
      sortable: false,
      value: 'createTime'
    }
  ]
}
</script>

<style scoped lang="scss">

</style>
