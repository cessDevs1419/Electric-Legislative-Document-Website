<script setup>
     import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
     import TemplateContainer from '@/components/TemplateContainer.vue';
    import SidebarListComponent from '@/components/SidebarListComponent.vue';
    import SectionHeaderComponent from '@/components/SectionHeaderComponent.vue';
</script>

<script>
    export default {
        data(){
            return{
                municipalities: [
                    {
                        id: 1,
                        name: 'Agdangan'
                    },
                    {
                        id: 2,
                        name: 'Burdeos'
                    },
                    {
                        id: 3,
                        name: 'Caluag'
                    },
                    {
                        id: 4,
                        name: 'Dolores'
                    },
                    {
                        id: 5,
                        name: 'General Luna'
                    },
                    {
                        id: 6,
                        name: 'Guinayangan'
                    },
                    {
                        id: 7,
                        name: 'Jomalig'
                    },
                    {
                        id: 8,
                        name: 'Pagbilao'
                    },
                    {
                        id: 9,
                        name: 'Plaridel'
                    },
                ]
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
        <div class="row g-3 ">
            <div class="col-lg-7">
                <SectionHeaderComponent class="" type="inside">
                    <template #firstWord >Municipalities</template>
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
                    <div class="row w-100 m-auto">
                        <div class="col-lg-4 mb-3" v-for="(items, index) in municipalities" :key="index">
                            <router-link  class="table-item my-2" to="/view-municipality">{{items.name}}</router-link>
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

.municipality-table a,.table-item{
    font-weight: 600;
}

.municipality-table a:hover{
    color: var(--secondary-color);
}

.municipality-table {
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
}
</style>