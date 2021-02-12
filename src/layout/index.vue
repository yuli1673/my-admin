<!--
 * @Author: josen
 * @Date: 2021-01-30 23:53:03
 * @LastEditTime: 2021-02-12 23:21:35
 * @LastEditors: Please set LastEditors
 * @Description: layout 布局结构
 * @FilePath: /vue-admin-template/src/layout/index.vue
-->
<template>
  <div class="layout">
    <the-nav class="the-nav" />
    <div class="main-container">
      <div :class="{ 'fixed-header': fixedHeader }">
        <!-- <the-header /> -->
      </div>
      <!-- 子路由 主体 -->
      <!-- <the-main /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
  components: {
    // TheHeader: () => import("./components/TheHeader"),
    // TheMain: () => import("./components/TheMain"),
    TheNav: () => import("./components/theNav/index")
  },
  mixins: [],
  computed: {},
  methods: {},
  data() {
    return {
      fixedHeader: false
    };
  }
};
</script>

<style lang="stylus" scoped></style>
