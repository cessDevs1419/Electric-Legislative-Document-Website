<script>
import SidebarComponent from './SidebarComponent.vue';
</script>

<template>
    <div class="card-body tertiary-bg my-3 p-4 pb-5 position-relative">
        <ul class="list-unstyled">
            <li class="my-2">
                <a class="tertiary-font fs-5" href="https://www.facebook.com">
                    <slot name="1st-MemberName"></slot>
                </a>
            </li>
            <li class="my-2">
                <a class="tertiary-font fs-5" href="https://www.facebook.com">
                    <slot name="2nd-MemberName"></slot>
                </a>
            </li>
            <li class="my-2">
                <a class="tertiary-font fs-5" href="https://www.facebook.com">
                    <slot name="3rd-MemberName"></slot>
                </a>
            </li>
            <li class="my-2">
                <a class="tertiary-font fs-5" href="https://www.facebook.com">
                   <slot name="4th-MemberName"></slot>
                </a>
            </li>
            <li class="my-2">
                <a class="tertiary-font fs-5" href="https://www.facebook.com">
                  <slot name="5th-MemberName"></slot>
                </a>
            </li>
            <li class="my-2">
                <a class="tertiary-font fs-5" href="https://www.facebook.com">
                  <slot name="6th-MemberName"></slot>
                </a>
            </li>
            <li class="my-2">
                <a class="tertiary-font fs-5" href="https://www.facebook.com">
                  <slot name="7th-MemberName"></slot>
                </a>
            </li>
            <li class="my-2">
                <a class="tertiary-font fs-5" href="https://www.facebook.com">
                  <slot name="7th-MemberName"></slot>
                </a>
            </li>
            <li class="my-2">
                <a class="tertiary-font fs-5" href="https://www.facebook.com">
                  <slot name="9th-MemberName"></slot>
                </a>
            </li>
            <li class="my-2">
                <a class="tertiary-font fs-5" href="https://www.facebook.com">
                  <slot name="10th-MemberName"></slot>
                </a>
            </li>
        </ul>

        </div>
</template>

<style scoped>
    .card-body li a{
        margin: 1rem 0;
    }

    .card-body a:hover{
        color: var(--secondary-color);
        cursor: pointer;
    }
</style>