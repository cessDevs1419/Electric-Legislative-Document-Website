<script>
    export default {
        props: {
            items: {
                type: Array,
            }
        },
        
    }
</script>

<template>
    <div class="card-body tertiary-bg my-3 p-4 position-relative">
        <ul class="list-unstyled">
            <li class="text-decoration-none" v-for="(items, index) in items" :key="index">
                <h5 class="m-0">{{items.contact_entity}}</h5>
                <h6 class="grey-font mb-4">{{items.contact_number}}</h6>
            </li>
        </ul>


    </div>
</template>

<style scoped>
.card-body h5{
    font-weight: 600;
}
</style>