<!--
 * @Author: your name
 * @Date: 2021-06-09 00:03:29
 * @LastEditTime: 2021-09-02 09:28:38
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /onDevProject/src/layout/index.vue
-->
<template>
  <div class="box-wrap">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <app-main></app-main>
    </div>
  </div>
</template>
<script>
// import AppMain from "./components/AppMain.vue";
// import Sidebar from "./components/Sidebar";
import { AppMain, Sidebar, Navbar } from "./components";
export default {
  name: "Layout",
  components: { AppMain, Sidebar, Navbar },
};
</script>
<style lang="scss">
.box-wrap {
  position: relative;
  width: 100%;
  height: 100%;
}
.sidebar-container {
  width: 210px;
  background-color: gray;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1001;
  overflow: hidden;
}
.main-container {
  min-height: 100%;
  margin-left: 210px;
  position: relative;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
