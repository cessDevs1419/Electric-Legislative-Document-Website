
<script>
    import DOMPurify from 'dompurify';
    export default {
        props: {
            id: {
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
        <div class="row p-0 w-100 m-auto">
            <div class="col-lg-5 p-0">
                <div class="image-container w-100 h-100 bg-dark-subtle">
                    <img class="w-100 h-100" :src="imgLink" alt="Img">
                </div>
            </div>
            <div class="col-lg-7 position-relative">
                <div class="container-fluid mx-0 px-0 overflow-hidden">
                    <h5 class="fw-semibold mb-3">
                        <slot name="title" ></slot>
                    </h5>
                    <div class="description text-wrap text-break text-truncate w-100 h-100"  >{{ description }}</div>
                </div>
                <div class="footer bottom-0">
                    <router-link class=" fw-semibold py-2 text-decoration-none tertiary-font" :to="'/view-news/'+ id">Read More</router-link>
                    <div class="underline"></div>
                </div> 
            </div>
        </div>
    
</template>

<style scoped>
    .description{
        min-height: 150px;
        max-height: 150px;
    }
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