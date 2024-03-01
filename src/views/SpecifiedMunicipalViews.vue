<script setup>
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import SectionHeaderComponent from '@/components/SectionHeaderComponent.vue';
    import SidebarListComponent from '@/components/SidebarListComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';
</script>

<script>
export default {
  data() {
    return {
      officials: [
        {
          id: 1,
          title: 'Mayor',
          name: 'Hon. Diana Abigail D. Aquino'
        },
        {
          id: 2,
          title: 'Vice Mayor',
          name: 'Hon. Doyle Joel M. Diestro'
        },
        {
          id: 3,
          title: 'Councilor',
          name: 'Hon. Amelie A. Penamante'
        },
        {
          id: 4,
          title: 'Councilor',
          name: 'Hon. Julie Ann O. Macaset'
        },
        {
          id: 5,
          title: 'Councilor',
          name: 'Hon. Ronald P. Isidro'
        },
        {
          id: 6,
          title: 'Councilor',
          name: 'Hon. Amanda Sharon Diestro-Domingo'
        },
        {
          id: 7,
          title: 'Councilor',
          name: 'Hon. Aileen Resplandor-Buan'
        },
        {
          id: 8,
          title: 'Councilor',
          name: 'Hon. Renmar A. Sollestre'
        }
        // You can add more officials here if needed
      ]
    };
  },
  computed: {
    mayor() {
      const mayorObj = this.officials.find(official => official.title === 'Mayor');
      return mayorObj ? mayorObj.name : '';
    },
    viceMayor() {
      const viceMayorObj = this.officials.find(official => official.title === 'Vice Mayor');
      return viceMayorObj ? viceMayorObj.name : '';
    },
    councilors() {
      return this.officials.filter(official => official.title === 'Councilor');
    }
  }
};
</script>

<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainer>
        <div class="row g-3 my-3">
        <div class="col-lg-7">
            <SectionHeaderComponent class="mt-5" type="outside">
                <template #firstWord>MUNICIPALITY OF</template>
                <template #secondWord>ADGANGAN</template>
            </SectionHeaderComponent>
            <div class="municipal-info pt-5">
                <h5 class="pb-2 fw-bold">Brief History</h5>
                <p>
                    Quezon, officially the <b>Province of Quezon,</b> is a province in the Philippines located in the Calabarzon region or Luzon. <b>Kaliraya/Kalilayan</b> was the first known name of the province upon its creation in 1591.
                </p>
                <p>
                    Around the middle of the 18th century, it was changed to <b>Tayabas</b>. In recognition of the second president of the Philippines, <b>Manuel L. Quezon</b>, the name of Tayabas Province is changed to Quezon.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Congue mauris aenean mattis mauris. Massa faucibus justo <b>amet tempor scelerisque</b> imperdiet rutrum vitae amet.
                </p>
            </div>
            <div class="officials pt-5">
                <h4 class="mb-4 d-flex align-items-center"><span class="vertical-line"></span>Municipality Officials</h4>
                <p><b>Mayor:</b> {{ mayor }}</p>
                <p><b>Vice Mayor:</b> {{ viceMayor }}</p>
                <p><b>Councilors:</b></p>
                <ul class="list-unstyled">
                <li class="councilors" v-for="official in councilors" :key="official.id">
                    <p>{{ official.name }}</p>
                </li>
                </ul>
            </div>
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