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
                orderDetails: []
            };
        },

        created() {
            const uuid = this.$route.params.uuid;
            this.fetchData(uuid);
        },
        methods: {
            async fetchData(uuid) {
                try {
                    const data = await OrderofBusinessApiService.fetchOrderOfBusiness();
                    this.orderDetails = [];

                    data.forEach(item => {
                        const hasMatchingCategory = item.categories.some(category => category.category_id === Number(uuid));
                        console.log(item, hasMatchingCategory)

                        if (hasMatchingCategory) {
                            this.orderDetails.push(item);
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
                <SectionHeaderComponent type="outside" class="mb-5" >
                    <template #firstWord >Order of</template>
                    <template #secondWord >Business</template>
                </SectionHeaderComponent>
                <PaginationListComponentVue 
                    :items="orderDetails" 
                    :itemsPerPage="4"
                    :listType="'orderList'"
                    :title="''"
                >

                </PaginationListComponentVue>
            </div>
            <div class="col-lg-5 px-0">
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