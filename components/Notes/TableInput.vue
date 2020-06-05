<template>
  <div>
    <client-only placeholder="Loading...">
      <v-client-table :columns="columns" :options="options" v-model="tableData">
        <div slot="prem" slot-scope="{row, update}">
          <input type="text" class="bg-transparent" v-model="row.prem" @change="update" />
        </div>
      </v-client-table>
      {{tableData}}
    </client-only>
  </div>
</template>

<script>
/*
TODO
 TRY THIS :
http://doc.huangsw.com/vue-easytable/app.html#/table/cellEdit

*/
export default {
  name: "TableInput",
  data() {
    return {
      columns: ["mat", "prem", "secon"],
      tableData: [
        { mat: "foo", prem: 12.5, secon: 17,id: 1 },
        { mat: "bar", prem: 5.5, secon: 8.5,id: 2 },
        { mat: "baz", prem: 10, secon: 5,id: 3 },
        { mat: "bim", prem: 19, secon: 12 ,id: 4}
      ],
      options: {
        headings: {
          mat: "Matière",
          prem: "Premier trimestre",
          secon: "Second trimestre"
        },

        editableColumns:['prem'],
        filterable: false,
        resizableColumns: false
      }
    };
  }
};
</script>

<style lang="postcss" scoped>
/* .vue-table {
  font: 16px sans-serif;
  border-collapse: collapse;
  td,
  th {
    border: 1px solid #ccc;
    padding: 5px;
  }
  th {
    padding: 3px 16px;
    position: relative;
    cursor: pointer;
  }
  th:before {
    font-family: "Material Icons", sans-serif;
    position: absolute;
    left: 0;
  }
  th:before {
    content: "←";
    color: silver;
  }
  .ascending:before {
    content: "↓";
    color: dodgerblue;
  }
  .descending:before {
    content: "↑";
    color: dodgerblue;
  }
} */
</style>
