<template>
  <h4 class="mb-4 fw-bold d-flex align-items-center"><span class="vertical-line"></span>Information</h4>
  <div>
    <table class="table">
      <tbody>
        <tr v-for="(item, index) in municipalityDetails" :key="index">
            <td class="first-column"><b>{{ item.name }}</b></td>
            <td class="ck-content" v-html="renderValue(item.value)"></td>
            
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      values: []
    }
  },
  props: {
    municipalityDetails: Array,
  },
  methods: {
    renderValue(value) {
      if (value === null || value === undefined) {
        return 'N/A';
      }
      return value;
    },
  },
  computed: {
    tableData() {
      
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

.first-column {
  white-space: nowrap;
  width: 1%;
}

.table td {
  padding: 8px;
  border: 1px solid #ccc;
}

</style>