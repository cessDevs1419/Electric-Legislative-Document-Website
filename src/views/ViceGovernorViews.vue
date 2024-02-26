<script setup>
    import CardsComponent from '@/components/CardsComponent.vue';
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import SectionHeaderComponent from '@/components/SectionHeaderComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';
</script>

<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainer>
        <SectionHeaderComponent>
            <template #fistWord >Vice Governor's</template>
            <template #secondWord >Wall</template>
        </SectionHeaderComponent>
        <div class="row mb-5">
            <div class="col-3 m-auto mb-3">
                <CardsComponent
                    images="../src/assets/images/sampleIcon.png"
                    name="Jose Marie Chan"
                    status="Elected"
                    description="1st Quezon Province Elected"
                    year="1901-1920"
                >

                </CardsComponent>
            </div>
            <div class="col-3 m-auto mb-3">
                <CardsComponent
                    images="../src/assets/images/sampleIcon.png"
                    name="Jose Marie Chan"
                    status="Elected"
                    description="1st Quezon Province Elected"
                    year="1901-1920"
                >

                </CardsComponent>
            </div>
            <div class="col-3 m-auto mb-3">
                <CardsComponent
                    images="../src/assets/images/sampleIcon.png"
                    name="Jose Marie Chan"
                    status="Elected"
                    description="1st Quezon Province Elected"
                    year="1901-1920"
                >

                </CardsComponent>
            </div>
            <div class="col-3 m-auto mb-3">
                <CardsComponent
                    images="../src/assets/images/sampleIcon.png"
                    name="Jose Marie Chan"
                    status="Elected"
                    description="1st Quezon Province Elected"
                    year="1901-1920"
                >

                </CardsComponent>
            </div>
            <div class="col-3 m-auto mb-3">
                <CardsComponent
                    images="../src/assets/images/sampleIcon.png"
                    name="Jose Marie Chan"
                    status="Elected"
                    description="1st Quezon Province Elected"
                    year="1901-1920"
                >

                </CardsComponent>
            </div>
            <div class="col-3 m-auto mb-3">
                <CardsComponent
                    images="../src/assets/images/sampleIcon.png"
                    name="Jose Marie Chan"
                    status="Elected"
                    description="1st Quezon Province Elected"
                    year="1901-1920"
                >

                </CardsComponent>
            </div>
            <div class="col-3 m-auto mb-3">
                <CardsComponent
                    images="../src/assets/images/sampleIcon.png"
                    name="Jose Marie Chan"
                    status="Elected"
                    description="1st Quezon Province Elected"
                    year="1901-1920"
                >

                </CardsComponent>
            </div>
        </div>
    </TemplateContainer>
</template>
<style scoped>
    .spacer{
        padding-top: 15rem;
    }
</style>