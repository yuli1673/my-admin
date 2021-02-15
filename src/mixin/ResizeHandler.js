/*
 * @Author: josen
 * @Date: 2021-02-14 23:17:45
 * @LastEditTime: 2021-02-15 01:10:53
 * @LastEditors: Please set LastEditors
 * @Description: 监听屏幕的大小情况
 * @FilePath: /my-admin/src/mixin/ResizeHandler.js
 */
// import store from "@/store";

// const { body } = document;

export default {
  watch: {
    $route() {
      // if (this.device === "mobile") {
      //   store.commit("app/toggleNav", false);
      // } else {
      //   store.commit("app/toggleNav", false);
      // }
    }
  },
  // 创建监听
  beforeMount() {
    window.addEventListener("resize", this.$_resizeHandler);
  },
  // 销毁监听
  beforeDestroy() {
    window.removeEventListener("resize", this.$_resizeHandler);
  },
  mounted() {
    // const isMobile = this.$_isMobile();
    // if (isMobile) {
    //   store.commit("app/TOGGLE_DEVICE", "mobile");
    //   store.commit("app/SET_WITHOUT_NAV", true);
    // }
  },
  methods: {
    // use $_ for mixins properties
    // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
    /**
     * @description: 判断是否是手机 或者 屏幕较小的屏幕
     * @param {}
     * @return {Boolean} true 是手机 false 不是手机
     */
    $_isMobile() {},
    /**
     * @description: 当窗口发生变化时出发
     * @param
     * @return
     */
    $_resizeHandler() {}
  }
};
