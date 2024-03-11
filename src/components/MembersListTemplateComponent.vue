<script setup>
    import OrderofBusinessApiService from '@/services/OrderofBusinessApiService';
</script>
<script>
    
    export default {
        data () {
            return {
                members: []
            }
        },
        methods: {
            fetchData(){
                OrderofBusinessApiService.fetch20thSPMembers().then(item => {
                    this.members = []
                    this.members.push(...item);
                })
                .catch(error => {
                    console.error('', error);
                });
            }, 
        },
        created() {
            this.fetchData(); 
        }
        
    }
</script>

<template>
    <div class="card-body tertiary-bg my-3 p-4 pb-5 position-relative">
        <ul class="list-unstyled">
            <li class="my-2" v-for="(items, index) in members" :key="index">
                <a class="tertiary-font fs-5" :href="items.fb_page">
                    {{ items.name }}
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