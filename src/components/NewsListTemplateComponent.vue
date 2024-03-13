
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
                required: true
            },
            imgLink: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },

        },
        methods: {
            sanitizeRTFData() {
                return DOMPurify.sanitize(this.description);
            }
        }
    }
</script>

<template>
    <router-link class="border py-2 text-decoration-none text-dark" :to="'/view-news/'+ id">
        <div class="row p-0 w-100 m-auto">
            <div class="col-lg-5 p-0">
                <div class="image-container w-100 h-100 bg-dark-subtle">
                    <img class="w-100 h-100" :src="imgLink" alt="Img">
                </div>
            </div>
            <div class="col-lg-7 position-relative">
                <h5 class="fw-semibold mb-3">
                    <slot name="title" ></slot>
                </h5>
                <div v-html="sanitizeRTFData()" ></div>
                <div class="footer ">
                    <a class="tertiary-font fw-semibold m-0 text-decoration-none mb" :href="link">Read More</a>
                    <div class="underline"></div>
                </div> 
            </div>
        </div>
    </router-link>
</template>

<style scoped>
    .vertical-border-line{
        width: 1px;
        height: 20px;
        border: 1px solid gray;
    }

    .image-container{
        min-height: 200px;
    }

    .underline{
        max-width: 5.5rem;
        border-bottom: 2px solid var(--primary-color);
    }

    .footer a:hover {
        color: var(--secondary-color);
    }

    .footer a:hover + .underline {
        border-bottom-color: var(--secondary-color);
    }
</style>