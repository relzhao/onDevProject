<template>
  <div class="box-wrap">
    <sidebar></sidebar>
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
  // position: absolute;
  // top: 0;
  // left: 0;
  // width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
}

.main-container {
  // width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  //   position: relative;
  //   display: flex;
  //   overflow: hidden;
  //   visibility: hidden;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 100px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
