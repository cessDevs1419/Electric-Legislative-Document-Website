<script setup >
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import SectionHeaderComponent from '@/components/SectionHeaderComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';
</script>
<script >
    
</script>
<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainer class="mb-5 px-3 px-lg-0">
        <div class="title mb-5 mt-lg-0">
            <SectionHeaderComponent  type="outside">
                <template #firstWord>Breaking News -</template>
                <template #secondWord>Title</template>
            </SectionHeaderComponent>
        </div>

    </TemplateContainer>
</template>