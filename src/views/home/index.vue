<!--
 * @Author: your name
 * @Date: 2021-02-12 12:47:55
 * @LastEditTime: 2021-02-27 23:32:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-admin/src/views/Home.vue
-->
<template>
  <div class="home">
    <panel-group @clickPanel="clickPanel" />
    <chart-line :options="options" />
    <!-- 三个联排的 e-charts -->
    <div class="chart-row">
      <chart-pie class="chart-row_item" />
      <chart-radar class="chart-row_item" />
      <chart-bar class="chart-row_item" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
    PanelGroup: () => import("./components/PanelGroup"),
    ChartLine: () => import("@/components/ECharts/ChartLine"),
    ChartPie: () => import("@/components/ECharts/ChartPie.vue"),
    ChartRadar: () => import("@/components/ECharts/ChartRadar.vue"),
    ChartBar: () => import("@/components/ECharts/ChartBar.vue")
  },
  data() {
    return {
      options: {
        expectedData: [880, 1132, 1001, 1234, 790, 1132, 1310],
        actualData: [909, 933, 911, 944, 1288, 1120, 1320]
      }
    };
  },
  methods: {
    clickPanel(panel) {
      switch (panel.label) {
        case "Visits":
          this.options = {
            expectedData: [880, 1132, 1001, 1234, 790, 1132, 1310],
            actualData: [909, 933, 911, 944, 1288, 1120, 1320]
          };
          break;
        case "Messages":
          this.options = {
            expectedData: [888, 932, 1001, 1134, 890, 1230, 1210],
            actualData: [820, 932, 901, 934, 1290, 1330, 1320]
          };
          break;
        case "Purchases":
          this.options = {
            expectedData: [888, 993, 1001, 1218, 1190, 1130, 1110],
            actualData: [930, 933, 931, 834, 1190, 1330, 1210]
          };
          break;
        case "Shoppings":
          this.options = {
            expectedData: [948, 332, 998, 909, 893, 857, 948],
            actualData: [999, 980, 901, 893, 2934, 1231, 1893]
          };
          break;
        default:
          break;
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.home
  padding 20px
  background-color #f0f2f5
  .chart-row
    margin 30px 0
    display flex
    justify-content space-between
    .chart-row_item
      width 30%
      padding 10px
      background-color white
      height 400px
</style>
