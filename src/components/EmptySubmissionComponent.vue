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
        <div class="card-404 text-center tertiary-bg my-3 position-relative">
            <h1>404</h1>
            <h2>There's NOTHING here...</h2>
            <p class="mb-3">There are currently no E-Submission records from your account<br>Please make a E-Submission first.</p>
            <button @click="newSubmission" class="create-btn cursor-pointer mx-auto rounded-0 mt-4 ">
                Make my first E-Submission
            </button>

        </div>
    </TemplateContainer>
</template>

<style>
    .card-404 {
        padding: 4.5rem 5rem 4rem 5rem;
    }
    .card-404 h1 {
        font-size: 128px;
        font-weight: 700 ;
    }

    .card-404 h2 {
        font-size: 40px;
    }

    .create-btn {
        max-width: fit-content;
        padding: 1.3rem 9rem;
        font-size: 20px;
        color: white;
        background-color: var(--primary-color);
        transition: all 0.5s ease;
    }

    .create-btn:hover {
        transform: scale(1.05);
    }
   

</style>