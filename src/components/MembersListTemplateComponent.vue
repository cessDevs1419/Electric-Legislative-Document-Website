<script>
import SidebarComponent from './SidebarComponent.vue';
</script>

<template>
    <div class="card-body tertiary-bg my-3 p-4 pb-5 position-relative">
            <p class="my-2 tertiary-font fs-5">
                <slot name="1st-MemberName"></slot>
            </p>
            <p class="my-2 tertiary-font fs-5">
                <slot name="2nd-MemberName"></slot>
            </p>
            <p class="my-2 tertiary-font fs-5">
                <slot name="3rd-MemberName"></slot>
            </p>
            <p class="my-2 tertiary-font fs-5">
                <slot name="4th-MemberName"></slot>
            </p>
            <p class="my-2 tertiary-font fs-5">
                <slot name="5th-MemberName"></slot>
            </p>
            <p class="my-2 tertiary-font fs-5">
                <slot name="6th-MemberName"></slot>
            </p>
            <p class="my-2 tertiary-font fs-5">
                <slot name="7th-MemberName"></slot>
            </p>
            <p class="my-2 tertiary-font fs-5">
                <slot name="8th-MemberName"></slot>
            </p>
            <p class="my-2 tertiary-font fs-5">
                <slot name="9th-MemberName"></slot>
            </p>
            <p class="my-2 tertiary-font fs-5">
                <slot name="10th-MemberName"></slot>
            </p>
        </div>
</template>

<style scoped>
    .card-body p{
        text-decoration: underline;
    }

    .card-body p:hover{
        color: var(--secondary-color);
        cursor: pointer;
    }
</style>