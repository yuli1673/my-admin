<!--
 * @Author: 折线图
 * @Date: 2021-02-18 18:06:16
 * @LastEditTime: 2021-02-18 20:47:47
 * @LastEditors: Please set LastEditors
 * @Description: 面板点击后发生变化的折线图
 * @FilePath: /my-admin/src/views/home/components/LineEchart.vue
-->
<template>
  <div class="line-echart">
    <div id="main" class="echart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import resize from "@/mixin/ResizeEchart";
export default {
  mixins: [resize],
  props: {
    options: {
      type: Object,
      default: () => ({
        expectedData: [880, 1132, 1001, 1234, 790, 1132, 1310],
        actualData: [909, 933, 911, 944, 1288, 1120, 1320]
      })
    }
  },
  data() {
    return {
      myChart: null,
      option: {
        title: {
          text: "折线图堆叠"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "搜索引擎"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            data: [880, 1132, 1001, 1234, 790, 1132, 1310]
          },
          {
            name: "搜索引擎",
            type: "line",
            stack: "总量",
            data: [909, 933, 911, 944, 1288, 1120, 1320]
          }
        ]
      }
    };
  },
  mounted() {
    this.initEchart();
  },
  methods: {
    initEchart() {
      var chartDom = document.getElementById("main");
      this.myChart = echarts.init(chartDom);
      this.setOptions(this.options);
    },
    setOptions({ expectedData, actualData }) {
      this.myChart.setOption({
        title: {
          text: "折线图堆叠"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "搜索引擎"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            data: expectedData
          },
          {
            name: "搜索引擎",
            type: "line",
            stack: "总量",
            data: actualData
          }
        ]
      });
    }
  },
  watch: {
    options: {
      handler(val) {
        this.setOptions(val);
      },
      deep: true
    }
  }
};
</script>

<style lang="stylus" scoped>
.line-echart
  margin 20px
  padding 20px
  background-color white
  .echart
    height 500px
</style>
