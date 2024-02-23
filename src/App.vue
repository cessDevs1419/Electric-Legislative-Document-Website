<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavbarComponent from './components/NavbarComponent.vue';
import PageHeaderComponent from './components/PageHeaderComponent.vue';
import FooterComponent from './components/footer/FooterComponent.vue'

</script>


<template>
  <PageHeaderComponent v-if="isHomeRoute" ></PageHeaderComponent>
  <NavbarComponent v-if="isHomeRoute" ></NavbarComponent>

  <RouterView />
  <FooterComponent/>
</template>

<script>
export default {
  setup() {
    const route = useRoute();

    const isHomeRoute = route.path === '/';
    
    return {
      isHomeRoute
    };
  }
}
</script>

<style scoped>

</style>
