<!--
 * @Author: josen
 * @Date: 2021-02-12 18:39:57
 * @LastEditTime: 2021-02-28 16:48:30
 * @LastEditors: Please set LastEditors
 * @Description: 主体导航路由
 * @FilePath: /my-admin/src/layout/TheMain.vue
-->

<template>
  <section class="the-main">
    <transition name="el-fade-in-linear" mode="out-in">
      <router-view />
    </transition>
  </section>
</template>

<script>
export default {
  name: "AppMain",
  computed: {}
};
</script>

<style scoped lang="stylus">
.the-main
  // min-height calc(100vh - 50px)
  width 100%
  position relative
  overflow hidden
.fixed-header + .the-main
  padding-top 50px
</style>
