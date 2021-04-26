<!--
 * @Author: josen
 * @Date: 2021-02-12 18:39:57
 * @LastEditTime: 2021-03-14 12:41:57
 * @LastEditors: Please set LastEditors
 * @Description: 主体导航路由
 * @FilePath: /my-admin/src/layout/TheMain.vue
-->

<template>
  <transition name="el-fade-in-linear" mode="out-in">
    <router-view />
  </transition>
</template>

<script>
export default {
  name: "AppMain",
  computed: {}
};
</script>

<style scoped lang="stylus"></style>
