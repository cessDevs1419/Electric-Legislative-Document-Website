<script>
    export default {
        props: {
            type: {
                type: String,
                required: true
            }
        }
    }
</script>

<template>
    <h1 class="fw-bold" v-if="type === 'inside'">
        <span class="secondary-bg px-2 fw-bold text-white">
            <slot name="firstWord" ></slot>
        </span> <slot name="secondWord" ></slot>
    </h1>

    <h1 class="fw-bold" v-if="type === 'outside'">
        <slot name="firstWord" ></slot>
        <span class="secondary-bg px-2 fw-bold text-white">
            <slot name="secondWord" ></slot>
        </span> 
    </h1>
</template>