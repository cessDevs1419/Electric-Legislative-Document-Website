<script>
import BayanApiService from '@/services/BayanApiService';
import CategoryApiService from '@/services/CategoryApiService';
import DocumentTypeApiService from '@/services/DocumentTypeApiService';

export default {
    data() {
        return {
            searchQuery: '',
            typeQuery: '',
            categoryQuery: '',
            bayanQuery: '',
            bayan: [],
            category: [],
            type: [] 
        };
    },
    props: {
        header: {
            type: Array,
            required: true
        },
        data: {
            type: Array,
            required: true
        },
        rows: {
            type: Array,
            required: true
        }
    },
    methods: {
        getData(data) {
            this.$emit('row-click-data', data);
        },
        fetchData() { 
            BayanApiService.fetch()
                .then(data => {
                    this.bayan = []
                    this.bayan.push(...data);
                })
                .catch(error => {
                    console.error('Error fetching bayan:', error);
                });
            
            CategoryApiService.fetch()
                .then(data => {
                    this.category = []
                    this.category.push(...data);
                })
                .catch(error => {
                    console.error('Error fetching categories:', error);
                });    

            DocumentTypeApiService.fetch()
                .then(data => {
                    this.type = []
                    this.type.push(...data);
                })
                .catch(error => {
                    console.error('Error fetching categories:', error);
                });  
        }, 
        
            
    },
    computed: {
    filteredData() {
        return this.data.filter(item => {
            const matchesSearch = this.searchQuery === '' || Object.values(item).some(value =>
                String(value).toLowerCase().includes(this.searchQuery.toLowerCase())
            );
            const matchesType = this.typeQuery === '' || item.type_name.toLowerCase().includes(this.typeQuery.toLowerCase());
            const matchesCategory = this.categoryQuery === '' || item.category_name.toLowerCase().includes(this.categoryQuery.toLowerCase());
            const matchesBayan = this.bayanQuery === '' || item.bayan_name.toLowerCase().includes(this.bayanQuery.toLowerCase());

            return matchesSearch && matchesType && matchesCategory && matchesBayan;
        });
    }
},


    created() {
        this.fetchData(); 
    }
};
</script>


<template>
<div class="table-container box-shadow  px-4">
    <div class="table-header p-4">
        <div class="row">
            <div class="col-xl-3 col-lg-6">
                <div class="input-group mb-3">
                    <input type="search" v-model="searchQuery" class="form-control p-2 rounded-0 border border-end-0" placeholder="Search Documents . . ." >
                    <span class="input-group-text rounded-0 border border-start-0 bg-transparent px-2" >
                        <i class="bi bi-search "></i>
                    </span>
                </div>
            </div>
            <div class="col-xl-3 col-lg-6 mb-3 mb-lg-0">
                <div class="d-flex align-item-center justify-content-between">
                    <label class="col-form-label">Filter By</label>
                        <select class="filter-select form-select rounded-0 px-2" v-model="typeQuery" >
                            <option selected>Types</option>
                            <option v-for="(items, index) in type" :key="index" :value="items.name">{{ items.name }}</option>
                        </select>
                </div>
            </div>
            <div class="col-xl-3 col-lg-6 mb-3 mb-lg-0">
                <div class="d-flex align-item-center justify-content-between">
                    <label class="col-form-label">Category</label>
                        <select class="filter-select form-select rounded-0 px-2" v-model="categoryQuery" >
                            <option selected>Select Category</option>
                            <option v-for="(category, index) in category" :key="index" :value="category.name">{{ category.name }}</option>
                        </select>
                </div>
            </div>
            <div class="col-xl-3 col-lg-6 mb-3 mb-lg-0">
                <div class="d-flex align-item-center justify-content-between">
                    <label class="col-form-label">Bayan</label>
                        <select class="filter-select form-select rounded-0 px-2" v-model="bayanQuery" >
                            <option selected>Select Bayan</option>
                            <option v-for="(item, index) in bayan" :key="index" :value="item.name" >{{ item.name }}</option>
                        </select>
                </div>
            </div>
        </div>
    </div>
    <div class="table-body pb-4 overflow-auto mx-4 pt-0">
        <table class="table w-100">
            <thead>
                <tr >
                    <th v-for="(item, index) in header" :key="index" scope="col">{{ item }}</th>
                </tr>
            </thead>
            <tbody>
                <tr class="cursor-pointer"  data-bs-toggle="modal" data-bs-target="#tableModal" v-for="(item, index) in filteredData" :key="index" @click="getData(item)"> 
                    <td class="text-truncate max-data-width overflow-hidden " v-for="(rows, index) in rows" :key="index">
                        <template v-if="rows === 'attachments'">
                            <template v-if="item['attachments']">
                                {{ item['not_show_attachments_desc'] }}
                            </template>
                        </template>
                        <template v-else>
                            {{ item[rows] }}
                        </template>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</div>
</template>

<style scoped>
    .table{
        min-width: 1200px;
        width: 100%;
    }

    th{
        padding: 1.5rem;
        background-color: var(--primary-color);
        color: #ffffff;
        font-weight: 600;
        text-align: center;
    }
    td{
        text-align: center;
        padding: 1.5rem;
    }
    .filter-select{
        width: 100%;
        max-width: 200px;
    }

    .max-data-width{
        max-width: 10rem;
    }
</style>