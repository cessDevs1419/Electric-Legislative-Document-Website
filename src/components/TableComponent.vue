<script>
    export default{
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
                console.log(data)
            }
        }

    }
</script>

<template>
<div class="table-container box-shadow overflow-auto px-4">
    <div class="table-header p-4">
        <div class="row">
            <div class="col-xl-3 col-lg-6">
                <div class="input-group mb-3">
                    <input type="search" class="form-control p-2 rounded-0 border border-end-0" placeholder="Search Documents . . ." >
                    <span class="input-group-text rounded-0 border border-start-0 bg-transparent px-2" >
                        <i class="bi bi-search "></i>
                    </span>
                </div>
            </div>
            <div class="col-xl-3 col-lg-6">
                <div class="d-flex align-item-center justify-content-between">
                    <label class="col-form-label">Filter By</label>
                        <select class="filter-select form-select rounded-0 px-2" >
                            <option selected>Types</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                </div>
            </div>
            <div class="col-xl-3 col-lg-6">
                <div class="d-flex align-item-center justify-content-between">
                    <label class="col-form-label">Category</label>
                        <select class="filter-select form-select rounded-0 px-2" >
                            <option selected>Types</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                </div>
            </div>
            <div class="col-xl-3 col-lg-6">
                <div class="d-flex align-item-center justify-content-between">
                    <label class="col-form-label">Bayan</label>
                        <select class="filter-select form-select rounded-0 px-2" >
                            <option selected>Types</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                </div>
            </div>
        </div>
    </div>
    <div class="table-body p-4 pt-0">
        <table class="table">
            <thead>
                <tr >
                    <th v-for="(item, index) in header" :key="index" scope="col">{{ item }}</th>
                </tr>
            </thead>
            <tbody>
                <tr class="cursor-pointer"  data-bs-toggle="modal" data-bs-target="#tableModal" v-for="(item, index) in data" :key="index" @click="getData(item)"> 
                    <td v-for="(rows, index) in rows" :key="index">{{ item[rows] }}</td>
                </tr>
            </tbody>
        </table>
    </div>

</div>
</template>

<style scoped>
    .table-header{
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