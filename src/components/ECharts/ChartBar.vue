<!--
 * @Author: josen
 * @Date: 2021-02-27 23:17:17
 * @LastEditTime: 2021-02-28 15:20:16
 * @LastEditors: Please set LastEditors
 * @Description: 条状图
 * @FilePath: /my-admin/src/components/ECharts/ChartBar.vue
-->

<template>
  <div class="chart-bar" id="main"></div>
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
          text: "条状图"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["one", "two", "three"]
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "one",
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar"
          },
          {
            name: "two",
            type: "bar",
            data: [120, 200, 150, 80, 70, 110, 130]
          },
          {
            name: "three",
            type: "bar",
            data: [120, 200, 150, 80, 70, 110, 130]
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

<style lang="stylus" scoped></style>
