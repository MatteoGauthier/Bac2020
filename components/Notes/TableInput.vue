<template>
  <table class="vue-table">
    <tr>
      <th @click="sortBy('mat')" :class="{
          ascending: sortKey === 'mat' && !reverse,
          descending: sortKey === 'mat' && reverse
        }">Matières</th>
      <th @click="sortBy('prem')" :class="{
          ascending: sortKey === 'prem' && !reverse,
          descending: sortKey === 'prem' && reverse
        }">Note 1er Trimestre</th>
      <th @click="sortBy('secon')" :class="{
          ascending: sortKey === 'secon' && !reverse,
          descending: sortKey === 'secon' && reverse
        }">Note 2ème Trimestre</th>
    </tr>
    <tr :key="item.mat" v-for="item in value">
      <td>{{ item.mat }}</td>
      <td><input type="number"></td>
      <td>{{ item.secon }}</td>
    </tr>
  </table>
</template>

<script>
/*
TODO
 TRY THIS :
http://doc.huangsw.com/vue-easytable/app.html#/table/cellEdit

*/
export default {
  name: 'TableInput',
  props: {
    value: {
      type: Array,
      default: [
        { mat: "foo", prem: 12.5, secon: 17 },
        { mat: "bar", prem: 5.5, secon: 8.5 },
        { mat: "baz", prem: 10, secon: 5 },
        { mat: "bim", prem: 19, secon: 12 }
      ]
    }
  },
  data() {
    return {
      reverse: false,
      sortKey: null
    };
  },
  methods: {
    sortBy(sortKey) {
      //  note!
      this.value.sort((a, b) => {
        //  numeric sort
        if (typeof a[sortKey] === "number") {
          return a[sortKey] - b[sortKey];
        }
        //  alphanumeric sort
        const x = a[sortKey].toUpperCase();
        const y = b[sortKey].toUpperCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
      //  toggle reverse if we click same sort again (default is )
      this.reverse = this.sortKey === sortKey ? !this.reverse : false;
      //  reverse array if true
      if (this.reverse) this.value.reverse();
      //  store key for next event
      this.sortKey = sortKey;
    }
  }
};
</script>

<style lang="scss" scoped>
.vue-table {
    font:16px sans-serif;
    border-collapse: collapse;
    td,th { border:1px solid #ccc; padding: 5px }
    th { padding: 3px 16px; position: relative; cursor:pointer; }
    th:before {
        font-family:'Material Icons', sans-serif;
        position: absolute; left:0;
    }
    th:before { content: '←'; color: silver;}
    .ascending:before { content: '↓'; color: dodgerblue; }
    .descending:before { content: '↑'; color: dodgerblue; }
}
</style>
