<script>
    import StatusTemplateComponent from './StatusTemplateComponent.vue';


    export default{
    data() {
        return {
            searchQuery: '',
            typeQuery: '',
            categoryQuery: '',
            bayanQuery: '',
        };
    },
    props: {
        header: {
            type: Array,
            required: true
        },
        data: {
            type: Object,
            required: true
        },
        rows: {
            type: Array,
            required: true
        },
        searchbar: Boolean,
        standalone: Boolean,
    },
    methods: {
        getData(data) {
            this.$emit('row-click-data', data);
        }
    },
    computed: {
        filteredData() {
            return this.data.filter(item => {
                return Object.values(item).some(value => String(value).toLowerCase().includes(this.searchQuery.toLowerCase() || this.typeQuery.toLowerCase() || this.categoryQuery.toLowerCase() || this.bayanQuery.toLowerCase()));
            });
        }
    },
    components: { StatusTemplateComponent, StatusTemplateComponent }
}
</script>

<template>
    <div class="table-container box-shadow overflow-auto px-4" v-if="this.standalone">
        <div class="table-header p-4">
            <div class="row w-100 m-auto align-items-end">
                <div class="col-lg-6">
                    <div class="tracking-no secondary-bg p-0 px-2 w-auto">
                        <p class="text-white m-0" >Tracking Number: {{ data.tracking_id }}</p>
                    </div>
                    <h3 class="fw-bold">{{ data.title }}</h3>
                    <div class="row">
                        <div class="col-auto ">
                            <h6 class="fw-semibold">Bayan: <span>{{ data.bayan }}</span></h6>
                        </div>
                        <div class="col-auto ">
                            <h6 class="fw-semibold">Office: <span>{{ data.office }}</span></h6>
                        </div>
                    </div>
                    <h6 class="fw-semibold">Attachments: 
                        <span>
                            <i v-if="data.attachments === 'pdf'" class="bi bi-filetype-pdf fs-3"></i>
                            <i v-if="data.attachments === 'docs'" class="bi bi-file-earmark-word-fill fs-3"></i>
                        </span>
                    </h6>
                </div>
                <div class="col-lg-6 d-flex align-item-end p-0 justify-content-end form-contol-sm " v-if="searchbar">
                    <div class="input-group mb-3">
                        <input type="search" v-model="searchQuery" class=" form-control p-2 rounded-0 border border-end-0" placeholder="Search Documents . . ." >
                        <span class="input-group-text rounded-0 border border-start-0 bg-transparent px-2" >
                            <i class="bi bi-search "></i>
                        </span>
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
                    <tr class="cursor-pointer"  data-bs-toggle="modal" data-bs-target="#tableModal" v-if="data"> 
                        <td v-for="(rows, index) in rows" :key="index">
                            <template v-if="rows === 'status'">
                                <StatusTemplateComponent
                                    :theme="data[rows]"
                                >
                                    <template #status >
                                        {{ data[rows] }}
                                    </template>
                                </StatusTemplateComponent>
                            </template>
                            <template v-else>
                                {{ data[rows] }}
                            </template>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        
    </div>
    <div class="table-container overflow-auto" v-if="!this.standalone">
        <div class="table-header">
            <div class="row w-100 m-auto align-items-end">
                <div class="col-lg-6">
                    <div class="tracking-no secondary-bg p-0 px-2 w-auto">
                        <p class="text-white m-0" >Tracking Number: {{ data.tracking_id }}</p>
                    </div>
                    <h3 class="fw-bold">{{ data.title }}</h3>
                    <div class="row">
                        <div class="col-auto ">
                            <h6 class="fw-semibold">Bayan: <span>{{ data.bayan }}</span></h6>
                        </div>
                        <div class="col-auto ">
                            <h6 class="fw-semibold">Office: <span>{{ data.office }}</span></h6>
                        </div>
                    </div>
                    <h6 class="fw-semibold">Attachments: 
                        <span>
                            <i v-if="data.attachments === 'pdf'" class="bi bi-filetype-pdf fs-3"></i>
                            <i v-if="data.attachments === 'docs'" class="bi bi-file-earmark-word-fill fs-3"></i>
                        </span>
                    </h6>
                </div>
                <div class="col-lg-6 d-flex align-item-end p-0 justify-content-end form-contol-sm " v-if="searchbar">
                    <div class="input-group mb-3">
                        <input type="search" v-model="searchQuery" class=" form-control p-2 rounded-0 border border-end-0" placeholder="Search Documents . . ." >
                        <span class="input-group-text rounded-0 border border-start-0 bg-transparent px-2" >
                            <i class="bi bi-search "></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="table-body px-2 pt-0">
            <table class="table w-100">
                <thead>
                    <tr >
                        <th v-for="(item, index) in header" :key="index" scope="col">{{ item }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="cursor-pointer"  data-bs-toggle="modal" data-bs-target="#tableModal" v-if="data"> 
                        <td v-for="(rows, index) in rows" :key="index">
                            <template v-if="rows === 'status'">
                                <StatusTemplateComponent
                                    :theme="data[rows]"
                                >
                                    <template #status >
                                        {{ data[rows] }}
                                    </template>
                                </StatusTemplateComponent>
                            </template>
                            <template v-else>
                                {{ data[rows] }}
                            </template>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
    .tracking-no{
        max-width: 300px;
    }
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

    .form-contol-sm{
        height: 3rem;
    }
</style>