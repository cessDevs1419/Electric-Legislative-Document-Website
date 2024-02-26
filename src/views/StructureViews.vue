<script setup>
     import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import PDFReviewerComponent from '@/components/PDFReviewerComponent.vue';
import TemplateContainer from '@/components/TemplateContainer.vue';
</script>

<template>
    <HeaderContainerComponent ></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainer>
        <PDFReviewerComponent></PDFReviewerComponent>
    </TemplateContainer>
</template>


<style scoped >
    .spacer{
        padding-top: 15rem;
    }
</style>