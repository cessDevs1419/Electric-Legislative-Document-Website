<script setup>
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import SectionHeaderComponent from '@/components/SectionHeaderComponent.vue';
    import SidebarListComponent from '@/components/SidebarListComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';
    import MunicipalAdditionalInfoTemplateComponent from '@/components/MunicipalAdditionalInfoTemplateComponent.vue';
    import MunicipalitiesApiService from '@/services/MunicipalitiesApiService';
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
},
};
</script>

<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainer v-if="municipalityDetails" :key="municipalityDetails.id">
        <div class="row g-3 my-3">
            <div class="col-lg-7">
                
                <SectionHeaderComponent class="mt-5" type="outside">
                    <template #firstWord>MUNICIPALITY OF</template>
                    <template #secondWord>{{ municipalityDetails.name }}</template>
                </SectionHeaderComponent>

                <div class="municipal-info pt-5">
                    <h5 class="pb-2 fw-bold">Brief History</h5>
                    <!-- <p>
                        Quezon, officially the <b>Province of Quezon,</b> is a province in the Philippines located in the Calabarzon region or Luzon. <b>Kaliraya/Kalilayan</b> was the first known name of the province upon its creation in 1591.
                    </p>
                    <p>
                        Around the middle of the 18th century, it was changed to <b>Tayabas</b>. In recognition of the second president of the Philippines, <b>Manuel L. Quezon</b>, the name of Tayabas Province is changed to Quezon.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Congue mauris aenean mattis mauris. Massa faucibus justo <b>amet tempor scelerisque</b> imperdiet rutrum vitae amet.
                    </p> -->
                    <div class="ck-content" v-html="municipalityDetails.history"></div>
                    <div class="ck-content" v-html="municipalityDetails.information"></div>
                </div>

            <!-- <MunicipalAdditionalInfoTemplateComponent
                    :sectionType="'officials'"
            >
                    <template #section-header>Municipal Officials</template>
            </MunicipalAdditionalInfoTemplateComponent> -->

            </div>
            
            <div class="col-lg-5">
                <SidebarListComponent
                    :listType="'municipalityList'"
                >
                    <template #heading>Municipalities of Quezon Province</template>
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