<template>
  <div class="login-container">
    <el-form
      :model="loginForm"
      :rules="loginRules"
      ref="loginForm"
      label-position="left"
      autocomplete="on"
      class="login-form"
      @submit.native.prevent
      ><div class="title-container">
        <h3 class="title">盈帆管理系统</h3>
      </div>
      <el-form-item prop="username">
        <!-- <span class="icon-container">
          <i class="el-icon-user-solid"></i>
        </span> -->
        <el-input
          ref="username"
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
        <el-form-item prop="password">
          <!-- <span class="icon-container">
            <i class="el-icon-lock"></i>
          </span> -->
          <el-input
            ref="password"
            prefix-icon="el-icon-lock"
            v-model="loginForm.password"
            placeholder="密码"
            name="password"
            :type="passwordType"
            autocomplete="on"
            tabindex="2"
            @keyup.native="checkCapsLock"
            @keyup.enter.native="handleLogin"
          >
          </el-input>
          <!-- <span class="show-pwd">
            <i class="el-icon-view"></i>
          </span> -->
        </el-form-item>
      </el-tooltip>
      <el-button
        @click.native.prevent="handleLogin"
        ref="text"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        >登入</el-button
      >
    </el-form>
  </div>
</template>
<script>
// import { login } from "@/api/user";
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "11111111",
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "用户名为必填项" },
          {
            min: 3,
            max: 20,
            trigger: "blur",
            message: "用户名长度不小于3位，不大于20位",
          },
        ],
        password: [
          { required: true, trigger: "blur", message: "密码为必填项" },
          {
            min: 6,
            max: 16,
            trigger: "blur",
            message: "密码长度不小于6位，不大于16位",
          },
        ],
      },
      passwordType: "password",
      capsTooltip: false,
      loading: false,
      redirect: undefined,
      otherQuery: {},
    };
  },
  created() {},
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              this.$router.push({
                path: this.redirect || "/",
                query: this.otherQuery,
              });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        }
      });
    },
    checkCapsLock(e) {
      const { key } = e;
      this.capsTooltip = key && key.length === 1 && key >= "A" && key <= "Z";
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
