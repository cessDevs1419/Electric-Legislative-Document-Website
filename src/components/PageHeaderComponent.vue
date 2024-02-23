<script setup>
    import MainIconComponent from './MainIconComponent.vue';
import TemplateContainer from './TemplateContainer.vue';



</script>
<template>
    <header class="py-2">
        <TemplateContainer>
            <div class="d-flex align-items-center flex-wrap border">  
                <MainIconComponent class="icon-container mx-2"></MainIconComponent>
                <div class="content mx-2 mx-xl-4">
                    <h1 class="m-0 tertiary-font fw-bold" >THE SANGGUNIANG PANLUNGSOD OF QUEZON</h1>
                    <h4 class="m-0 secondary-font fw-medium" >Regular Session Live Streaming at 9:00am every Tuesday</h4>
                </div>
            </div>
        </TemplateContainer>
    </header>
</template>
<style scoped>
    .icon-container{
        min-width: 4.37rem;
        max-width: 4.37rem;
        height: 4.37rem;
    }
</style>