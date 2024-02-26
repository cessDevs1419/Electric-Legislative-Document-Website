<script>
import SidebarComponent from './SidebarComponent.vue';
</script>

<template>
    <div class="card-body tertiary-bg my-3 p-4 position-relative">
            <p class="m-0 tertiary-font fs-5">
                <slot name="memberName"></slot>
            </p>
            <p class="m-0 tertiary-font fs-5">
                <slot name="2nd-MemberName"></slot>
            </p>
            <p class="m-0 tertiary-font fs-5">
                <slot name="3rd-MemberName"></slot>
            </p>
            <p class="m-0 tertiary-font fs-5">
                <slot name="4th-MemberName"></slot>
            </p>
            <p class="m-0 tertiary-font fs-5">
                <slot name="5th-MemberName"></slot>
            </p>
            <p class="m-0 tertiary-font fs-5">
                <slot name="6th-MemberName"></slot>
            </p>
            <p class="m-0 tertiary-font fs-5">
                <slot name="7th-MemberName"></slot>
            </p>
            <p class="m-0 tertiary-font fs-5">
                <slot name="8th-MemberName"></slot>
            </p>
            <p class="m-0 tertiary-font fs-5">
                <slot name="9th-MemberName"></slot>
            </p>
            <p class="m-0 tertiary-font fs-5">
                <slot name="10th-MemberName"></slot>
            </p>
        </div>
</template>

<style scoped>
    .card-body p{
        text-decoration: underline;
    }
</style>