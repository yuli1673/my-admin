<!--
 * @Author: josen
 * @Date: 2021-02-21 22:25:14
 * @LastEditTime: 2021-02-21 23:48:54
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
          :min-width="item.minWidth"
          :fixed="item.fixed"
          show-overflow-tooltip
        ></el-table-column>
      </template>
      <el-table-column
        label="操作"
        align="center"
        v-if="operates.show"
        :min-width="operates.minWidth"
        :fixed="operates.fixed"
      >
        <template slot-scope="{ row }">
          <el-button
            size="mini"
            v-for="(btn, index) in operates.list"
            :type="btn.type"
            :key="index"
            :icon="operates.icon"
            @click="btn.callFun(index, row)"
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
      required: true,
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
      required: true,
      default: () => [
        {
          prop: "",
          label: "",
          minWidth: "",
          fixed: ""
        }
      ]
    },
    /**
     * @description: 操作按钮集合
     * @param {Boolean} show 是否显示操作拦
     * @param {String} minWidth 最小宽度
     * @param {String} fixed 固定在左侧右侧 left, right
     * @param {Array} list 有多少个button
     * ?在 list 中每一项的数据
     *  @param {String} label 按钮名称
     *  @param {String} type
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="info">信息按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button type="danger">危险按钮</el-button>
     *  @param {Function} callFun callback 方法
     *  @param {String} icon 饿了么图标
     */
    operates: {
      type: Object,
      default: null,
      required: true
    }
  }
};
</script>
