<script setup>
    import TitleContainerComponent from './TitleContainerComponent.vue';
</script>

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
    },
    data() {
        return {
            showButton: true
        };
    },
    methods: {
        playVideo() {
            const video = this.$refs.videoPlayer;
            this.showButton = false;
            video.play();
        },
        handlePlay() {
            const video = this.$refs.videoPlayer;
            video.controls = true;
        },
        handlePause() {
            const video = this.$refs.videoPlayer;
            this.showButton = true;
            video.controls = false;
        }
    }
}
</script>

<template>
    <div class="card border-0">
        <TitleContainerComponent>
            <template #heading>
                <slot name="heading"></slot>
            </template>
        </TitleContainerComponent>
   
        <div class="card-body dark-grey-bg border my-3 p-0 position-relative">

            <video class="w-100 h-100" ref="videoPlayer" @play="handlePlay" @pause="handlePause" >
                <source :src="videoSrc" type="video/mp4">
            </video>
            <div v-if="showButton" class="button-container position-absolute top-0 w-100 h-100 d-flex align-items-center justify-content-center">
                <button @click="playVideo" class="rounded-circle bg-dark border-0 d-flex justify-content-center align-items-center">
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

    .card-footer a:hover {
        color: var(--secondary-color);
    }

    .card-footer a:hover + .underline {
        border-bottom-color: var(--secondary-color);
    }
</style>