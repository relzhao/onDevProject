<!--
 * @Author: your name
 * @Date: 2021-06-09 00:03:29
 * @LastEditTime: 2021-09-02 10:31:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /onDevProject/src/layout/components/AppMain.vue
-->
<template>
  <section class="app-main">
    <router-view></router-view>
  </section>
</template>
<script>
export default {
  name: "AppMain",
  computed: {
    // key() {
    //     return this.$route.path;
    // },
  },
};
</script>
<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
  // box-sizing: border-box;
}
.app-main {
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
