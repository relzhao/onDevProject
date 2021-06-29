<!--
 * @Author: your name
 * @Date: 2021-05-25 23:04:02
 * @LastEditTime: 2021-06-09 00:35:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /onDevProject/src/components/breadcrumb/index.vue
-->
<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in breadList" :key="item.path">
      <span
        v-if="item.redirect === 'noRedirect' || index == breadList.length - 1"
        >{{ item.meta.title }}</span
      >
      <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
    </el-breadcrumb-item>
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
    handleLink(item) {
      const { redirect, path } = item;
      console.log(redirect, path);
      if (redirect) {
        this.$router.push(redirect);
        return;
      }
      this.$router.push(path);
    },
  },
};
</script>

<style lang="scss" scoped></style>
