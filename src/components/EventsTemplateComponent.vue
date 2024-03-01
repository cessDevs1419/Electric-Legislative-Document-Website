<script>
export default {
    data () {
        return {
            events: [
                {
                    title: 'Paru Paro Festival'
                },
                {
                    title: '10th Anniversary Party'
                },
                {
                    title: 'Tapat Mo Linis Mo'
                },
                {
                    title: 'Blood Letting with Red Cross'
                },
                {
                    title: 'Free Anti-Rabies for furbabies'
                }
            ]
        }
    }
}
</script>

<template>
    <div class="card-body tertiary-bg my-3 px-2 pb-5 position-relative">
        <ul class="list-unstyled">
            <li class=" py-0 px-2" v-for="(events, index) in events" :key="index">
                <p class=" pt-3 fw-semibold tertiary-font fs-5">
                    {{ events.title }}
                </p>
                <hr class="grey-divider mt-0">
            </li>
        </ul>
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