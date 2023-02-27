<script setup>
import { computed, ref } from "vue";
import BaseTable from "@/components/Table/BaseTable.vue";
import TableRow from "@/components/Table/TableRow.vue";
import TableColumn from "@/components/Table/TableColumn.vue";

const sortField = ref("id");
const typeSort = ref("asc");

const dataSorted = computed(() => {
  return data.value.sort((a, b) => {
    let modifier = 1;
    if (typeSort.value === "desc") {
      modifier = -1;
    }
    if (a[sortField.value] < b[sortField.value]) {
      return -1 * modifier;
    }
    if (a[sortField.value] > b[sortField.value]) {
      return 1 * modifier;
    }
    return 0;
  });
});

const setSort = (name) => {
  if (sortField.value === name) {
    if (typeSort.value === "asc") {
      typeSort.value = "desc";
    } else {
      typeSort.value = "asc";
    }
  } else {
    sortField.value = name;
  }
};

const tableHeads = [
  "id",
  "Data",
  "Summary1",
  "Summary2",
  "Summary3",
  "Summary4",
  "Summary5",
];
const tableSizeColumns = " 10px 250px 1fr 1fr 1fr 1fr 1fr";

const data = ref([
  { id: 1, name: "Data1", sum1: 186, sum2: 186, sum3: 92, sum4: 8, sum5: 1 },
  { id: 2, name: "Data2", sum1: 95, sum2: 95, sum3: 31, sum4: 11, sum5: 0 },
  { id: 3, name: "Data3", sum1: 329, sum2: 329, sum3: 256, sum4: 32, sum5: 4 },
  { id: 4, name: "Data4", sum1: 804, sum2: 804, sum3: 697, sum4: 40, sum5: 22 },
]);
</script>

<template>
  <h1>Table</h1>
  <span>sort field:_ {{ sortField }} |</span>
  <span>type sort:_ {{ typeSort }} _</span>
  <BaseTable
    :head="tableHeads"
    :columnTemplates="tableSizeColumns"
    @sorting="setSort"
  >
    <TableRow
      v-for="data in dataSorted"
      :key="data.id"
      :columnTemplates="tableSizeColumns"
    >
      <TableColumn :columnTitle="tableHeads[0]">
        {{ data.id }}
      </TableColumn>
      <TableColumn :columnTitle="tableHeads[1]">
        {{ data.name }}
      </TableColumn>
      <TableColumn :columnTitle="tableHeads[2]">
        {{ data.sum1 }}
      </TableColumn>
      <TableColumn :columnTitle="tableHeads[3]">
        {{ data.sum2 }}
      </TableColumn>
      <TableColumn :columnTitle="tableHeads[4]">
        {{ data.sum3 }}
      </TableColumn>
      <TableColumn :columnTitle="tableHeads[5]">
        {{ data.sum4 }}
      </TableColumn>
      <TableColumn :columnTitle="tableHeads[6]">
        {{ data.sum5 }}
      </TableColumn>
    </TableRow>
  </BaseTable>
</template>
