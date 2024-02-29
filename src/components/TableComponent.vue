<script>
    export default{
        data(){
            return{
                searchQuery: '',
                typeQuery: '',
                categoryQuery: '',
                bayanQuery: '',
            }
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
            getData(data){
                this.$emit('row-click-data', data );
            }
        },
        computed: {
            filteredData() {
            return this.data.filter(item => {
                return Object.values(item).some(value =>
                String(value).toLowerCase().includes(this.searchQuery.toLowerCase() || this.typeQuery.toLowerCase() || this.categoryQuery.toLowerCase() || this.bayanQuery.toLowerCase())
                );
            });
            }
        },

    }
</script>

<template>
<div class="table-container box-shadow overflow-auto px-4">
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
                            <option value="" selected>Types</option>
                            <option value="ORDINANCE">ORDINANCE</option>
                            <option value="RECOLLECTION">RECOLLECTION</option>
                        </select>
                </div>
            </div>
            <div class="col-xl-3 col-lg-6 mb-3 mb-lg-0">
                <div class="d-flex align-item-center justify-content-between">
                    <label class="col-form-label">Category</label>
                        <select class="filter-select form-select rounded-0 px-2" v-model="categoryQuery" >
                            <option value="" selected>Types</option>
                            <option value="Category 1">Category 1</option>
                            <option value="Category 2">Category 2</option>
                        </select>
                </div>
            </div>
            <div class="col-xl-3 col-lg-6 mb-3 mb-lg-0">
                <div class="d-flex align-item-center justify-content-between">
                    <label class="col-form-label">Bayan</label>
                        <select class="filter-select form-select rounded-0 px-2" v-model="bayanQuery" >
                            <option value="" selected>Types</option>
                            <option value="QP">QP</option>
                            <option value="GP">GP</option>
                        </select>
                </div>
            </div>
        </div>
    </div>
    <div class="table-body p-4 pt-0">
        <table class="table w-100">
            <thead>
                <tr >
                    <th v-for="(item, index) in header" :key="index" scope="col">{{ item }}</th>
                </tr>
            </thead>
            <tbody>
                <tr class="cursor-pointer"  data-bs-toggle="modal" data-bs-target="#tableModal" v-for="(item, index) in filteredData" :key="index" @click="getData(item)"> 
                    <td v-for="(rows, index) in rows" :key="index">
                        {{ item[rows] }}
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
</style>