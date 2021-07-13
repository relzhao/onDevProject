<!--
 * @Author: your name
 * @Date: 2021-06-07 22:57:32
 * @LastEditTime: 2021-07-07 16:58:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo-vue\my-app\src\layout\components\navbar.vue
-->
<template>
  <header class="navbar">
    <breadcrumb class="breadcrumb-container"></breadcrumb>
    <div class="right-menu">
      <el-dropdown>
        <span class="el-dropdown-link">
          <span>{{ this.user.name }}</span
          ><i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item @click.native="logout"
            ><span> 登出</span></el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      user: {},
    };
  },
  components: {
    Breadcrumb,
  },
  created() {
    this.getUser();
  },
  computed: {
    ...mapGetters(["name"]),
  },
  methods: {
    getUser() {
      this.user = {
        name: this.name,
      };
    },
    // 登出
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
  },
};
</script>

<style lang="scss">
.navbar {
  height: 50px !important;
  position: relative;
  overflow: hidden;
  // background-color: #b3c0d1;
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 50px;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);

  .breadcrumb-container {
    float: left;
  }
  .right-menu {
    float: right;
    font-size: 20px;
  }
}
</style>
