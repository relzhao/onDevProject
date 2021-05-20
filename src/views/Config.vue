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
    getData() {
      this.$http(
        "https://www.fastmock.site/mock/3e456e2b51582fd5517acdf83145efdb/ele-demo/tablist"
      ).then((res) => {
        if (res.status == "200") {
          this.tableData = res.data;
          for (var i = 0; i < this.tableData.length; i++) {
            this.dataList.push({
              text: this.tableData[i].date,
              value: this.tableData[i].date,
            });
          }
        }
      });
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
