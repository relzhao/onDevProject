<template>
  <div class="login-container">
    <el-form
      :model="loginForm"
      ref="loginForm"
      :rules="loginRules"
      label-position="left"
      autocomplete="on"
      class="login-form"
      ><div class="title-container">
        <h3 class="title">盈帆管理系统</h3>
      </div>
      <el-form-item>
        <!-- <span class="icon-container">
          <i class="el-icon-user-solid"></i>
        </span> -->
        <el-input
          prefix-icon="el-icon-user-solid"
          v-model="loginForm.username"
          placeholder="用户名"
          name="username"
          type="text"
          autocomplete="on"
          tabindex="1"
        >
        </el-input>
      </el-form-item>
      <el-tooltip
        v-model="capsTooltip"
        content="大写锁定已打开"
        placement="right"
        manual
      >
        <el-form-item>
          <!-- <span class="icon-container">
            <i class="el-icon-lock"></i>
          </span> -->
          <el-input
            prefix-icon="el-icon-lock"
            v-model="loginForm.password"
            placeholder="密码"
            name="password"
            :type="passwordType"
            autocomplete="on"
            tabindex="2"
          >
          </el-input>
          <!-- <span class="show-pwd">
            <i class="el-icon-view"></i>
          </span> -->
        </el-form-item>
      </el-tooltip>
      <el-button
        @click="handleLogin"
        ref="text"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        >登入</el-button
      >
    </el-form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      passwordType: "password",
      capsTooltip: "false",
    };
  },
  methods: {
    handleLogin() {
      // this.$router.push({
      //   path: "/",
      // });
      console.log(this.$refs.text);
    },
  },
};
</script>
<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}
html,
body {
  height: 100%;
}
.login-container {
  .el-input {
    width: 85%;
    height: 47px;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 15px 12px 35px;
      height: 47px;
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #41555d;
$font_color: #eedeb0;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    box-sizing: border-box;
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .title-container {
    position: relative;
    .title {
      font-size: 24px;
      color: $font_color;
      text-align: center;
      margin: 0px auto 40px auto;
    }
  }
}
</style>