<!--
 * @Author: your name
 * @Date: 2021-02-14 13:10:57
 * @LastEditTime: 2021-02-15 01:12:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-admin/src/layout/components/theNav/Logo.vue
-->
<template>
  <div class="logo" @click="toggleNav()">
    <img
      src="https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png"
      alt="logo"
      class="logo-img"
    />
    <h3 v-if="!isCollapse" class="logo-title">my-admin</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleNav() {
      let is = !this.$store.state.app.theNav.isCollapse;
      this.$store.commit("app/SET_COLLAPSE_NAV", is);
    }
  },
  computed: {
    isCollapse() {
      return this.$store.state.app.theNav.isCollapse;
    }
  }
};
</script>
<style lang="stylus" scoped>
.logo
  background-color #2b2f3a
  display flex
  justify-content center
  align-items center
  height 50px
  .logo-img
    height: 40px;
    width 40px
  .logo-title
    color white
    margin-left 10px
</style>
