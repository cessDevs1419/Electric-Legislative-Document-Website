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
            type: [],
            typedropdownOpen: false,
            
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
        getCategory(name){
            this.categoryQuery = name;
        },
        reset() {
            this.searchQuery = '';
            this.typeQuery = '';
            this.categoryQuery = '';
            this.bayanQuery = '';
        },
        openPdf(file) {
            window.open(file, '_blank');
        },
        getType(name){
            this.typeQuery = name;
        },
        getCategory(name){
            this.categoryQuery = name;
        },
        getBayan(name){
            this.bayanQuery = name;
        },
        toggleTypeQuery() {
            this.typeQuery = this.typeQuery ? '' : this.typeQuery;
        },
        toggleCategoryQuery() {
            this.categoryQuery = this.categoryQuery ? '' : this.categoryQuery;
        },
        toggleBayanQuery() {
            this.bayanQuery = this.bayanQuery ? '' : this.bayanQuery;
        }
        
            
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
        <div class="row w-100 m-auto mb-3 mb-xl-0">
            <div class="col-md-6 ">
                <div class="input-group mb-3">
                    <input type="search" v-model="searchQuery" class="form-control p-2 rounded-0 border border-end-0" placeholder="Search Documents . . ." >
                    <span class="input-group-text rounded-0 border border-start-0 bg-transparent px-2" >
                        <i class="bi bi-search "></i>
                    </span>
                </div>
            </div>
            <div class="col-md-6 d-flex justify-content-start justify-content-md-end">
                <button @click="reset" class=" primary-bg clear-btn px-3 text-white border-0 rounded-0">Clear</button>
            </div>
        </div>
        <div class="row w-100 m-auto">
            <div class="col-xl-4 col-lg-6 mb-3 mb-xl-0">
                <div class="d-flex align-item-center justify-content-between flex-wrap">
                    <label class="col-form-label">Filter By</label>
                        <div class="dropdown rounded-0">
                            <button @click="toggleTypeQuery" data-bs-toggle="dropdown" aria-expanded="false"  class="text-nowrap text-truncate dropdown-btn btn text-dark border d-flex align-items-center justify-content-between  rounded-0 " type="button" >
                               <p class="text-nowrap text-truncate m-0">{{ typeQuery ? typeQuery : 'Type' }}</p>  <i v-if="typeQuery" class="bi bi-x"></i> <i v-if="!typeQuery" class="bi bi-caret-down"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li class="px-3 cursor-pointer mb-2" v-for="(items, index) in type" :key="index"  @click="getType(items.name)">
                                    {{ items.name }}
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-6 mb-3 mb-xl-0">
                <div class="d-flex align-item-center justify-content-between flex-wrap">
                    <label class="col-form-label">Category</label>
                        <div class="dropdown rounded-0">
                            <button @click="toggleCategoryQuery" data-bs-toggle="dropdown" aria-expanded="false"  class="text-nowrap text-truncate dropdown-btn btn text-dark border d-flex align-items-center justify-content-between  rounded-0 " type="button" >
                                <p class="text-nowrap text-truncate m-0">{{ categoryQuery ? categoryQuery : 'Category' }}</p>  <i v-if="categoryQuery" class="bi bi-x"></i> <i v-if="!categoryQuery" class="bi bi-caret-down"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li class="px-3 cursor-pointer mb-2" v-for="(items, index) in category" :key="index"  @click="getCategory(items.name)">
                                    {{ items.name }}
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-6 mb-3 mb-xl-0">
                <div class="d-flex align-item-center justify-content-between flex-wrap">
                    <label class="col-form-label">Bayan</label>
                        <div class="dropdown rounded-0">
                            <button @click="toggleBayanQuery" data-bs-toggle="dropdown" aria-expanded="false"  class="text-nowrap text-truncate dropdown-btn btn text-dark border d-flex align-items-center justify-content-between  rounded-0 " type="button" >
                                <p class="text-nowrap text-truncate m-0">{{ bayanQuery ? bayanQuery : 'Bayan' }}</p> <i v-if="bayanQuery" class="bi bi-x"></i> <i v-if="!bayanQuery" class="bi bi-caret-down"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li class="px-3 cursor-pointer mb-2" v-for="(items, index) in bayan" :key="index"  @click="getBayan(items.name)">
                                    {{ items.name }}
                                </li>
                            </ul>
                        </div>
                        
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
                <tr class="cursor-pointer" data-bs-toggle="modal" data-bs-target="#tableModal" v-for="(item, index) in filteredData" :key="index" @click="getData(item)"> 
                    <td class="text-truncate max-data-width overflow-hidden" v-for="(rows, index) in rows" :key="index">
                        <template v-if="rows === 'attachments'">
                            <template v-if="item['is_show_attachments']">
                                <template v-for="(attachment, i) in item['attachments']" :key="i">
                                    <i @click="openPdf(attachment)" class="cursor-pointer mx-2 bi bi-filetype-pdf fs-3">
                                    </i>    
                                </template>
                            </template>
                            <template v-else>
                                {{ item['not_show_attachments_desc'] || 'No attachments available' }}
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
    .clear-btn{
        height: 2.5rem;
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
    .input-group-text{
        background-image: none;
    }
    .dropdown{
        width: 100%;
        max-width: 250px;
    }
    .dropdown-btn{
        width: 100%;
        max-width: 250px;
    }

    .max-data-width{
        max-width: 10rem;
    }
</style>