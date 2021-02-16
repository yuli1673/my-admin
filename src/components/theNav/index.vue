<!--
 * @Author: josen
 * @Date: 2021-02-12 22:09:34
 * @LastEditTime: 2021-02-16 21:54:28
 * @LastEditors: Please set LastEditors
 * @Description: 左侧导航栏
 * @FilePath: /my-admin/src/layout/components/TheNav.vue
-->
<template>
  <div class="the-nav">
    <logo v-if="showLogo" />
    <el-menu
      :background-color="backgroundColor"
      :text-color="textColor"
      :active-text-color="activeTextColor"
      class="the-nav-menu"
      :default-active="activePath"
      :collapse="isCollapse"
      router
    >
      <nav-item
        v-for="(item, index) in routers"
        :key="index"
        :router="item"
        :path="item.path"
      />
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    isCollapse: {
      type: Boolean,
      default: () => false
    },
    showLogo: {
      type: Boolean,
      default: () => false
    },
    backgroundColor: {
      type: String,
      default: () => "#545c64"
    },
    textColor: {
      type: String,
      default: () => "#fff"
    },
    activeTextColor: {
      type: String,
      default: () => "#ffd04b"
    },
    currentRouters: {
      type: Array,
      default: () => [],
      require: true
    }
  },
  components: {
    NavItem: () => import("./NavItem"),
    Logo: () => import("./Logo")
  },
  data() {
    return {};
  },
  computed: {
    routers() {
      let routers = [];
      routers = this.currentRouters;
      routers = routers.filter(v => !v.hidden);
      return routers;
    },
    // 当前激活的对象
    activePath() {
      const route = this.$route;
      let { path, redirectedFrom } = route;
      // 判断是否有重定向
      if (redirectedFrom) path = redirectedFrom;
      return path;
    }
  },
  mounted() {}
};
</script>

<style lang="stylus" scoped>
.the-nav
  position fixed
  bottom 0
  top 0
  width 220px
  overflow hidden
  transition-duration 0.3s
.the-nav-menu
  border none
</style>
