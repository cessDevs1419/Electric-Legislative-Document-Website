<script setup>
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import SectionHeaderComponent from '@/components/SectionHeaderComponent.vue';
</script>

<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainerComponent class="mb-5 mt-5">
        <div class="d-flex justify-content-center mb-5 mt-5">
            <SectionHeaderComponent class="m-auto  mt-5 mb-5" type="inside">
                <template #firstWord >The 20th</template>
                <template #secondWord >Sangguniang Panlungsod Members</template>
            </SectionHeaderComponent>
        </div>
        
        <div class="d-flex flex-column align-item-center justify-content-center mt-5">
            <div class="card-container p-5 m-auto">
                <div class="card bg-white box-shadow d-flex flex-row overflow-visible">
                    <div class="card-header bg-transparent">
                        <img class="w-100 h-100" src="../assets/images/sampleIcon.png" alt="" sizes="">
                    </div>
                    <div class="card-body d-flex flex-column align-item-center justify-content-center text-center">
                        <h3 class=" fw-semibold tertiary-font">Jose Marie Chan</h3>
                        <p class="card-text">Vice Mayor & Presiding Officer</p>
                    </div>
                </div>
            </div>
            <div class="card-container p-5 m-auto">
                <div class="card bg-white box-shadow d-flex flex-row overflow-visible">
                    <div class="card-header bg-transparent">
                        <img class="w-100 h-100" src="../assets/images/sampleIcon.png" alt="" sizes="">
                    </div>
                    <div class="card-body d-flex flex-column align-item-center justify-content-center text-center">
                        <h3 class=" fw-semibold tertiary-font">Jose Marie Chan</h3>
                        <p class="card-text">Vice Mayor & Presiding Officer</p>
                    </div>
                </div>
            </div>
            <div class="card-container p-5 m-auto">
                <div class="card bg-white box-shadow d-flex flex-row overflow-visible">
                    <div class="card-header bg-transparent">
                        <img class="w-100 h-100" src="../assets/images/sampleIcon.png" alt="" sizes="">
                    </div>
                    <div class="card-body d-flex flex-column align-item-center justify-content-center text-center">
                        <h3 class=" fw-semibold tertiary-font">Jose Marie Chan</h3>
                        <p class="card-text">Vice Mayor & Presiding Officer</p>
                    </div>
                </div>
            </div>
        </div>
    </TemplateContainerComponent>
</template>

<style scoped>
    .spacer {
        padding-top: 15rem;
    }
    .card-container {
        max-width: 60rem;
        width: 100%;
    }

    .card-header{
        width: 24rem;
        height: 24rem;
        margin-top: -5rem;
    }
</style>