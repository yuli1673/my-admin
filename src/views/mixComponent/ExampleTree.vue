<!--
 * @Author: your name
 * @Date: 2021-05-30 17:28:49
 * @LastEditTime: 2021-05-30 17:43:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-admin/src/views/mixComponent/ExampleTree.vue
-->
<template>
  <div class="example-tree">
    <chart-tree></chart-tree>
  </div>
</template>

<script>
export default {
  components: {
    ChartTree: () => import("@/components/ECharts/ChartTree")
  }
};
</script>

<style lang="stylus" scoped></style>
