<!--
 * @Author: your name
 * @Date: 2021-02-27 22:53:57
 * @LastEditTime: 2021-02-27 23:32:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-admin/src/components/ECharts/ChartPie.vue
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
          text: "饼图",
          subtext: "纯属虚构",
          left: "center"
        },
        tooltip: {
          trigger: "item"
        },
        legend: {
          orient: "vertical",
          left: "left"
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "搜索引擎" },
              { value: 735, name: "直接访问" },
              { value: 580, name: "邮件营销" },
              { value: 484, name: "联盟广告" },
              { value: 300, name: "视频广告" }
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
