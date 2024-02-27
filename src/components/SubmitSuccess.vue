<script setup>
    import TemplateContainer from '@/components/TemplateContainer.vue';
</script>

<template>
    <div class="spacer"></div>
    <TemplateContainer>
        <div class="card-body gradient-bg text-center text-white my-3 position-relative">
            <h1>Success!</h1>
            <h2>Your E-Submission is submitted</h2>
            <p>Please wait for a couple of days for us to process your E-Submission<br>You can monitor your E-Submission through E-Submission Page</p>
            <button class="btn btn-outline border border-white rounded-0 mt-4" type="submit">Go to my E-Submissions</button>
        </div>
    </TemplateContainer>
</template>

<style>
    .card-body {
        padding: 4.5rem 5rem 4rem 5rem;
    }
    .gradient-bg {
        background-image: linear-gradient(to right, #286BAE, #174E85);
    }
    .card-body h1 {
        font-size: 128px;
        font-weight: 700 ;
    }

    .card-body h2 {
        font-size: 40px;
    }

    .btn {
        padding: 1.3rem 9rem;
        font-size: 20px;
        color: white;
        background-color: var(--primary-color);
    }
    .spacer {
        padding-top: 6rem;
    }

</style>