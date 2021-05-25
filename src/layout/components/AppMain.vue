<template>
  <section class="app-main">
    <div style="height: 100%">
      <router-view></router-view>
    </div>
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
  height: 100%;
}
</style>
