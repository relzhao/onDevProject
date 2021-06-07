<!--
 * @Author: your name
 * @Date: 2021-05-25 23:04:02
 * @LastEditTime: 2021-06-08 00:41:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /onDevProject/src/components/breadcrumb/index.vue
-->
<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item
      :to="{ path: '/' }"
      v-for="item in breadList"
      :key="item.path"
      >{{ item.meta.title }}</el-breadcrumb-item
    >
  </el-breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      breadList: null,
    };
  },
  watch: {
    //监听到路由地址变化后重新调用getBreadcrumb() 如果地址为重定向地址则忽略
    $route(to) {
      if (to.path.startsWith("/redirect")) {
        return;
      }
      this.getBreadcrumb();
    },
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(
        (item) => item.meta && item.meta.title
      );
      const first = matched[0]; //取第一个$route对象 12用于判断其是否为dashboard
      if (!this.isDashboard(first)) {
        matched = [{ path: "/dashboard", meta: { title: "Dashboard" } }].concat(
          matched
        );
      }
      this.breadList = matched.filter(
        (item) => item.meta && item.meta.title !== false
      );
      console.log(this.breadList);
    },
    isDashboard(route) {
      const name = route && route.name;
      if (!name) {
        return false;
      }
      return (
        name.trim().toLocaleLowerCase() === "Dashboard".toLocaleLowerCase()
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
