<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavbarComponent from './components/NavbarComponent.vue';
import PageHeaderComponent from './components/PageHeaderComponent.vue';
</script>

<template>
  <PageHeaderComponent></PageHeaderComponent>
  <NavbarComponent></NavbarComponent>

  <RouterView />
</template>

<style scoped>

</style>
