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
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>
