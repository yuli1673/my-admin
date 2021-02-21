<!--
 * @Author: josen
 * @Date: 2021-02-21 22:25:14
 * @LastEditTime: 2021-02-21 23:20:47
 * @LastEditors: Please set LastEditors
 * @Description: 表格
 * @FilePath: /my-admin/src/components/TheTable.vue
-->
<template>
  <div class="">
    <el-table :data="tableData">
      <template v-for="item in columns">
        <el-table-column
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
          :width="item.minWidth"
          :fixed="item.fixed"
          show-overflow-tooltip
        ></el-table-column>
      </template>
      <el-table-column label="操作" align="center" v-show="operates.length">
        <template slot-scope="{ row }">
          <el-button
            size="mini"
            v-for="(btn, index) in operates"
            :type="btn.type"
            :key="index"
            @click="btn.fun(index, row)"
          >
            {{ btn.label }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    // 表格数据
    tableData: {
      type: Array,
      default: () => []
    },
    /**
     * @description: 表格列
     * @param {String} prop 字段名称
     * @param {String} label 名称
     * @param {String} minWidth 最小宽度
     * @param {String} fixed 固定位置 left, right
     */
    columns: {
      type: Array,
      default: () => [
        {
          prop: "",
          label: "",
          minWidth: "",
          fixed: ""
        }
      ]
    },
    // 操作按钮
    operates: {
      type: Array,
      default: () => []
    }
  }
};
</script>
