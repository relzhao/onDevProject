<!--
 * @Author: your name
 * @Date: 2021-04-25 00:29:29
 * @LastEditTime: 2021-06-01 13:37:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /onDevProject/src/views/Config.vue
-->
<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180"
        sortable
        :filters="dataList"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      dataList: [],
    };
  },
  methods: {
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
  },
  mounted() {},
};
</script>
