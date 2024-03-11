
<script>
    import DOMPurify from 'dompurify';
    export default {
        props: {
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
    <h4 class="fw-semibold">
        <slot name="title" ></slot>
    </h4>

    <p><slot name="description" ></slot></p>
    <div class="details d-flex align-items-center mb-5">
        <p class="m-0 grey-font" >
            <slot name="date" ></slot>
        </p>
        <div class="vertical-border-line mx-4"></div>
        <div v-for="(items, index) in categories" :key="index">
            <a  class="m-0 tertiary-font cursor-pointer" title="category" v-if="index > 1">
                <!-- <slot name="linkTitle" ></slot> -->
                Etc
            </a> 
            <a  class="m-0 tertiary-font" v-else>
                <!-- <slot name="linkTitle" ></slot> -->
                {{ items }},
            </a> &nbsp
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
</style>