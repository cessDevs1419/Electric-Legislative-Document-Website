<script setup>
    import CardsComponent from '@/components/CardsComponent.vue';
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import SectionHeaderComponent from '@/components/SectionHeaderComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';
</script>

<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainer class="mt-5 mb-5">
        <SectionHeaderComponent class="mt-5" type="inside">
            <template #firstWord >Board Member's</template>
            <template #secondWord >Wall</template>
        </SectionHeaderComponent>
        <div class="row mb-5 mt-5">
            <div class="col-xl-3 col-lg-4 col-md-6 m-auto d-flex justify-content-center mb-3">
                <CardsComponent
                    images="../src/assets/images/sampleIcon.png"
                    name="Jose Marie Chan"
                    status="Elected"
                    description="1st Quezon Province Elected"
                    year="1901-1920"
                >

                </CardsComponent>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 m-auto d-flex justify-content-center mb-3">
                <CardsComponent
                    images="../src/assets/images/sampleIcon.png"
                    name="Jose Marie Chan"
                    status="Elected"
                    description="1st Quezon Province Elected"
                    year="1901-1920"
                >

                </CardsComponent>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 m-auto d-flex justify-content-center mb-3">
                <CardsComponent
                    images="../src/assets/images/sampleIcon.png"
                    name="Jose Marie Chan"
                    status="Elected"
                    description="1st Quezon Province Elected"
                    year="1901-1920"
                >

                </CardsComponent>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 m-auto d-flex justify-content-center mb-3">
                <CardsComponent
                    images="../src/assets/images/sampleIcon.png"
                    name="Jose Marie Chan"
                    status="Elected"
                    description="1st Quezon Province Elected"
                    year="1901-1920"
                >

                </CardsComponent>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 m-auto d-flex justify-content-center mb-3">
                <CardsComponent
                    images="../src/assets/images/sampleIcon.png"
                    name="Jose Marie Chan"
                    status="Elected"
                    description="1st Quezon Province Elected"
                    year="1901-1920"
                >

                </CardsComponent>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 m-auto d-flex justify-content-center mb-3">
                <CardsComponent
                    images="../src/assets/images/sampleIcon.png"
                    name="Jose Marie Chan"
                    status="Elected"
                    description="1st Quezon Province Elected"
                    year="1901-1920"
                >

                </CardsComponent>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 m-auto d-flex justify-content-center mb-3">
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