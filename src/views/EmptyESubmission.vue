<script setup>
    import TemplateContainer from '@/components/TemplateContainer.vue';
</script>

<template>
    <div class="spacer"></div>
    <TemplateContainer>
        <div class="card-body text-center tertiary-bg my-3 position-relative">
            <h1>404</h1>
            <h2>There's NOTHING here...</h2>
            <p>There are currently no E-Submission records from your account<br>Please make a E-Submission first.</p>
            <button class="btn rounded-0 mt-4" type="submit">Make my first E-Submission</button>
        </div>
    </TemplateContainer>
</template>

<style>
    .card-body {
        padding: 4.5rem 5rem 4rem 5rem;
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