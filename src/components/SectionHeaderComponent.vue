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
    <div class="d-flex p-0 justify-content-lg-start justify-content-center">
        <h1 class="fw-bold" v-if="type === 'inside'">
            <span class="secondary-bg px-2 fw-bold text-white">
                <slot name="firstWord" ></slot>
            </span> <slot name="secondWord" ></slot>
        </h1>

        <h1 class="fw-bold" v-if="type === 'outside'">
            <slot name="firstWord" ></slot> 
            <span class="secondary-bg px-2 ms-1 fw-bold text-white">
                <slot name="secondWord" ></slot>
            </span> 
        </h1>
    </div>
</template>