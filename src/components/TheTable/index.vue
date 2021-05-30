<!--
 * @Author: josen
 * @Date: 2021-05-20 23:25:28
 * @LastEditTime: 2021-05-30 11:45:23
 * @LastEditors: Please set LastEditors
 * @Description: 表格
 * @FilePath: /my-admin/src/components/TheTable/index.vue
-->
<template>
  <div class="the-table">
    <header class="header">
      <el-button-group>
        <el-button
          icon="el-icon-search"
          @click="isSearch = !isSearch"
          type="info"
        ></el-button>
        <el-button
          class="header-button"
          icon="el-icon-refresh"
          @click="refresh"
        ></el-button>
        <!-- 塞选表格显示的表头 -->
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-button icon="el-icon-menu"></el-button>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-checkbox-group @change="changeCheckBox" v-model="checkboxArr">
              <el-dropdown-item v-for="column in columns" :key="column.prop">
                <el-checkbox :label="column.label" :disabled="column.disabled">
                  {{ column.label }}
                </el-checkbox>
              </el-dropdown-item>
            </el-checkbox-group>
          </el-dropdown-menu>
        </el-dropdown>
      </el-button-group>
      <!-- 搜索菜单 -->
      <transition name="el-fade-in-linear">
        <the-form
          v-if="isSearch"
          :form="queryForm"
          :field="queryTitle"
          @submit="search"
        ></the-form>
      </transition>
    </header>
    <el-table v-loading="loading" :data="tableData" max-height="800px">
      <!-- 多选框 -->
      <el-table-column type="selection" width="55"> </el-table-column>
      <!-- 内容区域 -->
      <template v-for="(column, index) in tableTitle">
        <el-table-column
          :key="column.prop + index"
          :prop="column.prop"
          :label="column.label"
          :min-width="column.minWidth"
          :fixed="column.fixed"
          :sortable="column.sortable"
          show-overflow-tooltip
        >
          <template #default="{row}">
            <!-- slot -->
            <slot v-if="column.component === 'slot'" :row="row[column.prop]" />
            <!-- 标签 tag -->
            <el-tag
              v-else-if="column.component === 'tag'"
              :type="
                tagState(row[column.prop]) === '在线' ? 'success' : 'danger'
              "
            >
              <!-- {{ row[column.prop] }} -->
              {{ tagState(row[column.prop]) }}
            </el-tag>
            <!-- 默认显示 -->
            <span v-else>
              {{ row[column.prop] }}
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
            :icon="btn.icon"
            @click="btn.callFun(index, row)"
          >
            {{ btn.label }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <el-pagination
      v-if="hasPageInfo"
      class="pagination"
      background
      @current-change="handleCurrentChange"
      :current-page="pageInfo.currentPage"
      layout="total, prev, pager, next, jumper"
      :total="pageInfo.total"
    >
    </el-pagination>
  </div>
</template>

<script>
import TheForm from "../TheForm";
export default {
  components: { TheForm },
  data() {
    return {
      // 表格头
      tableTitle: [],
      // 选中需要显示的表格头
      checkboxArr: [],
      // 搜索条件
      queryForm: { name: "" },
      queryTitle: [{ label: "名称", prop: "name", component: "input" }],
      isSearch: false
    };
  },
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
    },
    pageInfo: {
      type: Object,
      default: () => ({
        total: 10,
        currentPage: 1
      })
    }
  },
  computed: {
    loading() {
      return !this.tableData.length;
    },
    // 是否有分页器
    hasPageInfo() {
      return !!this.pageInfo.total;
    },
    /**
     * @description: 表格中 tag 标签的状态
     * @param {any} state 当前状态
     * @return {string} 返回需要描述的状态 例如 在线，离线
     */
    tagState() {
      return function(state) {
        const stateLabel = state ? "在线" : "离线";
        return stateLabel;
      };
    }
  },
  watch: {
    columns: {
      handler(n) {
        this.tableTitle = n;
        this.checkboxArr = n.map(v => v.label);
      },
      immediate: true,
      deep: true
    }
  },
  mounted() {},
  methods: {
    changeCheckBox(checkboxArr) {
      this.tableTitle = this.columns.filter(v => checkboxArr.includes(v.label));
    },
    // 当前页发生变黄
    handleCurrentChange(currentPage) {
      this.$emit("changePage", currentPage);
    },
    // 刷新表格
    refresh() {
      this.$emit("refresh");
    },
    // 搜索框内容定进行搜索
    search(form) {
      // console.log(form);
      this.$emit("search", form);
    }
  }
};
</script>
<style lang="stylus" scoped>
.the-table
  .header
    text-align right
  .pagination
    text-align center
</style>
