<script setup >
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import SectionHeaderComponent from '@/components/SectionHeaderComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';
    import OrderofBusinessApiService from '@/services/OrderofBusinessApiService';
    import SidebarListComponent from '@/components/SidebarListComponent.vue';
    import PaginationListComponent from '@/components/PaginationListComponent.vue';
</script>
<script >
    export default {
    data() {
        return {
            orderDetails: {},
            category: []
        };
    },
    watch: {
        '$route.params.uuid': function(newUUID) {
            this.fetchData(newUUID);
        },
    },

    created() {
        const uuid = this.$route.params.uuid;
        this.fetchData(uuid);
    },
    
    methods: {
        async fetchData(uuid) {
            try {
                const data = await OrderofBusinessApiService.fetchOrderOfBusiness();
                
                const foundOrderData = data.find(order => order.uuid === uuid);
                
                if (foundOrderData) {
                    this.orderDetails  = { ...foundOrderData };
                    this.extractCategoryNames(); // Call extractCategoryNames after setting orderDetails
                } else {
                    // Handle case when order data is not found
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        extractCategoryNames() {
      this.category = this.orderDetails.categories.map(category => {
        return {
          category_name: category.category_name,
          category_id: category.category_id
        };
      });
      console.log("CATEGORIES ", this.category);
    },
    },
};

</script>
<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainer class="mb-5 px-3 px-lg-0">
        <div class="row">
            <div class="title mb-5 mt-lg-0 col-lg-7">
            <!-- <SectionHeaderComponent  type="inside">
                <template #firstWord>Legislative</template>
                <template #secondWord>Documents</template>
            </SectionHeaderComponent> -->
            <div class="order-header">
                <p>{{ orderDetails.title }}</p>
            </div>
            <div class="details d-flex align-items-center mb-3">
                <p class="m-0 grey-font" >{{ orderDetails.published_date2 }}<slot name="date" ></slot>
                </p>
                <div class="vertical-border-line mx-4"></div>
                <div v-for="(cat, index) in category" :key="index">
                    <router-link title="category" v-if="index > 1" class="m-0 tertiary-font cursor-pointer" :to="'/order-of-business/category/'+ cat.category_id">
                    Etc
                </router-link> 
                <router-link title="category"  v-else class="m-0 tertiary-font curor-pointer" :to="'/order-of-business/category/'+ cat.category_id">
                    {{ cat.category_name}},
                </router-link>&nbsp
                </div>
            </div>  
            <p class="ck-editor" v-html="orderDetails.description"></p>
        </div>
        <div class="col-lg-5">
            <SidebarListComponent
                :listType="'orderList'"
            >
                <template #heading>Recent Order of Business</template>
            </SidebarListComponent>
        </div>
        </div>

    </TemplateContainer>

   
</template>

<style scoped>
    .order-header p {
        font-size: 36px;
        font-weight: bold;
    }

    .vertical-border-line{
        width: 1px;
        height: 20px;
        border: 1px solid gray;
    }

    .router-link-active{
        background-color: var(--secondary-color) !important;
        font-weight: 700;
    }
</style>