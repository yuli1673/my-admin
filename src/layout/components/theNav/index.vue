<!--
 * @Author: josen
 * @Date: 2021-02-12 22:09:34
 * @LastEditTime: 2021-02-12 23:31:45
 * @LastEditors: Please set LastEditors
 * @Description: 左侧导航栏
 * @FilePath: /my-admin/src/layout/components/TheNav.vue
-->
<template>
  <div>
    <el-menu class="the-nav-menu" :collapse="isCollapse" router>
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
  components: {
    NavItem: () => import("./NavItem")
  },
  data() {
    return {
      isCollapse: false
    };
  },
  computed: {
    routers() {
      let routers = [];
      routers = this.$router.options.routes;
      return routers;
    }
  }
};
</script>

<style></style>
