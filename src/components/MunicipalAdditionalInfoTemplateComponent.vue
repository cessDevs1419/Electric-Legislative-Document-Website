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
      ],
    };
  },
  props: {
    sectionType: {
      type: String,
      required: true
    }
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
    <div v-if="sectionType === 'officials'" class="officials pt-5">
        <h4 class="mb-4 d-flex align-items-center"><span class="vertical-line"></span><slot name="section-header"></slot></h4>
        <p><b>Mayor:</b> {{ mayor }}</p>
        <p><b>Vice Mayor:</b> {{ viceMayor }}</p>
        <p><b>Councilors:</b></p>
        <ul class="list-unstyled">
        <li class="councilors" v-for="official in councilors" :key="official.id">
            <p>{{ official.name }}</p>
        </li>
        </ul>
    </div>
</template>