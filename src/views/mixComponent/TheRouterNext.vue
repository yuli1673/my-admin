<!--
 * @Author: your name
 * @Date: 2021-02-15 21:05:44
 * @LastEditTime: 2021-03-14 10:32:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-admin/src/views/about/TheRouterNext.vue
-->
<template>
  <div class="the-form">
    <h1>嵌套路由</h1>
    <transition name="el-fade-in-linear">
      <router-view class="form-main"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  components: {},
  computed: {}
};
</script>
<style lang="stylus" scoped></style>
