<!--
 * @Author: josen
 * @Date: 2021-02-28 14:22:08
 * @LastEditTime: 2021-02-28 16:15:52
 * @LastEditors: Please set LastEditors
 * @Description: 地图
 * @FilePath: /my-admin/src/components/ECharts/ChartMap.vue
-->
<template>
  <div id="main" class="chart-map"></div>
</template>

<script>
import * as echarts from "echarts";
import "echarts/map/js/china"; // 引入中国地图数据

import resize from "@/mixin/ResizeEChart";
export default {
  mixins: [resize],
  props: {
    // 传入的数据
    options: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      myChart: null,
      option: {
        geo: {
          // 这个是重点配置区
          map: "china", // 表示中国地图
          roam: true,
          zoom: 2,
          label: {
            normal: {
              show: true // 是否显示对应地名
            }
          }
        },
        title: {
          text: "设备分布 - 地图",
          subtext: "cncr",
          // sublink: "http://www.pm25.in",
          left: "center"
        },
        tooltip: {
          trigger: "item"
        },
        series: [
          {
            name: "销量",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: [
              { name: "海门", value: [121.15, 31.89, 90] },
              { name: "鄂尔多斯", value: [109.781327, 39.608266, 120] },
              { name: "招远", value: [120.38, 37.35, 142] },
              { name: "舟山", value: [122.207216, 29.985295, 123] }
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
    // 初始化
    init() {
      this.myChart = echarts.init(this.$el);
      this.setOption();
    },
    setOption() {
      this.myChart.setOption(this.option, true);
    }
  },
  computed: {},
  watch: {
    options: {
      handler() {
        // this.setOptions(val);
      },
      deep: true
    }
  }
};
</script>

<style lang="stylus" scoped>
.chart-map
  padding 20px
  background-color white
  height 500px
</style>
