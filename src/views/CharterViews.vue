<script setup>
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import PDFReviewerComponent from '@/components/PDFReviewerComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';
    import SidebarListComponent from '@/components/SidebarListComponent.vue';
    import SectionHeaderComponent from '@/components/SectionHeaderComponent.vue';
</script>

<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainer >
        <div class="row w-100 m-auto mt-md-0">
            <div class="col-lg-7">
                <SectionHeaderComponent class="mt-5" type="inside">
                    <template #firstWord >Citizens Charter</template>
                    <template #secondWord >- 2022 Edition</template>
                </SectionHeaderComponent>
                <PDFReviewerComponent class="pdf-reviewer my-4"
                    src="https://ws-platform.s3.ap-southeast-1.amazonaws.com/328/file-example_PDF_500_kB.pdf" 
                ></PDFReviewerComponent>
            </div>
            <div class="col-lg-5">
                <SidebarListComponent
                    :listType="'membersList'">

                    <template #heading>The 20th Members Facebook Page</template>
                </SidebarListComponent>
                <SidebarListComponent
                    :listType="'hotlineList'">
                    
                    <template #heading>Quezon Province Hotlines</template>
                </SidebarListComponent>
            </div>
        </div>
    </TemplateContainer>
</template>

<style scoped>
    .pdf-reviewer{
        height: 66rem;
    }
</style>