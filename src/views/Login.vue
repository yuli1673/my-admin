<!--
 * @Author: josen
 * @Date: 2021-02-12 18:44:14
 * @LastEditTime: 2021-02-16 22:28:54
 * @LastEditors: Please set LastEditors
 * @Description: 登入页面
 * @FilePath: /my-admin/src/views/Login.vue
-->
<template>
  <div class="login">
    <el-form class="login-form" :model="form">
      <el-form-item>
        <h2 class="login-title">Login Form</h2>
      </el-form-item>
      <!-- 账号 -->
      <el-form-item class="form-item" label="">
        <el-input
          class="input"
          v-model="form.acount"
          placeholder="请输入账号"
        ></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item class="form-item" label="">
        <el-input
          v-model="form.password"
          placeholder="请输入密码"
          show-password
        ></el-input>
      </el-form-item>
      <!-- 按钮 -->
      <el-form-item class="form-item">
        <el-button type="primary" @click="onSubmit" class="login-button">
          登入
        </el-button>
        <span class="login-notice">
          username: admin
        </span>
        <span class="login-notice">
          password: any
        </span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { setToken } from "@/utils/token";
export default {
  data() {
    return {
      form: {
        acount: "admin",
        password: "password"
      }
    };
  },
  methods: {
    onSubmit() {
      setToken(123);
      this.$store.commit("user/SET_NAME", this.form.acount);
      this.$router.push("/");
    }
  }
};
</script>

<style lang="stylus" scoped>
.login
  color white
  background-color #2d3a4b
  height 100vh
  display flex
  justify-content center
  align-items center
  .login-form
    width 40%
    min-width 300px
    max-width 500px
    .login-title
      margin 0
      text-align center
    .form-item
      .login-button
        width 100%
      .login-notice
        margin-right 20px
</style>
