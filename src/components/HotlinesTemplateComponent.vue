<script>
export default {
    
}
</script>

<template>
    <div class="card-body tertiary-bg my-3 p-4 position-relative">
        <h5 class="m-0"><slot name="HotlineTitle"></slot></h5>
        <h6 class="grey-font mb-4"><slot name="HotlineNumber"></slot></h6>

        <h5 class="m-0"><slot name="1HotlineTitle"></slot></h5>
        <h6 class="grey-font mb-4"><slot name="1HotlineNumber"></slot></h6>

        <h5 class="m-0"><slot name="2HotlineTitle"></slot></h5>
        <h6 class="grey-font mb-4"><slot name="2HotlineNumber"></slot></h6>

        <h5 class="m-0"><slot name="3HotlineTitle"></slot></h5>
        <h6 class="grey-font mb-4"><slot name="3HotlineNumber"></slot></h6>

        <h5 class="m-0"><slot name="4HotlineTitle"></slot></h5>
        <h6 class="grey-font mb-4"><slot name="4HotlineNumber"></slot></h6>

    </div>
</template>

<style scoped>
.card-body h5{
    font-weight: 600;
}
</style>