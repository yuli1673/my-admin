<!--
 * @Author: josen
 * @Date: 2021-02-12 18:39:57
 * @LastEditTime: 2021-03-13 23:43:39
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
  width 100%
  position relative
  overflow hidden
</style>
