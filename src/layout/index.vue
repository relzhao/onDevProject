<template>
  <div class="box-wrap">
    <el-container style="height: 100%">
      <sidebar></sidebar>
      <el-container>
        <el-header>Header </el-header>
        <app-main></app-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
// import AppMain from "./components/AppMain.vue";
// import Sidebar from "./components/Sidebar";
import { AppMain, Sidebar } from "./components";
export default {
  name: "Layout",
  components: { AppMain, Sidebar },
};
</script>
<style lang="less">
.box-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 100px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
