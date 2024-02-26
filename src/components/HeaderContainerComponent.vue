<script setup>
    import { RouterView } from 'vue-router';
    import PageHeaderComponent from '@/components/PageHeaderComponent.vue';
    import NavbarComponent from '@/components/NavbarComponent.vue';
</script>
<template>
    <div class="position-fixed w-100 bg-white">
        <PageHeaderComponent></PageHeaderComponent>
        <NavbarComponent ></NavbarComponent>    
    </div>

  
    <RouterView />
</template>

<style scoped>
    div{
        min-height: auto;
        z-index: 99;
    }
</style>
