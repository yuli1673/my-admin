<!--
 * @Author: josen
 * @Date: 2021-02-21 22:25:14
 * @LastEditTime: 2021-02-23 23:55:17
 * @LastEditors: Please set LastEditors
 * @Description: 表格
 * @FilePath: /my-admin/src/components/TheTable.vue
-->
<template>
  <div class="">
    <el-table :data="tableData">
      <!-- 多选框 -->
      <el-table-column type="selection" width="55"> </el-table-column>
      <!-- 内容区域 -->
      <template v-for="(item, index) in columns">
        <el-table-column
          :key="item.prop + index"
          :prop="item.prop"
          :label="item.label"
          :min-width="item.minWidth"
          :fixed="item.fixed"
          show-overflow-tooltip
        >
          <template #default="{row}">
            <!-- slot -->
            <slot v-if="item.type === 'slot'" :row="row[item.prop]" />
            <!-- 标签 tag -->
            <el-tag v-else-if="item.type === 'tag'">
              {{ row[item.prop] }}
            </el-tag>
            <!-- 默认显示 -->
            <span v-else>
              {{ row[item.prop] }}
            </span>
          </template>
        </el-table-column>
      </template>
      <!-- 可操作的按钮 -->
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
          primary 主要按钮 
          success 成功按钮 
          info 信息按钮
          warning 警告按钮
          danger 危险按钮
     *  @param {Function} callFun callback 方法
     *  @param {String} icon 饿了么图标
     */
    operates: {
      type: Object,
      default: () => ({
        show: false,
        minWidth: "200",
        fixed: null,
        list: [
          {
            type: "primary",
            icon: "el-icon-search",
            callFun() {}
          }
        ]
      })
    }
  }
};
</script>
