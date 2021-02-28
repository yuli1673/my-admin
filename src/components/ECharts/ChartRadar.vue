<!--
 * @Author: your name
 * @Date: 2021-02-27 23:09:57
 * @LastEditTime: 2021-02-28 21:52:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-admin/src/components/ECharts/ChartRadar.vue
-->

<template>
  <div class="chart-pie" id="main"></div>
</template>

<script>
import * as echarts from "echarts";
import resize from "@/mixin/ResizeEChart";

export default {
  mixins: [resize],
  data() {
    return {
      myChart: {},
      option: {
        title: {
          text: "雷达图"
        },
        tooltip: {},
        legend: {
          data: ["预算分配", "实际开销"]
        },
        radar: {
          indicator: [
            { name: "销售", max: 6500 },
            { name: "管理", max: 16000 },
            { name: "信息技术", max: 30000 },
            { name: "客服", max: 38000 },
            { name: "研发", max: 52000 },
            { name: "市场", max: 25000 }
          ]
        },
        series: [
          {
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",
            areaStyle: {},
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: "预算分配"
              },
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: "实际开销"
              }
            ]
          }
        ]
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.myChart = echarts.init(this.$el);
      this.myChart.setOption(this.option);
    }
  }
};
</script>

<style lang="stylus" scoped>
// .chart-pie
</style>
