<!--
 * @Author: 折线图
 * @Date: 2021-02-18 18:06:16
 * @LastEditTime: 2021-02-27 23:44:37
 * @LastEditors: Please set LastEditors
 * @Description: 面板点击后发生变化的折线图
 * @FilePath: /my-admin/src/views/home/components/LineEchart.vue
-->
<template>
  <div id="main" class="chart-line"></div>
</template>

<script>
import * as echarts from "echarts";
import resize from "@/mixin/ResizeEchart";
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
          text: "堆叠区域图"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            // boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "视频广告",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "直接访问",
            type: "line",
            stack: "总量",
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "搜索引擎",
            type: "line",
            stack: "总量",
            label: {
              show: true,
              position: "top"
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
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
      this.setOption(this.options);
    },
    setOption() {
      this.myChart.setOption(this.option);
      // this.myChart.setOption({
      //   title: {
      //     text: "折线图堆叠"
      //   },
      //   tooltip: {
      //     trigger: "axis"
      //   },
      //   legend: {
      //     data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
      //   },
      //   grid: {
      //     left: "3%",
      //     right: "4%",
      //     bottom: "3%",
      //     containLabel: true
      //   },
      //   toolbox: {
      //     feature: {
      //       saveAsImage: {}
      //     }
      //   },
      //   xAxis: {
      //     type: "category",
      //     boundaryGap: false,
      //     data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
      //   },
      //   yAxis: {
      //     type: "value"
      //   },
      //   series: [
      //     {
      //       name: "邮件营销",
      //       type: "line",
      //       stack: "总量",
      //       areaStyle: {},
      //       emphasis: {
      //         focus: "series"
      //       },
      //       data: [120, 132, 101, 134, 90, 230, 210]
      //     },
      //     {
      //       name: "联盟广告",
      //       type: "line",
      //       stack: "总量",
      //       areaStyle: {},
      //       emphasis: {
      //         focus: "series"
      //       },
      //       data: [220, 182, 191, 234, 290, 330, 310]
      //     },
      //     {
      //       name: "视频广告",
      //       type: "line",
      //       stack: "总量",
      //       areaStyle: {},
      //       emphasis: {
      //         focus: "series"
      //       },
      //       data: [150, 232, 201, 154, 190, 330, 410]
      //     },
      //     {
      //       name: "直接访问",
      //       type: "line",
      //       stack: "总量",
      //       areaStyle: {},
      //       emphasis: {
      //         focus: "series"
      //       },
      //       data: [320, 332, 301, 334, 390, 330, 320]
      //     },
      //     {
      //       name: "搜索引擎",
      //       type: "line",
      //       stack: "总量",
      //       label: {
      //         show: true,
      //         position: "top"
      //       },
      //       areaStyle: {},
      //       emphasis: {
      //         focus: "series"
      //       },
      //       data: [820, 932, 901, 934, 1290, 1330, 1320]
      //     }
      //   ]
      // });
    }
  },
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
.chart-line
  padding 20px
  background-color white
  height 500px
</style>
