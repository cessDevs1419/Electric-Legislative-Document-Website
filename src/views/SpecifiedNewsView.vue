<script setup >
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import SectionHeaderComponent from '@/components/SectionHeaderComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';
    import NewsApiService from '@/services/NewsApiService';
    import SidebarListComponent from '@/components/SidebarListComponent.vue';
</script>
<script >
    export default {
    data() {
        return {
            newsDetails: {},
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
                const data = await NewsApiService.fetch();
                
                const foundOrderData = data.find(order => order.uuid === uuid);
                
                if (foundOrderData) {
                    this.newsDetails  = { ...foundOrderData };
                } 
                
                console.log(this.newsDetails)
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
        <div class="row">
            <div class="title mb-5 mt-lg-0 col-lg-7">
                <div class="order-header">
                    <p>{{ newsDetails.title }}</p>
                </div>
                <div id="carousel" class="carousel slide mb-3">
                    <div class="carousel-inner">
                        <div v-for="(items, index) in newsDetails.images" :key="index" class="carousel-item " :class="{'active':index === 0}">
                            <img :src="items" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="details d-flex align-items-center mb-3">
                    <p class="m-0 grey-font" >{{ newsDetails.author }}</p>
                    <div class="vertical-border-line mx-4"></div>
                    <p class="m-0 grey-font" >{{ newsDetails.published_date2 }}</p>
                </div>  
                <p class="ck-editor" v-html="newsDetails.description"></p>
            </div>
            <div class="col-lg-5">
                <SidebarListComponent
                    :listType="'newsList'"
                >
                    <template #heading>Latest News</template>
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