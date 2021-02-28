<!--
 * @Author: josen
 * @Date: 2021-02-28 14:22:08
 * @LastEditTime: 2021-03-01 01:36:01
 * @LastEditors: Please set LastEditors
 * @Description: 地图
 * @FilePath: /my-admin/src/components/ECharts/ChartMap.vue
-->
<template>
  <div id="main" class="chart-map"></div>
</template>

<script>
import echarts from "echarts";
import "echarts/map/js/china";
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
        title: {
          text: "全国主要城市空气质量 - 百度地图",
          subtext: "data from PM25.in",
          sublink: "http://www.pm25.in",
          left: "center"
        },
        tooltip: {
          trigger: "item"
        },
        geo: {
          map: "china",
          zoom: 1
        },
        series: [
          {
            name: "pm2.5",
            coordinateSystem: "geo",
            type: "scatter",
            data: [
              {
                name: "岳阳",
                value: [113.09, 29.37, 10]
              }
            ]
          },
          {
            name: "Top 5",
            coordinateSystem: "geo",
            type: "effectScatter",
            data: [
              {
                name: "衢州",
                value: [118.88, 28.97, 9]
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
  background-color white
  height 500px
</style>
