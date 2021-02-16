/*
 * @Author: josen
 * @Date: 2021-02-14 23:17:45
 * @LastEditTime: 2021-02-16 20:45:25
 * @LastEditors: Please set LastEditors
 * @Description: 监听屏幕的大小情况
    use $_ for mixins properties
    https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
 * @FilePath: /my-admin/src/mixin/ResizeHandler.js
 */
import store from "@/store";

const { body } = document;
// 节点尺寸大小
const WIDTH = 996;

export default {
  watch: {
    $route() {
      this.$_resizeHandler();
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
    const isMobile = this.$_isMobile();
    store.commit("app/TOGGLE_DEVICE", isMobile ? "mobile" : "pc");
    store.commit("app/SET_COLLAPSE_NAV", isMobile);
  },
  methods: {
    /**
     * @description: 判断是否是手机 或者 屏幕较小的屏幕
     * @return {Boolean} true 是手机 false 不是手机
     */
    $_isMobile() {
      const rect = body.getBoundingClientRect();
      return rect.width - 1 < WIDTH;
    },
    /**
     * @description: 当窗口发生变化时出发
     */
    $_resizeHandler() {
      if (!document.hidden) {
        const isMobile = this.$_isMobile();
        store.commit("app/TOGGLE_DEVICE", isMobile ? "mobile" : "pc");
        store.commit("app/SET_COLLAPSE_NAV", isMobile);
      }
    }
  }
};
