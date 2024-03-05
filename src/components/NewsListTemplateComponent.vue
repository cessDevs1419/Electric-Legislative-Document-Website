
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
    <div class="row p-0 w-100 m-auto">
        <div class="col-lg-5 p-0">
            <div class="image-container w-100 h-100 bg-dark-subtle">
                <img class="w-100 h-100" src="" alt="Img">
            </div>
        </div>
        <div class="col-lg-7 position-relative">
            <h5 class="fw-semibold mb-3">
                <slot name="title" ></slot>
            </h5>
            <p class="">
                <slot name="description" ></slot>
            </p>
            <div class="footer ">
                <a class="tertiary-font fw-semibold m-0 text-decoration-none mb" :href="link">Read More</a>
                <div class="underline"></div>
            </div> 
        </div>
    </div>
</template>

<style scoped>
    .vertical-border-line{
        width: 1px;
        height: 20px;
        border: 1px solid gray;
    }
    .underline{
        max-width: 5.5rem;
        border-bottom: 2px solid var(--primary-color);
    }

    .image-container{
        min-height: 200px;
    }
</style>