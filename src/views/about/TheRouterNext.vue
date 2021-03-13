<!--
 * @Author: your name
 * @Date: 2021-02-15 21:05:44
 * @LastEditTime: 2021-03-13 23:22:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-admin/src/views/about/TheRouterNext.vue
-->
<template>
  <div class="the-form">
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
