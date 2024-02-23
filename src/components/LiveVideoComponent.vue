<script>
export default {
    props: {
        videoSrc: {
            type: String,
            required: true
        },
        pageLink: {
            type: String,
            default: "http://"
        }
    }
}
</script>

<template>
    <div class="card border-0">
        <div class="card-head border py-3 px-4 primary-bg d-flex align-items-center">
            <h6 class="text-white m-0" >
                <slot name="heading"></slot>
            </h6>
        </div>
        <div class="card-body dark-grey-bg border my-3 p-0 position-relative">
            <video class="w-100 h-100" :src="videoSrc"></video>
            <div class="button-container position-absolute top-0 w-100 h-100 d-flex align-items-center justify-content-center">
                <button class="rounded-circle bg-dark border-0 d-flex justify-content-center align-items-center">
                    <i class="bi bi-play-fill text-white fs-3"></i>
                </button>
            </div>
        </div>
        <div class="card-footer px-0 border-0 bg-transparent">
          <a class="tertiary-font fw-semibold m-0 text-decoration-none mb" :href="pageLink">View More</a>
          <div class="underline"></div>
        </div>
    </div>
</template>

<style scoped>
    button{
        min-width: 3rem;
        max-width: 3rem;
        height: 3rem;
        transition: .1s ease-out;
    }

    button:hover{
        transform: scale(110%);
        transition: .1s ease-in;
    }

    .underline{
        max-width: 5.5rem;
        border-bottom: 2px solid var(--primary-color);
    }
</style>