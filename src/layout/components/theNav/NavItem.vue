<!--
 * @Author: josen
 * @Date: 2021-02-12 22:18:58
 * @LastEditTime: 2021-02-12 23:39:23
 * @LastEditors: Please set LastEditors
 * @Description: 遍历的每一项 路由子集
 * @FilePath: /my-admin/src/layout/components/theNav/NavItem.vue
-->
<template>
  <div class="nav-item">
    <!-- 没有子集 -->
    <el-menu-item :index="path" v-if="!router.children">
      <i :class="router.icon" />
      <span>{{ router.name }}</span>
    </el-menu-item>
    <!-- 有子集 -->
    <el-submenu :index="path" v-else>
      <template slot="title">
        <i :class="router.icon"></i>
        <span slot="title">{{ router.name }}</span>
      </template>
      <nav-item
        v-for="(item, index) in router.children"
        :key="index"
        :router="item"
        :path="item.path"
      />
    </el-submenu>
  </div>
</template>

<script>
export default {
  components: {
    NavItem: () => import("./NavItem")
  },
  props: {
    // 整体的路由
    router: {
      type: Object,
      require: true
    },
    // 路径
    path: {
      type: String
    }
  },
  mounted() {
    console.log(this.router);
  }
};
</script>

<style lang="stylus" scoped></style>
