/*
 * @Author: your name
 * @Date: 2021-02-18 18:09:39
 * @LastEditTime: 2021-02-18 19:43:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-admin/src/mixin/ResizeEchart.js
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
    $_resizeHandler() {
      this.myChart && this.myChart.resize();
    }
  }
};
