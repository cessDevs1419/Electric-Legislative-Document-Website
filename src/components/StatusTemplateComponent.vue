<script>
    export default {
        props: {
            theme: {
                type: String,
                required: true
            },
            status_bg_color: {
                type: String,
                required: true
            },
            status_font_color: {
                type: String,
                required: true
            }
        }
    }
</script>
<template>
    <div class="rounded-5 w-auto p-2 " :style="{color: status_font_color, backgroundColor: status_bg_color }"  >
        <slot name="status"></slot>
    </div>
</template>

<style scoped>

</style>