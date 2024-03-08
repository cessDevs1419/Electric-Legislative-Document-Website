<template>
    <div class="card-body tertiary-bg my-3 px-2 pb-5 position-relative">
      <ul class="list-unstyled">
        <li class="py-0 px-2" v-for="(id, index) in uuid" :key="index">
          <p class="pt-3 fw-semibold tertiary-font fs-5">
            {{ id.uuid }}
          </p>
          <hr class="grey-divider mt-0">
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import MunicipalitiesApiService from '@/services/MunicipalitiesApiService';
  
  export default {
    data() {
      return {
        uuid: [], // Initialize uuid as an empty array
      };
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        MunicipalitiesApiService.fetch()
          .then(data => {
            // Assuming data is an array of objects with `uuid` property
            this.uuid = data;
          })
          .catch(error => {
            console.error('Error fetching uuid:', error);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .card-body p:hover {
    color: var(--secondary-color);
    cursor: pointer;
  }
  </style>
  