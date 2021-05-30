<!--
 * @Author: your name
 * @Date: 2021-04-26 23:12:42
 * @LastEditTime: 2021-05-30 11:44:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-admin/src/views/mixComponent/ExampleTable.vue
-->
<template>
  <div class="example-table">
    <the-table
      v-on="{ changePage, refresh, search }"
      :table-data="tableData"
      :columns="columns"
      :operates="operates"
    >
      <template #default="{row}">
        <div>
          {{ row }}
        </div>
      </template>
    </the-table>
  </div>
</template>

<script>
import TheTable from "@/components/TheTable";

export default {
  components: { TheTable },
  data() {
    return {
      tableData: [
        {
          a: 1,
          b: 321,
          c: { c: 321 }
        }
      ],
      columns: [
        {
          prop: "a",
          label: "a",
          minWidth: "400",
          component: "tag"
        },
        {
          prop: "b",
          label: "b",
          minWidth: "400"
        },
        {
          prop: "c",
          label: "c",
          component: "slot"
        }
      ],
      operates: {
        show: true,
        minWidth: "200",
        fixed: null,
        list: [
          {
            icon: "",
            label: "1",
            type: "",
            callFun: (index, row) => this.fun1(index, row)
          }
        ]
      }
    };
  },
  methods: {
    fun1(index, row) {
      console.log(index, row);
    },
    // 改变页码
    changePage() {},
    // 刷新表单
    refresh() {
      this.tableData.splice(0, this.tableData.length);
      setTimeout(() => {
        this.tableData = [
          {
            a: 1,
            b: 111,
            c: { c: 111 }
          }
        ];
      }, 2 * 1000);
    },
    // 获取检索后的数据
    search() {
      this.refresh();
    }
  }
};
</script>
