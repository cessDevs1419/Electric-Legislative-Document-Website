<script>
export default {
  props: {
    municipalityOfficials: Object,
  },
  // Debugger
  // created() {
  //     console.log('Test' +this.municipalityOfficials)
  // },
};
</script>

<template>
  <div class="municipals-container">
    <h4 class="mb-4 fw-bold d-flex align-items-center">
      <span class="vertical-line"></span>Officials
    </h4>
    <p>
      <b>{{ municipalityOfficials.mayor.type_name }}</b>
      {{ municipalityOfficials.mayor.name }}
    </p>
    <p>
      <b>{{ municipalityOfficials.vice_mayor.type_name }}</b>
      {{ municipalityOfficials.vice_mayor.name }}
    </p>
    <p><b>Councilors :</b></p>
    <ul class="list-unstyled">
      <li
        v-for="councilor in municipalityOfficials.councilors"
        :key="councilor.id"
      >
        <p>{{ councilor.name }}</p>
      </li>
    </ul>
  </div>
</template>

<style>
.municipals-container li {
  list-style-type: none;
}
</style>
