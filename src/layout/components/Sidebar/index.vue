<!--
 * @Author: your name
 * @Date: 2021-06-08 01:16:13
 * @LastEditTime: 2021-06-08 23:36:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /onDevProject/src/layout/components/Sidebar/index.vue
-->
<template>
  <aside class="aside">
    <el-menu default-active="1" router>
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">主页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>应用管理</span>
        </template>
        <el-menu-item index="/application/app">应用</el-menu-item>
        <el-menu-item index="/application/about">关于</el-menu-item>
      </el-submenu>
      <el-menu-item index="/config">
        <i class="el-icon-setting"></i>
        <span slot="title">配置管理</span>
      </el-menu-item>
    </el-menu>
  </aside>
</template>
<script>
export default {};
</script>
<style lang="scss">
.aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100%;
  min-height: 100%;
}
</style>
