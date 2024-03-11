<template>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th v-for="(column, index) in columns" :key="index">
              <b>{{ column.name }}</b>
            </th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
          <td v-for="(column, columnIndex) in columns" :key="columnIndex">
            {{ getRowValue(row, column) }}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      municipalityDetails: Object,
    },
    data() {
      return {
        columns: [],
        rows: [],
      };
    },
    created() {
      this.populateColumns();
      this.populateRows();
    },
    methods: {
      populateColumns() {
        if (this.municipalityDetails && this.municipalityDetails.columns) {
          this.columns = this.municipalityDetails.columns;
        }
      },
      populateRows() {
        if (this.municipalityDetails && this.municipalityDetails.rows) {
          this.rows = this.municipalityDetails.rows;
        }
      },
      getRowValue(row, column) {
      const rowData = row.find(r => r.column_id === column.id);
      return rowData ? rowData.value : '';
    },
    },
  };
  </script>
  
  <style scoped>
  /* Add your custom table styles here */
  .table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .table th,
  .table td {
    padding: 8px;
    border: 1px solid #ccc;
  }
  </style>
  