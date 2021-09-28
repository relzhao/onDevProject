<!--
 * @Author: your name
 * @Date: 2021-08-27 13:51:48
 * @LastEditTime: 2021-09-17 11:58:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /onDevProject/src/layout/components/Sidebar/SiderbarItem.vue
-->

<template>
  <div v-if="!item.hidden">
    <template
      v-if="
        hasOneShowingChild(item.children, item) &&
        (!onlyOneChild.children || onlyOneChild.noShowingChildren)
      "
    >
      <el-menu-item
        v-if="onlyOneChild.meta"
        :index="resolvePath(onlyOneChild, item)"
      >
        <i :class="onlyOneChild.meta.icon"></i>
        <span slot="title">{{
          onlyOneChild.meta.title || item.meta.title
        }}</span>
      </el-menu-item>
    </template>
    <el-submenu v-else :index="item.path">
      <template slot="title">
        <i :class="item.meta.icon"></i>
        <span>{{ item.meta.title }}</span>
      </template>
      <el-menu-item
        v-for="(child, index) in item.children"
        :index="resolvePath(child, item)"
        :key="child + index"
      >
        <i :class="child.meta.icon"></i>
        <span slot="title">{{ child.meta.title }}</span>
      </el-menu-item>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
    basePath: {
      type: String,
      default: "",
    },
  },
  data() {
    return { onlyOneChild: null };
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChild = children.filter((item) => {
        if (item.hidden) {
          return false;
        } else {
          this.onlyOneChild = item;
          return true;
        }
      });
      if (showingChild.length === 1) {
        // 匹配只有一个子路由项
        return true;
      }
      if (showingChild.length === 0) {
        // 匹配无子路由项
        this.onlyOneChild = { ...parent, noShowingChildren: true };
        return true;
      }
      return false;
    },
    resolvePath(routePath, parent) {
      if (routePath.noShowingChildren || parent.path === "/") {
        return routePath.path;
      } else {
        return parent.path + "/" + routePath.path;
      }
    },
  },
};
</script>
