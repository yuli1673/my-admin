<!--
 * @Author: josen
 * @Date: 2021-02-12 22:18:58
 * @LastEditTime: 2021-02-15 01:17:29
 * @LastEditors: Please set LastEditors
 * @Description: 遍历的每一项 路由子集
 * @FilePath: /my-admin/src/layout/components/theNav/NavItem.vue
-->
<template>
  <!-- 没有子集 -->
  <el-menu-item :index="path" v-if="hasOnlyChildren(router)">
    <i :class="router.icon" />
    <span>{{ router.name }}</span>
  </el-menu-item>
  <!-- 有子集 -->
  <el-submenu :index="path" v-else class="submenu">
    <template slot="title">
      <i :class="router.icon"></i>
      <span slot="title">{{ router.name }}</span>
    </template>
    <nav-item
      v-for="(item, index) in router.children"
      :key="index"
      :router="item"
      :path="path + '/' + item.path"
    />
  </el-submenu>
</template>

<script>
export default {
  components: {
    NavItem: () => import("./NavItem")
  },
  props: {
    // 当前加载的某一个路由对象
    router: {
      type: Object,
      require: true
    },
    // 路径
    path: {
      type: String,
      require: true
    }
  },
  methods: {
    /**
     * @description: 是否只有一个子集
     * @param {Object} router 路由对象
     * @return {Boolean} true 只有一个子集 ；false 有多个子集
     */
    hasOnlyChildren(router = {}) {
      if ("children" in router && router.children.length > 1) {
        return false;
      }
      return true;
    }
  },
  mounted() {}
};
</script>

<style lang="stylus" scoped></style>
