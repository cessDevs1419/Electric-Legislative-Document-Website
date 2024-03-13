<script>
    import TitleContainerComponent from './TitleContainerComponent.vue';
    import PaginationNavComponentVue from './PaginationNavComponent.vue';
    import OrderListTemplateComponent from './OrderListTemplateComponent.vue';
    import NewsListTemplateComponent from './NewsListTemplateComponent.vue';

    export default {
        components: {
            TitleContainerComponent,
            PaginationNavComponentVue,
            OrderListTemplateComponent,
            NewsListTemplateComponent
        },
        props: {
            title: {
                type: String,
                required: true
            },
            items: {
                type: Array,
                required: true
            },
            itemsPerPage: {
                type: Number,
                required: true
            },
            listType: {
                type: String,
                required: true
            },
            searchQuery: {
                type: String,
            }
        },
        data() {
            return {
                currentPage: 1
            };
        },
        computed: {
            paginatedItems() {
                const startIndex = (this.currentPage - 1) * this.itemsPerPage;
                const endIndex = startIndex + this.itemsPerPage;
                let filteredItems = this.items;

                // Filter items if searchQuery has a value
                if (typeof this.searchQuery === 'string') {
                    const query = this.searchQuery.toLowerCase();
                    filteredItems = this.items.filter(item =>
                        item.title.toLowerCase().includes(query)
                    );
                }

                return filteredItems.slice(startIndex, endIndex);
            }
        },
        methods: {
            handlePageChange(page) {
                this.currentPage = page;
            }
        },
        mounted() {

        },
    };
</script>



<template>
    <TitleContainerComponent v-if="title">
        <template #heading>
            {{ title }}
        </template>
    </TitleContainerComponent>
    <ul class="list-unstyled">
        <li class="text-decoration-none mt-5" v-for="(item, index) in paginatedItems" :key="index">
            <OrderListTemplateComponent v-if="this.listType === 'orderList'" :id="item.uuid" :categories="item.categories" :description="item.description">
                <template #title>{{item.title}}</template>
                <template #date>{{item.published_date2}}</template>
                <template #description>{{item.description_preview}}</template>
            </OrderListTemplateComponent>
            <NewsListTemplateComponent v-if="this.listType === 'newsList'" :id="item.uuid" :link="item.link" :imgLink="item.imgLink" :description="item.description">
                <template #title>{{item.title}}</template>
                <template #date>{{item.published_date2}}</template>
            </NewsListTemplateComponent>
        </li>
    </ul>
    <div class="d-flex justify-content-end">
        <PaginationNavComponentVue :total-items="items.length" :items-per-page="itemsPerPage" :current-page="currentPage" @page-changed="handlePageChange" />
    </div>
</template>

