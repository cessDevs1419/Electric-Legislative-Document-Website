<script setup>
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import SectionHeaderComponent from '@/components/SectionHeaderComponent.vue';
    import SidebarListComponent from '@/components/SidebarListComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';
    import MunicipalitiesApiService from '@/services/MunicipalitiesApiService';
    import MunicipalityInformationTableComponent from '@/components/MunicipalityInformationTableComponent.vue';
    import MunicipalOfficialsTemplateComponentVue from '@/components/MunicipalOfficialsTemplateComponent.vue';
    import MunicipalityActivitiesTableComponentVue from '@/components/MunicipalityActivitiesTableComponent.vue';
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
        
        this.municipalities = data;
        
        // Finds the municipality with the matching UUID
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
  },
  computed: {
      isOfficialsObject() {
        return typeof this.municipalityDetails.officials === 'object';
      },
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

              <!-- Checks if the municipal history is empty, if it is then it will not render. -->
              <div v-if="municipalityDetails && municipalityDetails.history" class="pb-2">
                <h5 class="fw-bold">Brief History</h5>
                <div class="ck-content" v-html="municipalityDetails.history"></div>
              </div>

              <!-- Checks if the municipal officials is empty, if it is then it will not render. -->
              <div v-if=" municipalityDetails && municipalityDetails.officials" class="pb-2">
                <div class="ck-content py-4">
                  <MunicipalOfficialsTemplateComponentVue v-if="isOfficialsObject" :municipalityOfficials="municipalityDetails.officials"></MunicipalOfficialsTemplateComponentVue>
                </div>
              </div>

              <!-- Checks if the municipal officials is empty, if it is then it will not render -->
              <div v-if=" municipalityDetails && municipalityDetails.information" class="pb-2">
                <div class="ck-content py-2" v-if="Array.isArray(municipalityDetails.information) && municipalityDetails.information.length > 0">
                 <MunicipalityInformationTableComponent :municipalityDetails="municipalityDetails.information"></MunicipalityInformationTableComponent>
                </div>
              </div>
                  
              <!-- Checks if the municipal activity's row is empty, if it is then it will not render  -->
              <div v-if="municipalityDetails && municipalityDetails.activities && municipalityDetails.activities.rows && municipalityDetails.activities.rows.length > 0" class="pb-2">
                <div class="ck-content py-4">
                  <MunicipalityActivitiesTableComponentVue :municipalityDetails="municipalityDetails.activities"></MunicipalityActivitiesTableComponentVue>
                </div>
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