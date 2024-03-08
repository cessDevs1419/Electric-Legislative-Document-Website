<script setup>
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';
    import ESubmissionFormComponent from "@/components/ESubmissionFormComponent.vue"
</script>
<template>

    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainer class="py-5 mt-5 mt-lg-0">
        <ESubmissionFormComponent>

        </ESubmissionFormComponent>
    </TemplateContainer>
</template>