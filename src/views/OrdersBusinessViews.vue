<script setup>
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';
    import SidebarListComponent from '@/components/SidebarListComponent.vue';
    import SectionHeaderComponent from '@/components/SectionHeaderComponent.vue';
    
</script>

<script>
    import PaginationListComponentVue from '@/components/PaginationListComponent.vue';
    import OrderofBusinessApiService from '@/services/OrderofBusinessApiService';

    export default {
        components: {
            PaginationListComponentVue
        },
        data() {
            return {
                items: [
                ],
                searchQuery: ''
            };
        },
        methods: {
            fetchData(){
                OrderofBusinessApiService.fetchOrderOfBusiness().then(item => {
                    this.items = []
                    this.items.push(...item);
                })
                .catch(error => {
                    console.error('', error);
                });
                }, 
            },
        created() {
            this.fetchData(); 
            }
    }
</script>


<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainer>
        <div class="row g-3 px-2 px-md-0">
            <div class="col-lg-7">
                <SectionHeaderComponent type="outside" class="mb-5" >
                    <template #firstWord >Order of</template>
                    <template #secondWord >Business</template>
                </SectionHeaderComponent>

                <PaginationListComponentVue
                    :searchQuery="searchQuery"
                    :items="items" 
                    :itemsPerPage="4"
                    :listType="'orderList'"
                    :title="''"
                >

                </PaginationListComponentVue>
            </div>
            <div class="col-lg-5">
                <div class="d-flex align-items-center">
                    <div class="input-group mb-3 mx-auto">
                        <input type="text" class="form-control p-1 px-3 rounded-0" v-model="searchQuery" placeholder="Search . . .  " >
                        <button @click="handleSearchQuery" class="input-group-text linear-primary-bg px-3 rounded-0" >
                            <i class="bi bi-search p-1 text-white fs-3"></i>
                        </button>
                    </div>
                </div>
                <SidebarListComponent
                    :listType="'membersList'"
                >
                    <template #heading>The 20th Sangguniang Panlungsod Members</template>
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
</style>