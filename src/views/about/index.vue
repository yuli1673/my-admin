<!--
 * @Author: your name
 * @Date: 2021-02-12 12:47:55
 * @LastEditTime: 2021-02-23 23:57:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-admin/src/views/About.vue
-->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <the-table :table-data="tableData" :columns="columns" :operates="operates">
      <template #default="{row}">
        <div>
          {{ row }}
        </div>
      </template>
    </the-table>
  </div>
</template>

<script>
import TheTable from "@/components/TheTable.vue";

export default {
  components: { TheTable },
  data() {
    return {
      tableData: [
        {
          a: "123",
          b: 321,
          c: { c: 321 }
        }
      ],
      columns: [
        {
          prop: "a",
          label: "a",
          minWidth: "500",
          type: "tag"
        },
        {
          prop: "b",
          label: "b",
          minWidth: "500"
        },
        {
          prop: "c",
          label: "c",
          type: "slot"
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
    }
  }
};
</script>
