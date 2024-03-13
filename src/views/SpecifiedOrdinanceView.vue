<script setup >
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import SectionHeaderComponent from '@/components/SectionHeaderComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';
    import OrderofBusinessApiService from '@/services/OrderofBusinessApiService';
</script>
<script >
    export default {
        data() {
            return {
                orderDetails: {},
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
                    
                    this.orderDetails = {};

                    const foundOrderData = data.find(order => order.uuid === uuid);
                    
                    if (foundOrderData) {
                        this.orderDetails  = { ...foundOrderData };
                    } else {
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            },
        },
    };
</script>
<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainer class="mb-5 px-3 px-lg-0">
        <div class="title mb-5 mt-lg-0">
            <!-- <SectionHeaderComponent  type="inside">
                <template #firstWord>Legislative</template>
                <template #secondWord>Documents</template>
            </SectionHeaderComponent> -->
            {{ orderDetails.title }}
        </div>

    </TemplateContainer>
</template>