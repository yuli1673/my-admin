<!--
 * @Author: your name
 * @Date: 2021-02-12 22:07:34
 * @LastEditTime: 2021-03-14 01:27:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-admin/src/layout/TheHeader.vue
-->
<template>
  <div class="the-header">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="item in breadcrumb"
        :key="item.path"
        :to="{ path: item.path }"
      >
        {{ item.meta.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 头部右侧内容 -->
    <div class="right-menu">
      <!-- 全屏 -->
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar
            src="//inews.gtimg.com/newsapp_bt/0/13244909405/1000"
          ></el-avatar>
          <i class="el-icon-arrow-down el-icon--right" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>我的信息</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item divided>用户退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumb: []
    };
  },
  watch: {
    $route: {
      handler(route) {
        this.getBreadcrumb(route);
      },
      immediate: true
    }
  },
  methods: {
    // 获取面包屑
    getBreadcrumb(route) {
      this.breadcrumb.length = 0;
      let _breadcrumb = route.matched.filter(v => v.meta);
      // 没有一条有 /home
      if (!_breadcrumb.some(v => v.path === "/home")) {
        _breadcrumb = [{ path: "/home", meta: { title: "主页" } }].concat(
          _breadcrumb
        );
      }
      this.breadcrumb = _breadcrumb;
    }
  }
};
</script>

<style lang="stylus" scoped>
.the-header
  padding 10px 5px
  background-color white
  display flex
  justify-content space-between
  align-items center
  .right-menu
    ::v-deep .el-avatar
      vertical-align middle
    .header-icon
      vertical-align middle
      cursor pointer
      margin-right 10px
</style>
