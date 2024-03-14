
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
    <router-link class="py-2 text-decoration-none text-dark link" :to="'/order-of-business/view-ordinance/'+ id">
        <h4 class="fw-semibold">
            <slot name="title" ></slot>
        </h4>
    </router-link>
    <p><slot name="description" ></slot></p>
    <div class="details d-flex align-items-center mb-5">
            <p class="m-0 grey-font text-nowrap" >
                <slot name="date" ></slot>
            </p>
            <div class="vertical-border-line mx-4"></div>
            <div  class="d-flex justify-content-start align-items-start align-items-sm-center flex-sm-row flex-column">
                <template v-for="(items, index) in categories" :key="index">
                    <template v-if="index > 1">
                        <p class="m-0 text-start tertiary-font">Etc</p>
                    </template>
                    <template v-else>
                        <router-link  title="category" class="link m-0 text-start tertiary-font" :to="'/order-of-business/category/'+ items.category_id">
                            {{ items.category_name}},
                        </router-link>&nbsp
                    </template>
                </template>
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
    .link:hover{
        color: var(--secondary-color) !important;
    }

</style>