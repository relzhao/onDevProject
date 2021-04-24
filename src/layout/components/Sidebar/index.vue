<template>
  <el-aside width="200px">
    <el-menu default-active="1" class="el-menu-vertical-demo" router>
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">主页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>应用管理</span>
        </template>
        <el-menu-item index="/application">应用</el-menu-item>
        <el-menu-item index="/about">关于</el-menu-item>
      </el-submenu>
      <el-menu-item index="/config">
        <i class="el-icon-setting"></i>
        <span slot="title">配置管理</span>
      </el-menu-item>
    </el-menu></el-aside
  >
</template>
<script>
export default {};
</script>
<style>
</style>