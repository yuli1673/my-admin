<!--
 * @Author: your name
 * @Date: 2021-05-30 17:22:53
 * @LastEditTime: 2021-05-30 18:02:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-admin/src/components/ECharts/ChartTree.vue
-->
<template>
  <div class="chart-tree"></div>
</template>

<script>
import resize from "@/mixin/ResizeEchart";

import echarts from "echarts";
export default {
  mixins: [resize],
  data() {
    return {
      myChart: null,
      chartData: []
    };
  },
  mounted() {
    this.init();
    this.api();
  },
  methods: {
    init() {
      this.myChart = echarts.init(this.$el);
    },
    option(data) {
      var option = {
        tooltip: {
          trigger: "item"
        },
        series: [
          {
            type: "tree",
            data: data,
            top: "1%",
            left: "7%",
            bottom: "1%",
            right: "20%",
            symbolSize: 7,
            roam: true,
            label: {
              position: "left",
              verticalAlign: "middle",
              align: "right",
              fontSize: 9
            },
            leaves: {
              label: {
                position: "right",
                verticalAlign: "middle",
                align: "left"
              }
            }
          }
        ]
      };
      this.myChart.setOption(option);
    },
    api() {
      fetch(
        "https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/data/flare.json"
      )
        .then(v => v.json())
        .then(v => {
          this.chartData = [v];
          console.log(this.chartData);
          this.option(this.chartData);
        });
    }
  }
};
</script>
<style lang="stylus" scoped>
.chart-tree
  height calc(100vh - 100px)
</style>
