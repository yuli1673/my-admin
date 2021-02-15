<!--
 * @Author: your name
 * @Date: 2021-02-12 23:34:56
 * @LastEditTime: 2021-02-14 19:41:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-admin/src/views/about/abc.vue
-->
<template>
  <div>
    <the-nav :currentRouters="currentRouters"></the-nav>
    <h3>abc</h3>
  </div>
</template>
<script>
export default {
  components: {
    TheNav: () => import("@/components/theNav/index")
  },
  computed: {
    currentRouters() {
      let currentRouters = this.$router.options.routes;
      currentRouters = currentRouters.filter(v => v.path === "/about");
      return currentRouters;
    }
  }
};
</script>
