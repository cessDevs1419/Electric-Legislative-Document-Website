<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavbarComponent from './components/NavbarComponent.vue';
</script>

<template>
  <NavbarComponent></NavbarComponent>

  <RouterView />
</template>

<style scoped>

</style>
