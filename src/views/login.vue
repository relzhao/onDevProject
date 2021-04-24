<template>
  <div class="login-container">
    <el-form
      :model="loginForm"
      ref="loginForm"
      :rules="loginRules"
      label-position="left"
      autocomplete="on"
      ><div class="title-container">
        <h3 class="title">盈帆管理系统</h3>
      </div>
      <el-form-item label="用户名">
        <span class="icon-container">
          <i class="el-icon-user-solid"></i>
        </span>
        <el-input
          v-model="loginForm.username"
          placeholder="用户名"
          name="username"
          type="text"
          autocomplete="on"
          autofocus="true"
          tabindex="1"
        />
      </el-form-item>
      <el-tooltip
        v-model="capsTooltip"
        content="大写锁定已打开"
        placement="right"
        manual
      >
        <el-form-item label="密码">
          <span class="icon-container">
            <i class="el-icon-lock"></i>
          </span>
          <el-input
            v-model="loginForm.password"
            placeholder="密码"
            name="password"
            :type="passwordType"
            autocomplete="on"
            autofocus="true"
            tabindex="2"
          />
          <span class="show-pwd">
            <i class="el-icon-view"></i>
          </span>
        </el-form-item>
      </el-tooltip>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "kyoko2623",
      },
      passwordType: "password",
      capsTooltip: "false",]
      dasdasd
    };
  },
};
</script>
<style>
</style>