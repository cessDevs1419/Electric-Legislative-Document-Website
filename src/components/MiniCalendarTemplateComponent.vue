<script setup>
    import CalendarViewer from './CalendarViewer.vue';
</script>

<template>
    <div class="card-body position-relative w-100">
        <CalendarViewer></CalendarViewer>
    </div>
</template>

<style scoped>
    .card-body img{
        max-height: 504px;
        max-width: 545px;
    }
</style>