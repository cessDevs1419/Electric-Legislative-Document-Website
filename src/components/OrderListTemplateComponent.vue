
<script>
    export default {
        props: {
            link: {
                type: String,
                required: true
            },
        },
    }
</script>

<template>
    <h4 class="fw-semibold">
        <slot name="title" ></slot>
    </h4>
    <p>
        <slot name="description" ></slot>
    </p>
    <div class="details d-flex align-items-center mb-5">
        <p class="m-0 grey-font" >
            <slot name="date" ></slot>
        </p>
        <div class="vertical-border-line mx-4"></div>
        <a :href="link" class="m-0 tertiary-font">
            <slot name="linkTitle" ></slot>
        </a>
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