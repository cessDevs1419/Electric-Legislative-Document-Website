<script setup>
    import TemplateContainer from './TemplateContainer.vue';
    import router from '@/router';
</script>
<script>
    export default {
        methods: {
            newSubmission(){
                router.push('/legislative/resolution/new-submission')
            }
        },

    }
</script>
<template>
    <TemplateContainer>
        <div class="card-404 py-5 text-center tertiary-bg my-3 position-relative">
            <h1 class="m-0 mb-3">404</h1>
            <h2 class="m-0 mb-3">There's Nothing here...</h2>
            <p class="mb-3">There are currently no E-Submission records from your account<br>Please make a E-Submission first.</p>
            <button @click="newSubmission" class="create-btn cursor-pointer px-5 py-3 mx-auto rounded-0 my-4 ">
                Make my first E-Submission
            </button>

        </div>
    </TemplateContainer>
</template>

<style>

    .card-404 h1 {
        font-size: 7rem;
        font-weight: 700 ;
    }



    .create-btn {
        font-size: 1.5rem;
        max-width: fit-content;
        color: white;
        background-color: var(--primary-color);
        transition: all 0.5s ease;
    }

    .create-btn:hover {
        transform: scale(1.05);
    }
   

</style>