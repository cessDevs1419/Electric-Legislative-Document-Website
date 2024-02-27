<script setup>
     import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
     import EmptyESubmission from './EmptyESubmission.vue';
     import SubmitSuccess from '@/components/SubmitSuccess.vue';
</script>

<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
    <EmptyESubmission></EmptyESubmission>
</template>

<style>
    .spacer {
        padding-top: 15rem;
    }
</style>