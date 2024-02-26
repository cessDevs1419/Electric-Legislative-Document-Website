<script>
  export default {
    props: {
      src: {
        type: String,
        required: true
      }
    }
  }
</script>

<template>
  <!-- Both working just not for assets folder -->
  <!-- <iframe :src="src" type="application/pdf" width="100%"  height="100%" ></iframe> -->

  <object :data="src" type="application/pdf" width="100%"  height="100%"></object>
</template>

<style scoped>

</style>
