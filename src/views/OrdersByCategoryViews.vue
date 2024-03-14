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
                orderDetails: [],
                searchQuery: '',
                category_name: ''
            };
        },

        created() {
            this.fetchData(this.$route.params.uuid);
        },
        watch: {
            '$route.params.uuid': function(newUUID, oldUUID) {
                this.fetchData(newUUID);
            }
        },
        methods: {
            async fetchData(uuid) {
                try {
                    this.orderDetails = []; 

                    const data = await OrderofBusinessApiService.fetchOrderOfBusiness();

                    data.forEach(item => {
                        const hasMatchingCategory = item.categories.some(category => category.category_id === Number(uuid));
                        if (hasMatchingCategory) {
                            this.orderDetails.push(item);
                            const matchingCategory = item.categories.find(category => category.category_id === Number(uuid));
                            if (matchingCategory) {
                                this.category_name = matchingCategory.category_name;
                            }
                        }
                    });
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            },
        },
    }
</script>


<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainer>
        <div class="row g-5 w-100 m-auto mb-5">
            <div class="col-lg-7 px-md-5 ">
                <SectionHeaderComponent type="outside" class="mb-2" >
                    <template #firstWord >Order of</template>
                    <template #secondWord >Business</template>
                </SectionHeaderComponent>
                <h6 class="secondary-bg px-2 ms-1 fw-bold text-white mb-5">
                    Filtered Category: <span class="fw-medium">{{ category_name }}</span>
                </h6>
                <PaginationListComponentVue 
                    :searchQuery="searchQuery"
                    :items="orderDetails" 
                    :itemsPerPage="4"
                    :listType="'orderList'"
                    :title="''"
                >

                </PaginationListComponentVue>
            </div>
            <div class="col-lg-5 px-0">
                <div class="text-end mb-3">
                    <div class="input-group mb-2 mx-auto">
                        <input type="text" class="form-control p-1 px-3 rounded-0" v-model="searchQuery" placeholder="Search . . .  " >
                        <button @click="handleSearchQuery" class="input-group-text linear-primary-bg px-3 rounded-0" >
                            <i class="bi bi-search p-1 text-white fs-3"></i>
                        </button>
                    </div>
                    <!-- <router-link to="/order-of-business" class=" text-decoration-none text-white linear-primary-bg py-2 px-3 rounded-0" >
                        Clear
                    </router-link> -->
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
    h6{
        max-width: fit-content
    }
</style>