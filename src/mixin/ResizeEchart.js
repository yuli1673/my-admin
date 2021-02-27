/*
 * @Author: your name
 * @Date: 2021-02-18 18:09:39
 * @LastEditTime: 2021-02-28 00:21:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-admin/src/mixin/ResizeEChart.js
 */

export default {
  mounted() {
    window.addEventListener("resize", this.$_resizeHandler);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.$_resizeHandler);
  },
  // to fixed bug when cached by keep-alive
  // https://github.com/PanJiaChen/vue-element-admin/issues/2116
  activated() {},
  deactivated() {},
  methods: {
    // use $_ for mixins properties
    // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
    /**
     * @description: 更新 charts
     * ?为什么带上延迟执行 setTimeout
     * *因为window的resize方法执行时，这时候它还没有去获取到屏幕的大小变化，e-chart的resize方法却已经执行完成了。就会出现另一种状况。就是第一次屏幕变化图表没有变化，接下来的每次变化图表都是反着变化的，屏幕变大图表变小，屏幕变小图表变大。
     */
    $_resizeHandler() {
      this.myChart && setTimeout(() => this.myChart.resize(), 300);
    }
  },
  computed: {
    isCollapse() {
      const _IS = this.$store.state.app.theNav.isCollapse;
      return _IS;
    }
  },
  watch: {
    isCollapse() {
      this.$_resizeHandler();
    }
  }
};
