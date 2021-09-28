<!--
 * @Author: your name
 * @Date: 2021-06-08 01:16:13
 * @LastEditTime: 2021-09-17 13:29:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /onDevProject/src/layout/components/Sidebar/index.vue
-->
<template>
  <aside class="aside">
    <el-scrollbar class="scrollbar-wrapper">
      <el-menu
        default-active="1"
        :collapse="isCollapsed"
        router
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <!-- <el-menu-item index="/">
          <i class="el-icon-s-home"></i>
          <span slot="title">主页</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>应用管理</span>
          </template>
          <el-menu-item index="/application/app">应用</el-menu-item>
        </el-submenu>
        <el-menu-item index="/config">
          <i class="el-icon-setting"></i>
          <span slot="title">配置管理</span>
        </el-menu-item>
        <el-menu-item index="/map/amap">
          <i class="el-icon-setting"></i>
          <span slot="title">地图</span>
        </el-menu-item>
        <el-menu-item index="/full-map">
          <i class="el-icon-setting"></i>
          <span slot="title">全屏地图</span>
        </el-menu-item> -->
        <sidebar-item
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        ></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </aside>
</template>
<script>
import SidebarItem from "./SiderbarItem.vue";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["permission_routes", "sidebar"]),
    isCollapsed() {
      return !this.sidebar.status;
    },
  },
  created() {
    // this.getinfo();
    console.log(this.permission_routes);
  },
  methods: {
    // getinfo() {
    //   console.log(this.permission_routes);
    //   return this.permission_routes;
    // },
  },
  components: {
    SidebarItem,
  },
};
</script>
<style lang="scss">
@import "~@/styles/sidebar.scss";
</style>
