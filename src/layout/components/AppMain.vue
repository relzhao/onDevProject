<template>
  <div class="app-main">
    <el-main style="height: 100%">
      <router-view></router-view>
    </el-main>
  </div>
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
<style lang="scss" scoped>
.app-main {
  height: 100%;
}
</style>