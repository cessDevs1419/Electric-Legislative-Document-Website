<template>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th v-for="(column, index) in columns" :key="index">
              {{ column.name }}
            </th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="(row, rowIndex) in municipalityDetails.rows" :key="rowIndex">
          <td v-for="(column, columnIndex) in municipalityDetails.columns" :key="columnIndex">
            {{ getRowValue(row, column) }}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <p>TEST{{ this.rowValues }}</p>
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
        rowValues: []
      };
    },
    created() {
      this.populateColumns();
      this.populateRows();
      this.rowValueGetter();
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
      rowValueGetter() {
        if(this.columns.name === this.rows.column_name){
            this.rowValues = this.rows.value;
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
  