<template>
    <div class="card-body tertiary-bg my-3 p-4 pb-5 position-relative">
            <p class="my-2 semi-bold tertiary-font fs-5">
                <slot name="1st-event"></slot>
            </p>
            <hr class="grey-divider">
            <p class="my-2 semi-bold tertiary-font fs-5">
                <slot name="2nd-event"></slot>
            </p>
            <hr class="grey-divider">
            <p class="my-2 semi-bold tertiary-font fs-5">
                <slot name="3rd-event"></slot>
            </p>
            <hr class="grey-divider">
            <p class="my-2 semi-bold tertiary-font fs-5">
                <slot name="4th-event"></slot>
            </p>
            <hr class="grey-divider">
            <p class="my-2 semi-bold tertiary-font fs-5">
                <slot name="5th-event"></slot>
            </p>
    </div>
</template>

<style scoped>
    .semi-bold {
        font-weight: 600;
    }

    .card-body p:hover{
        color:var(--secondary-color);
        cursor: pointer;
    }
</style>