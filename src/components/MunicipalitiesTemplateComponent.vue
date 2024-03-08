<template>
  <div class="card-body tertiary-bg my-3 px-2 pb-5 position-relative">
    <ul class="list-unstyled px-2">
      <li class="py-3 border grey-divider border-top-0 border-start-0 border-end-0" v-for="(municipality, index) in municipalities" :key="index">
        <router-link class="tertiary-font fw-bold m-0" :to="'/municipalities/view-municipality/' + municipality.uuid" :exact="true">{{ municipality.name }}</router-link>
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
    
    .card-body a{
      text-decoration: none;
    }
    
    .router-link-active{
      color: var(--secondary-color) !important;
      font-weight: 700;
    }

    .card-body a:hover {
      color: var(--secondary-color) !important;
      font-weight: 700;
    }
</style>