<script setup>
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';
</script>

<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainer class="py-5 mt-5 mt-lg-0">
        <!-- Search bar  -->
        <!-- 
            <div class=" w-100 text-center mb-5">
            <div class="title mb-5 ">
                <img class="company-logo primary-bg rounded-circle  border-0 mx-auto mb-2" src="../assets/images/circle.png" alt="" srcset="">
                <h1 class="tertiary-font fw-bold">
                    THE SANGGUNIANG PANLUNGSOD OF QUEZON
                </h1>
                <h3 class="tertiary-font">
                    Search for on process Resolution and Ordinance
                </h3>
            </div>
            <div class="input-group mb-3 mx-auto">
                <input type="text" class="form-control p-2 px-3" placeholder="Search Tracking Number Here . . . " >
                <span class="input-group-text linear-primary-bg px-3" >
                    <i class="bi bi-search p-2 text-white fs-3"></i>
                </span>
            </div>
        </div> -->

        <!-- Table  -->
    </TemplateContainer>
</template>

<style scoped>
    .input-group{
        max-width: 1000px;
    }
</style>