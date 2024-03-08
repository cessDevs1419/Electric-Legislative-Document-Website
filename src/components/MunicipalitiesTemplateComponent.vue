<template>
    <div class="card-body tertiary-bg my-3 p-4 pb-5 position-relative">
            <p class="my-2 semi-bold tertiary-font fs-5">
                <slot name="1st-Municipality"></slot>
            </p>
            <hr class="grey-divider">
            <p class="my-2 semi-bold tertiary-font fs-5">
                <slot name="2nd-Municipality"></slot>
            </p>
            <hr class="grey-divider">
            <p class="my-2 semi-bold tertiary-font fs-5">
                <slot name="3rd-Municipality"></slot>
            </p>
            <hr class="grey-divider">
            <p class="my-2 semi-bold tertiary-font fs-5">
                <slot name="4th-Municipality"></slot>
            </p>
            <hr class="grey-divider">
            <p class="my-2 semi-bold tertiary-font fs-5">
                <slot name="5th-Municipality"></slot>
            </p>
            <hr class="grey-divider">
            <p class="my-2 semi-bold tertiary-font fs-5">
                <slot name="6th-Municipality"></slot>
            </p>
            <hr class="grey-divider">
            <p class="my-2 semi-bold tertiary-font fs-5">
                <slot name="7th-Municipality"></slot>
            </p>
            <hr class="grey-divider">
            <p class="my-2 semi-bold tertiary-font fs-5">
                <slot name="8th-Municipality"></slot>
            </p>
            <hr class="grey-divider">
            <p class="my-2 semi-bold tertiary-font fs-5">
                <slot name="9th-Municipality"></slot>
            </p>
            <hr class="grey-divider">
            <p class="my-2 semi-bold tertiary-font fs-5">
                <slot name="10th-Municipality"></slot>
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