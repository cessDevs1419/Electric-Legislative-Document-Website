<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavbarComponent from './components/NavbarComponent.vue';
import PageHeaderComponent from './components/PageHeaderComponent.vue';
import FooterComponent from './components/footer/FooterComponent.vue'

</script>


<template>


  <RouterView />
  <FooterComponent/>
</template>



<style scoped>

</style>
