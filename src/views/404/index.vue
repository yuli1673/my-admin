<!--
 * @Author: your name
 * @Date: 2021-02-15 21:05:44
 * @LastEditTime: 2021-03-14 12:37:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-admin/src/views/404/index.vue
-->
<template>
  <div class="err-404">
    <img src="@/assets/404.png" alt="404" class="err-img" />
    <div class="right-box">
      <div class="err-content">
        <h2 class="oops">
          哎呀！错误页面
        </h2>
        <p class="main">
          站长说你不能进入该页面......
        </p>
        <h3 class="foot">
          请您检测输入的网址是否正确，或者点击下方的按钮返回
        </h3>
      </div>
      <el-button type="primary" round>
        <router-link to="/" class="link">返回主页</router-link>
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {}
};
</script>
<style lang="stylus" scoped>
.err-404
  height 100vh
  display flex
  justify-content center
  align-items center
  .err-img
    width:50%
  .right-box
    .oops
      color #409EFF
    .main
      color #606266
    .foot
      color #303133
    .link
      text-decoration-line none
      color white
</style>
