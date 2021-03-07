<!--
 * @Author: your name
 * @Date: 2021-02-12 12:47:55
 * @LastEditTime: 2021-03-07 23:47:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-admin/src/views/Home.vue
-->
<template>
  <div class="home">
    <panel-group @clickPanel="clickPanel" />
    <chart-map class="chart-map" />
    <!-- 三个联排的 e-charts -->
    <div class="chart-row">
      <chart-pie class="chart-row_item" />
      <chart-radar class="chart-row_item" />
      <chart-bar class="chart-row_item" />
    </div>
    <chart-line class="chart-line" />
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
    ChartBar: () => import("@/components/ECharts/ChartBar.vue"),
    ChartMap: () => import("@/components/ECharts/ChartMap.vue")
  },
  data() {
    return {};
  },
  methods: {
    clickPanel(panel) {
      console.log(panel);
    }
  }
};
</script>
<style lang="stylus" scoped>
.home
  padding 20px
  background-color #f0f2f5
  .chart-line, .chart-map
    margin 30px 0
  .chart-row
    margin 30px 0
    display flex
    justify-content space-between
    .chart-row_item
      width 30%
      padding 10px
      margin 5px 0
      background-color white
      height 400px
@media screen and (max-width 996px)
  .home
    .chart-row
      display block
      .chart-row_item
        width 100%
</style>
