<template>
  <div class="container">
    <el-row>
      <el-col :span="24"> <div class="navbar">header</div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.container {
  width: 100%;
  position: relative;
}
.navbar {
  height: 80px !important;
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>
