<template>
    <div>
      <table class="table">
        <tbody>
          <tr v-for="(item, index) in tableData" :key="index">
            <td><b>{{ item.title }}</b></td>
            <td v-html="item.value"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      municipalityDetails: Array,
    },
    created() {
        
    },
    computed: {
        tableData() {
      if (!this.municipalityDetails || this.municipalityDetails.length === 0) {
        return [];
      }

      const tableData = [];

      this.municipalityDetails.forEach(municipality => {
        if (municipality.name && municipality.value) {
          tableData.push({ title: municipality.name, value: municipality.value });
        }
      });

      return tableData;
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
  
  .table td {
    padding: 8px;
    border: 1px solid #ccc;
  }
  </style>
  