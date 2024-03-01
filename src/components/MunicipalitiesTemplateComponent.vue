<script>
import BayanApiService from '@/services/BayanApiService';

export default {
    data () {
        return {
            bayan: []
        }
    },
    methods: {
        fetchData (){
            BayanApiService.fetch()
                .then(data => {
                    this.bayan = []
                    this.bayan.push(...data);
                })
                .catch(error => {
                    console.error('Error fetching bayan:', error);
                });
        }
    },
    created() {
        this.fetchData(); 
    }
}
</script>

<template>
    <div class="card-body tertiary-bg my-3 px-2 pb-5 position-relative">
        <ul class="list-unstyled">
            <li v-for="(bayan, index) in bayan" :key="index" :value="name">
                <p class="my-2 semi-bold tertiary-font fs-5">
                    {{ bayan.name }}
                </p>
                <hr class="grey-divider">
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