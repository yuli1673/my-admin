<!--
 * @Author: josen
 * @Date: 2021-01-30 23:53:03
 * @LastEditTime: 2021-04-26 23:14:58
 * @LastEditors: Please set LastEditors
 * @Description: layout 布局结构
 * @FilePath: /vue-admin-template/src/layout/index.vue
-->
<template>
  <div class="layout">
    <!-- 侧边栏 -->
    <the-nav
      class="the-nav"
      :currentRouters="currentRouters"
      :showLogo="true"
      :isCollapse="isCollapse"
      :class="{ 'the-nav-min': isCollapse }"
      :defaultActive="activeRouter"
    />
    <div class="main-container">
      <!-- 头部 -->
      <the-header class="fixed-header" />
      <!-- 子路由 主体 -->
      <the-router class="the-router" />
    </div>
  </div>
</template>

<script>
import resizeHandler from "@/mixin/ResizeHandler";
import { mapState } from "vuex";
export default {
  name: "Layout",
  components: {
    TheHeader: () => import("./components/TheHeader"),
    TheRouter: () => import("@/components/TheRouter"),
    TheNav: () => import("@/components/theNav/index")
  },
  mixins: [resizeHandler],
  computed: {
    ...mapState({
      device: state => state.app.device,
      isCollapse: state => state.app.theNav.isCollapse
    }),
    activeRouter() {
      let activeRouter = this.$route.path || "/";
      // debugger;
      return activeRouter;
    },
    currentRouters() {
      let currentRouter = this.$router.options.routes.filter(v => !v.hidden);
      return currentRouter;
    }
  },
  watch: {
    device(n) {
      console.log("当前是什么设备", n);
    },
    isCollapse(n) {
      console.log("当前是否卷侧边栏", n);
    }
  },
  methods: {},
  data() {
    return {
      fixedHeader: false
    };
  },
  mounted() {}
};
</script>

<style lang="stylus" scoped>
.layout
  position relative
  .the-nav
    background-color #545c64
    z-index: 1;
  .main-container
    margin-left 220px
    transition-duration .3s
    .fixed-header
      position sticky
      top 0
      z-index 1
    .the-router
      padding 10px
  // 迷你侧边栏
  .the-nav-min
    width 65px
    & + .main-container
      margin-left 65px
</style>
