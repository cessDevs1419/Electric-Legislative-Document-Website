
<script>
    import DOMPurify from 'dompurify';
    export default {
        props: {
            id: {
                type: String,
                required: true
            },
            link: {
                type: String,
            },
            description: {
                type: String,
                required: true
            },
            categories: {
                type: Array,
                required: true
            },
        },

    }
</script>

<template>
    <router-link class="py-2 text-decoration-none text-dark" :to="'/view-ordinance/'+ id">
        <h4 class="fw-semibold">
            <slot name="title" ></slot>
        </h4>
    </router-link>
    <p><slot name="description" ></slot></p>
    <div class="details d-flex align-items-center mb-5">
            <p class="m-0 grey-font" >
                <slot name="date" ></slot>
            </p>
            <div class="vertical-border-line mx-4"></div>
            <div v-for="(items, index) in categories" :key="index">
                <router-link title="category" v-if="index > 1" class="m-0 tertiary-font cursor-pointer" :to="'/order-of-business/category/'+ items.category_id">
                    Etc
                </router-link> 
                <router-link title="category"  v-else class="m-0 tertiary-font curor-pointer" :to="'/order-of-business/category/'+ items.category_id">
                    {{ items.category_name}},
                </router-link>&nbsp
            </div>
    </div>  
    <hr class="divider">
    
</template>

<style scoped>
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