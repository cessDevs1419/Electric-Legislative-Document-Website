<script setup>
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import SectionHeaderComponent from '@/components/SectionHeaderComponent.vue';
    import SidebarListComponent from '@/components/SidebarListComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';
    import MunicipalitiesApiService from '@/services/MunicipalitiesApiService';
    import MunicipalityTableComponent from '@/components/MunicipalityTableComponent.vue';
    import MunicipalOfficialsTemplateComponentVue from '@/components/MunicipalOfficialsTemplateComponent.vue';
</script>

<script>
export default {
  data() {
    return {
      municipalityDetails: [],
      
    };
  },
  created() {
  const uuid = this.$route.params.uuid;
  this.fetchData(uuid);
},
watch: {
    '$route.params.uuid': function(newUUID) {
      this.fetchData(newUUID);
    },
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
        console.log('Municipality Details:', this.municipalityDetails);
        console.log('All Municipalities:', this.municipalities);
      } else {
        console.error('Municipality not found for UUID:', uuid);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
  upperCase(word) {
  const capitalized = word.toUpperCase();
  return capitalized;
}
},

};
</script>

<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainer v-if="municipalityDetails" :key="municipalityDetails.id">
        <div class="row g-3 my-3">
          <div class="col-lg-7">
            <SectionHeaderComponent class="" type="outside">
              <template #firstWord>Municipality of</template>
              <template #secondWord>{{  municipalityDetails.name }}</template>
            </SectionHeaderComponent>

            <div class="municipal-info pt-5">
              <h5 class="pb-2 fw-bold">Brief History</h5>
                  <div class="ck-content" v-html="municipalityDetails.history"></div>
                  
                  <!-- Check if municipalityDetails.information is an array before rendering to prevent duplication -->
                  <div class="ck-content py-2" v-if="Array.isArray(municipalityDetails.information) && municipalityDetails.information.length > 0">
                <MunicipalityTableComponent :municipalityDetails="municipalityDetails.information"></MunicipalityTableComponent>
              </div>

            
              <!-- Check if municipalityDetails.officials is an object before rendering to prevent duplication -->
              <div class="ck-content py-4">
                <MunicipalOfficialsTemplateComponentVue v-if="typeof municipalityDetails.officials === 'object'" :municipalityOfficials="municipalityDetails.officials"></MunicipalOfficialsTemplateComponentVue>
              </div>
            
            </div>
          </div>

                  
          <div class="col-lg-5">
            <SidebarListComponent
                :listType="'municipalityList'"
            >
                <template #heading>Municipalities of Quezon Province</template>
            </SidebarListComponent>
            <SidebarListComponent
                :listType="'hotlineList'"
            >
                <template #heading>Quezon Province Hotlines</template>
            </SidebarListComponent>
          </div>
        </div>
    </TemplateContainer>
    <div class="spacer"></div>
</template>

<style>
    .spacer {
        padding-top: 15rem;
    }
    
    .officials p {
        margin: 0.5rem 0;
    }

    .officials h4{
        font-weight: 600;
    }

    .vertical-line{
        display: inline-block;
        width: 17px;
        height: 40px;
        border-left: 17px solid var(--secondary-color); /* Adjust thickness and color as needed */
        margin-right: 10px; 
    }
</style>