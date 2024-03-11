<template>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th v-for="(header, index) in tableHeaders" :key="index">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in tableData" :key="rowIndex">
            <td v-for="(cell, cellIndex) in row" :key="cellIndex">
              {{ cell }}
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
    computed: {
      tableHeaders() {
        if (!this.municipalityDetails || Object.keys(this.municipalityDetails).length === 0) {
          return [];
        }
  
        return Object.keys(this.municipalityDetails);
      },
      tableData() {
        if (!this.municipalityDetails || Object.keys(this.municipalityDetails).length === 0) {
          return [];
        }
  
        const maxLength = Math.max(...Object.values(this.municipalityDetails).map(arr => arr.length));
  
        // Fill missing values with empty strings
        const filledData = Object.keys(this.municipalityDetails).reduce((acc, key) => {
          const columnData = this.municipalityDetails[key];
          const paddedColumn = new Array(maxLength).fill('').map((_, index) => columnData[index] || '');
          return { ...acc, [key]: paddedColumn };
        }, {});
  
        // Convert object to array of arrays
        return Array.from({ length: maxLength }, (_, i) => {
          return this.tableHeaders.map(header => filledData[header][i]);
        });
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
  