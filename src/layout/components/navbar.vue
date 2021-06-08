<!--
 * @Author: your name
 * @Date: 2021-06-07 22:57:32
 * @LastEditTime: 2021-06-08 21:29:28
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \demo-vue\my-app\src\layout\components\navbar.vue
-->
<template>
  <header class="navbar">
    <breadcrumb></breadcrumb>
  </header>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
export default {
  components: {
    Breadcrumb,
  },
};
</script>

<style lang="scss">
.navbar {
  height: 80px !important;
  position: relative;
  overflow: hidden;
  // background-color: #b3c0d1;
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>
