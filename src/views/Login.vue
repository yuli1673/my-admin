<!--
 * @Author: josen
 * @Date: 2021-02-12 18:44:14
 * @LastEditTime: 2021-02-12 22:06:29
 * @LastEditors: Please set LastEditors
 * @Description: 登入页面
 * @FilePath: /my-admin/src/views/Login.vue
-->
<template>
  <div class="login">
    <el-form class="login-form" :model="loginForm">
      <el-form-item>
        <h3 class="login-title">Login Form</h3>
      </el-form-item>
      <!-- 账号 -->
      <el-form-item class="form-item" label="">
        <el-input
          v-model="loginForm.acount"
          placeholder="请输入账号"
        ></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item class="form-item" label="">
        <el-input
          v-model="loginForm.password"
          placeholder="请输入密码"
          show-password
        ></el-input>
      </el-form-item>
      <!-- 按钮 -->
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="">登入</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        acount: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      sessionStorage.setItem("token", 123);
      this.$router.push("/home");
    }
  }
};
</script>

<style lang="stylus" scoped>
.login
  background-color #2d3a4b
  height 100vh
  display flex
  justify-content center
  align-items center
  .login-form
    width 500px
    .login-title
      margin 0
      color white
    .form-item
      position relative
</style>
