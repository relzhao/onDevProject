<!--
 * @Author: your name
 * @Date: 2021-06-09 00:03:29
 * @LastEditTime: 2021-09-16 10:50:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /onDevProject/src/layout/index.vue
-->
<template>
  <div :class="classObj" class="box-wrap">
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
import { mapState } from "vuex";

export default {
  name: "Layout",
  computed: {
    ...mapState({
      siderbar: (state) => state.app.sidebar,
    }),
    classObj() {
      return {
        hideSidebar: !this.siderbar.status,
      };
    },
  },
  components: { AppMain, Sidebar, Navbar },
};
</script>
<style lang="scss">
.box-wrap {
  position: relative;
  width: 100%;
  height: 100%;
}

.main-container {
  min-height: 100%;
  margin-left: 210px;
  position: relative;
}

// .el-container:nth-child(5) .el-aside,
// .el-container:nth-child(6) .el-aside {
//   line-height: 260px;
// }

// .el-container:nth-child(7) .el-aside {
//   line-height: 320px;
// }
</style>
