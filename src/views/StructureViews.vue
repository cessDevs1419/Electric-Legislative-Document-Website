<script setup>
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import PDFReviewerComponent from '@/components/PDFReviewerComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';
    import SectionHeaderComponent from '@/components/SectionHeaderComponent.vue';
</script>

<template>
    <HeaderContainerComponent ></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainer>
        <SectionHeaderComponent class="mt-5 mb-5 mt-lg-0" type="inside">
                <template #firstWord>Organizational</template>
                <template #secondWord>Structure</template>
        </SectionHeaderComponent>
        <PDFReviewerComponent class="pdf-reviewer mb-5 mt-5"
            src="https://ws-platform.s3.ap-southeast-1.amazonaws.com/328/file-example_PDF_500_kB.pdf" 
        ></PDFReviewerComponent>
    </TemplateContainer>
</template>


<style scoped >
    .spacer{
        padding-top: 15rem;
    }

    .pdf-reviewer{
        height: 40rem;
    }
</style>