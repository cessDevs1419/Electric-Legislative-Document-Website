<script>
    import TitleContainerComponent from './TitleContainerComponent.vue';
    import PaginationNavComponentVue from './PaginationNavComponent.vue';

    export default {
        components: {
            TitleContainerComponent,
            PaginationNavComponentVue
        },
        props: {
            items: {
            type: Array,
            required: true
            },
            itemsPerPage: {
            type: Number,
            required: true
            },
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
            return this.items.slice(startIndex, endIndex);
            }
        },
        methods: {
            handlePageChange(page) {
            this.currentPage = page;
            }
        }
        };
</script>

<template>
    <TitleContainerComponent>
        <template #heading>
            Recent Order Of Business
        </template>
    </TitleContainerComponent>
    <ul class="list-unstyled">
        <li class="text-decoration-none mt-5" v-for="(item, index) in paginatedItems" :key="index">
            <h4 class="fw-semibold">
                {{ item.title }}
            </h4>
            <p>
                {{ item.description }}
            </p>
            <div class="details d-flex align-items-center mb-5">
                <p class="m-0 grey-font" >{{ item.date }}</p>
                <div class="vertical-border-line mx-4"></div>
                <a :href="item.link" class="m-0 tertiary-font">{{item.linkTitle}}</a>
            </div>  
            <hr class="divider">
        </li>
    </ul>
    <div class="d-flex justify-content-end">
        <PaginationNavComponentVue :total-items="items.length" :items-per-page="itemsPerPage" :current-page="currentPage" @page-changed="handlePageChange" />
    </div>
</template>

<style scoped>
    .vertical-border-line{
        width: 1px;
        height: 20px;
        border: 1px solid gray;
    }
</style>