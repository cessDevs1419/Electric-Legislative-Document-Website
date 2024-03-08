<script>
    export default {
        props: {
            theme: {
                type: String,
                required: true
            }
        }
    }
</script>
<template>
    <div class="rounded-5 w-auto p-2 " :class="{'received':this.theme === 'Received', 'endorsed':this.theme === 'Endorsed', 'legislative':this.theme === 'Legislative'}"  >
        <slot name="status"></slot>
    </div>
</template>

<style scoped>
    .received{
        background: rgba(182, 63, 255, 0.18);
        color: #B63FFF;
    }

    .endorsed{
        background: rgba(62, 205, 49, 0.18);
        color: #3ECD31;
    }

    .legislative{
        background: rgba(253, 136, 17, 0.18);
        color: #FD8811;
    }
</style>