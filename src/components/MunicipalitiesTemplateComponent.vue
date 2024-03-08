<template>
    <div class="card-body tertiary-bg my-3 px-2 pb-5 position-relative">
      <ul class="list-unstyled">
        <li class="py-0 px-2" v-for="(municipality, index) in municipalities" :key="index">
          <router-link :to="'/view-municipality/' + municipality.uuid">{{ municipality.name }}</router-link>
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
    municipalities: [],
    municipalityDetails: null,
  };
},
created() {
  const uuid = this.$route.params.uuid;
  this.fetchData(uuid);
},
methods: {
  async fetchData(uuid) {
    try {
      // Fetch all municipalities
      const data = await MunicipalitiesApiService.fetch();
      
      // Assign the fetched data to 'municipalities' and keep the original list
      this.municipalities = data;
      
      // Find the municipality with the matching UUID
      const foundMunicipality = data.find(municipality => municipality.uuid === uuid);
      
      if (foundMunicipality) {
        this.municipalityDetails = foundMunicipality;
      } else {
        console.error('Municipality not found for UUID:', uuid);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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
  