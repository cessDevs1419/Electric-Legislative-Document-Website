<script setup>
    import OrderofBusinessApiService from '@/services/OrderofBusinessApiService';
    import DOMPurify from 'dompurify';
</script>
<script>
    export default {
        data () {
            return {
                hotlines: []
            }
        },
        methods: {
            fetchData(){
                OrderofBusinessApiService.fetchHotlines().then(item => {
                    this.hotlines = []
                    this.hotlines.push(...item);

                })
                .catch(error => {
                    console.error('', error);
                });
            }, 
            sanitizeRTFData(contact) {
                return DOMPurify.sanitize(contact);
            }
        },
        created() {
            this.fetchData(); 
        }
        
    }
</script>

<template>
    <div class="card-body tertiary-bg my-3 p-4 position-relative">
        <ul class="list-unstyled">
            <li class="text-decoration-none mb-2" v-for="(items, index) in hotlines" :key="index">
                <h5 class="m-0">{{items.contact_entity}}</h5>
                <div v-html="sanitizeRTFData(items.contact_number)" ></div>
            </li>
        </ul>


    </div>
</template>

<style scoped>
.card-body h5{
    font-weight: 600;
}
</style>