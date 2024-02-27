<script setup>
     import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
     import EmptyESubmission from './EmptyESubmission.vue';
     import SubmitSuccess from '@/components/SubmitSuccess.vue';
</script>

<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="reso-spacer"></div>
    <EmptyESubmission></EmptyESubmission>
</template>

<style>
    .reso-spacer {
        padding-top: 12rem;
    }
</style>