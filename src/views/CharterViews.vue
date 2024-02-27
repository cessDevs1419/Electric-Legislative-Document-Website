<script setup>
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
import PDFReviewerComponent from '@/components/PDFReviewerComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';
</script>

<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainer>
        <div class="row">
            <div class="col-lg-7">
                <PDFReviewerComponent class="pdf-reviewer mb-5"
                    src="https://ws-platform.s3.ap-southeast-1.amazonaws.com/328/file-example_PDF_500_kB.pdf" 
                ></PDFReviewerComponent>
            </div>
            <div class="col-lg-5">

            </div>
        </div>
    </TemplateContainer>
</template>

<style scoped>
    .spacer{
        padding-top: 15rem;
    }

    .pdf-reviewer{
        height: 66rem;
    }
</style>