<script setup>
     import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
     import TemplateContainer from '@/components/TemplateContainer.vue';
     import SidebarListComponent from '@/components/SidebarListComponent.vue';
     import SectionHeaderComponent from '@/components/SectionHeaderComponent.vue';
</script>

<script>
    export default {
        props: {
            items: {
            type: Array,
            required: true
            },
            listType: {
            type: String,
            required: true
            }
        },
    mounted() {
        // Log the items prop when the component is mounted
    }
    }
</script>


<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainer>
        <div class="row g-3 my-3">
            <div class="col-lg-7">
                <SectionHeaderComponent>
                    <template #fistWord>MUNICIPALITIES</template>
                </SectionHeaderComponent>
                <div class="qp-info pt-4">
                    <p>
                        Quezon, officially the <b>Province of Quezon,</b> is a province in the Philippines located in the Calabarzon region or Luzon. <b>Kaliraya/Kalilayan</b> was the first known name of the province upon its creation in 1591.
                    </p>
                    <p>
                        Around the middle of the 18th century, it was changed to <b>Tayabas</b>. In recognition of the second president of the Philippines, <b>Manuel L. Quezon</b>, the name of Tayabas Province is changed to Quezon.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Congue mauris aenean mattis mauris. Massa faucibus justo <b>amet tempor scelerisque</b> imperdiet rutrum vitae amet.
                    </p>
                    <p>
                        General Santos City is politically subdivided into 9 Municipalities.
                    </p>
                </div>
                <div class="municipality-table py-4 mt-5 text-center tertiary-font">
                    <div class="row">
                        <div class="col-4 p-2">
                            <a class="tertiary-font" href="">Agdangan</a>
                        </div>
                        <div class="col-4 py-2">
                            <a class="tertiary-font" href="">Burdeos</a>
                        </div>
                        <div class="col-4 py-2">
                            <a class="tertiary-font" href="">Calauag</a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 py-2">
                            <a class="tertiary-font" href="">Dolores</a>
                        </div>
                        <div class="col-4 py-2">
                            <a class="tertiary-font" href="">General Luna</a>
                        </div>
                        <div class="col-4 py-2">
                            <a class="tertiary-font" href="">Guinayangan</a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 py-2">
                            <a class="tertiary-font" href="">Jomalig</a>
                        </div>
                        <div class="col-4 py-2">
                            <a class="tertiary-font" href="">Pagbilao</a>
                        </div>
                        <div class="col-4 py-2">
                            <a class="tertiary-font" href="">Plaridel</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-5">
                <SidebarListComponent
                    :listType="'municipalityList'"
                >
                    <template #heading>Municipalities of Quezon Province</template>
                </SidebarListComponent>
                <SidebarListComponent
                    :listType="'hotlineList'"
                >
                    <template #heading>Quezon Province Hotlines</template>
                </SidebarListComponent>

            </div>
        </div>
    </TemplateContainer>
</template>

<style scoped>
.spacer {
    padding-top: 15rem;
}

.municipality-table a{
    font-weight: 600;
}

.municipality-table a:hover{
    color: var(--secondary-color);
}

.municipality-table {
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
}
</style>