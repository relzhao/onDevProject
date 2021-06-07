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
  position: relative;
  overflow: auto;
  height: 100%;
}
</style>
