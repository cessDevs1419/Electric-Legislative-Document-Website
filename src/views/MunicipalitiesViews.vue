<script setup>
     import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
     import TemplateContainer from '@/components/TemplateContainer.vue';
    import SidebarListComponent from '@/components/SidebarListComponent.vue';
    import SectionHeaderComponent from '@/components/SectionHeaderComponent.vue';
    import MunicipalitiesApiService from '@/services/MunicipalitiesApiService';
</script>

<script>
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


<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainer>
        <div class="row g-3 ">
            <div class="col-lg-7">
                <SectionHeaderComponent class="" type="inside">
                    <template #firstWord >Municipalities</template>
                </SectionHeaderComponent>
                <div class="qp-info pt-4">
                    <p>
                        Quezon, officially the <b>Province of Quezon,</b> is a province in the Philippines located in the Calabarzon region or Luzon. <b>Kaliraya/Kalilayan</b> was the first known name of the province upon its creation in 1591.
                    </p>
                    <p>
                        Around the middle of the 18th century, it was changed to <b>Tayabas</b>. In recognition of the second president of the Philippines, <b>Manuel L. Quezon</b>, the name of Tayabas Province is changed to Quezon.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Congue mauris aenean mattis mauris. Massa faucibus justo <b>amet tempor scelerisque</b> imperdiet rutrum vitae amet.
                    </p>
                    <p>
                        General Santos City is politically subdivided into 9 Municipalities.
                    </p>
                </div>
                <div class="municipality-table py-4 mt-5 text-center tertiary-font">
                    <div class="row w-100 m-auto">
                        <ul class="list-unstyled px-2">
                            <li class="py-3" v-for="(municipality, index) in municipalities" :key="index">
                                <router-link class="tertiary-font fw-bold m-0" :to="'/municipalities/view-municipality/' + municipality.uuid" :exact="true">{{ municipality.name }}</router-link>
                            </li>
                        </ul>
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
</template>

<style scoped>
.spacer {
    padding-top: 15rem;
}

.municipality-table a,.table-item{
    font-weight: 600;
}

.municipality-table a:hover{
    color: var(--secondary-color);
}

.municipality-table {
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
}
</style>