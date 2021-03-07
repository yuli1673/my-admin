<!--
 * @Author: josen
 * @Date: 2021-02-28 14:22:08
 * @LastEditTime: 2021-03-07 10:36:58
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
        backgroundColor: "#666",
        // textStyle: {
        //   color: "#fff"
        // },
        title: {
          text: "分布 - 地图",
          textStyle: {
            color: "#fff"
          }
        },
        tooltip: {
          trigger: "item"
        },
        geo: {
          show: true,
          map: "china",
          label: {
            show: true,
            emphasis: {
              show: true,
              color: "#a6c84c"
            }
          },
          itemStyle: {
            normal: {
              areaColor: "#323c48",
              borderColor: "#404a59"
            },
            emphasis: {
              areaColor: "#2a333d"
            }
          },
          roam: true,
          zoom: 1.2
        },
        series: [
          {
            // name: "pm2.5",
            coordinateSystem: "geo",
            type: "scatter",
            data: [
              { name: "佛山", value: [113.11, 23.05], content: "佛山无影脚" },
              { name: "合肥", value: [117.29, 32.0581], content: "合肥一家人" }
            ],
            itemStyle: {
              color: "#a6c84c",
              shadowBlur: 10,
              shadowColor: "#a6c84c"
            },
            label: {
              formatter: "{b}",
              position: "right",
              show: true
            }
          },
          {
            // name: "Top 5",
            coordinateSystem: "geo",
            type: "effectScatter",
            data: [
              {
                name: "衢州",
                value: [118.88, 28.97],
                content: "鸡头，兔头，鱼头"
              }
            ],
            symbolSize: 24,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: true
              }
            },
            itemStyle: {
              color: "#a6c84c",
              shadowBlur: 10,
              shadowColor: "#fff"
            }
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
  height 666px
</style>
