<script setup>
    import CardsComponent from '@/components/CardsComponent.vue';
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import SectionHeaderComponent from '@/components/SectionHeaderComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';
    import sampleIcon from '../assets/images/sampleIcon.png'
</script>

<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainer class=" mb-5">
        <SectionHeaderComponent type="inside">
            <template #firstWord >Vice Governor's</template>
            <template #secondWord >Wall</template>
        </SectionHeaderComponent>
        <div class="row w-100 m-auto mb-5 mt-5">
            <div class="col-xl-3 col-lg-4 col-md-6 m-auto d-flex justify-content-center mb-3">
                <CardsComponent
                    :images="sampleIcon"
                    name="Jose Marie Chan"
                    status="Elected"
                    description="1st Quezon Province Elected"
                    year="1901-1920"
                >

                </CardsComponent>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 m-auto d-flex justify-content-center mb-3">
                <CardsComponent
                    :images="sampleIcon"
                    name="Jose Marie Chan"
                    status="Elected"
                    description="1st Quezon Province Elected"
                    year="1901-1920"
                >

                </CardsComponent>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 m-auto d-flex justify-content-center mb-3">
                <CardsComponent
                    :images="sampleIcon"
                    name="Jose Marie Chan"
                    status="Elected"
                    description="1st Quezon Province Elected"
                    year="1901-1920"
                >

                </CardsComponent>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 m-auto d-flex justify-content-center mb-3">
                <CardsComponent
                    :images="sampleIcon"
                    name="Jose Marie Chan"
                    status="Elected"
                    description="1st Quezon Province Elected"
                    year="1901-1920"
                >

                </CardsComponent>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 m-auto d-flex justify-content-center mb-3">
                <CardsComponent
                    :images="sampleIcon"
                    name="Jose Marie Chan"
                    status="Elected"
                    description="1st Quezon Province Elected"
                    year="1901-1920"
                >

                </CardsComponent>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 m-auto d-flex justify-content-center mb-3">
                <CardsComponent
                    :images="sampleIcon"
                    name="Jose Marie Chan"
                    status="Elected"
                    description="1st Quezon Province Elected"
                    year="1901-1920"
                >

                </CardsComponent>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 m-auto d-flex justify-content-center mb-3">
                <CardsComponent
                    :images="sampleIcon"
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