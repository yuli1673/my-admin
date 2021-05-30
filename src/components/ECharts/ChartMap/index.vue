<!--
 * @Author: josen
 * @Date: 2021-02-28 14:22:08
 * @LastEditTime: 2021-05-30 17:22:21
 * @LastEditors: Please set LastEditors
 * @Description: echart 离线地图
 * @FilePath: /my-admin/src/components/ECharts/ChartMap.vue
-->
<template>
  <div class="map">
    <i class="el-icon-back" @click="setOption('china')"></i>
    <div ref="map" id="main" class="chart-map"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import "echarts/map/js/china";
import "./map";
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
      option: {}
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    // 初始化
    init() {
      this.myChart = echarts.init(this.$refs.map);
      this.setOption();
      this.myChart.on("dblclick", param => {
        this.setOption(param.name);
      });
    },
    async setOption(mapName = "china", data = []) {
      // await this.importCity(CITY[mapName]);
      var option = {
        title: {
          text: "USA Population Estimates (2012)",
          link: "http://www.census.gov/popest/data/datasets.html",
          subtext: "Data from www.census.gov",
          sublink: "http://www.census.gov/popest/data/datasets.html",
          left: "center",
          color: "#fff"
        },
        // ?参考资料 https://echarts.apache.org/v4/zh/option.html#tooltip.formatter
        tooltip: {
          trigger: "item",
          formatter(params) {
            // console.log(params);
            // return params.seriesName + "<br/>" + params.name + ": ";
            return `${params.name}: 我是数据`;
          }
        },
        series: [
          {
            roam: true,
            type: "map",
            map: mapName,
            data: data
          }
        ]
      };
      this.myChart.setOption(option);
    }
  },
  computed: {},
  watch: {
    options: {
      handler() {
        // this.setOption(val);
      },
      deep: true
    }
  }
};
</script>

<style lang="stylus" scoped>
.chart-map
  height 666px
  background-image radial-gradient(#000, #bbb, #f0f2f5)
</style>
