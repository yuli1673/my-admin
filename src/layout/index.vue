<!--
 * @Author: josen
 * @Date: 2021-01-30 23:53:03
 * @LastEditTime: 2021-02-15 18:47:45
 * @LastEditors: Please set LastEditors
 * @Description: layout 布局结构
 * @FilePath: /vue-admin-template/src/layout/index.vue
-->
<template>
  <div class="layout">
    <the-nav
      class="the-nav"
      :currentRouters="currentRouters"
      :showLogo="true"
      :isCollapse="isCollapse"
      :class="{ 'the-nav-min': isCollapse }"
    />
    <div class="main-container">
      <!-- <div :class="{ 'fixed-header': fixedHeader }"> -->
      <!-- <the-header /> -->
      <!-- </div> -->
      <!-- 子路由 主体 -->
      <the-main />
    </div>
  </div>
</template>

<script>
import resizeHandler from "@/mixin/ResizeHandler";
import { mapState } from "vuex";
export default {
  name: "Layout",
  components: {
    // TheHeader: () => import("./components/TheHeader"),
    TheMain: () => import("./components/TheMain"),
    TheNav: () => import("@/components/theNav/index")
  },
  mixins: [resizeHandler],
  computed: {
    ...mapState({
      device: state => state.app.device,
      isCollapse: state => state.app.theNav.isCollapse
    }),
    currentRouters() {
      let currentRouter = this.$router.options.routes;
      // currentRouter = currentRouter.filter(v => v.path !== "/about");
      return currentRouter;
    }
  },
  watch: {},
  methods: {},
  data() {
    return {
      fixedHeader: false
    };
  },
  mounted() {
    // console.log(this.currentRouters);
  }
};
</script>

<style lang="stylus" scoped>
.layout
  position relative
  .the-nav
    background-color #545c64
  .the-nav-min
    width 64px
  .main-container
    margin-left 220px
</style>
