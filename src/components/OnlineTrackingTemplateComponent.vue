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
        },
        search(){
            this.$emit('search-data', this.searchQuery);
        },
        checkIfNotNull(attachments) {
            console.log(attachments);
            return attachments && attachments.length > 0; 
        }
    },
    computed: {
        filteredData() {
            return this.data.filter(item => {
                return Object.values(item).some(value => String(value).toLowerCase().includes(this.searchQuery.toLowerCase() || this.typeQuery.toLowerCase() || this.categoryQuery.toLowerCase() || this.bayanQuery.toLowerCase()));
            });
        }
    },
    watch: {
        searchQuery: function(newSearchQuery) {
            if (newSearchQuery) {
                this.search();
            }
        }
    },
    components: { StatusTemplateComponent, StatusTemplateComponent }
}
</script>

<template>
    <div class="table-container overflow-auto " :class="{'box-shadow px-4':this.standalone}">
        <div class="table-header p-4 px-0" :class="{'px-3': this.standalone}">
            <div class="row w-100 m-auto align-items-end">
                <div class="col-lg-6">
                    <div class="tracking-no secondary-bg p-0 px-2 w-auto">
                        <p class="text-white m-0" >Document Number: {{ data.document_number }}</p>
                    </div>
                    <h3 class="fw-bold">{{ data.title }}</h3>
                    <div class="row">
                        <div class="col-auto ">
                            <h6 class="fw-semibold">Bayan: <span>{{ data.bayan_name }}</span></h6>
                        </div>
                        <div class="col-auto ">
                            <h6 class="fw-semibold">Office: <span>{{ data.office_name }}</span></h6>
                        </div>
                    </div>
                    <h6 class="fw-semibold">Attachments: 
                        <span class="d-flex justify-content-start text-truncate" v-if="checkIfNotNull(data.attachments)">
                            <i v-for="(items, index) in data.attachments" @click="openPdf(items)" :href="items" :key="index" class="cursor-pointer mx-2 bi bi-filetype-pdf fs-3">
                            </i>    
                        </span>
                        <span v-else>
                            {{ data.not_show_attachments_desc || 'No attachments available' }}
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
        <div class="table-body p-4 pt-0" :class="{'px-2':!this.standalone}">
            <table class="table w-100">
                <thead>
                    <tr >
                        <th v-for="(item, index) in header" :key="index" scope="col">{{ item }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="cursor-pointer" @click="getData(data)" :class="{'border-white' : data['breakdown']}" data-bs-toggle="modal" data-bs-target="#tableModal" v-if="data"> 
                        <td v-for="(rows, index) in rows" :key="index">
                            <template v-if="rows === 'status_name'">
                                <StatusTemplateComponent
                                    :theme="data[rows]"
                                    :status_bg_color="data['status_color']"
                                    :status_font_color="data['status_text_color']"
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
                    <template v-if="data['breakdown']" >
                        <tr class="cursor-pointer" :class="{'border-white border' : data['breakdown']}" v-for="(item, index) in  data['breakdown']" :key="index" > 
                            <td class="p-1" >
                                <div class="d-flex flex-column align-items-center justify-content-center">
                                    <div class="border-dashed"></div>
                                    <div class="eclipse p-2 rounded-circle"></div>
                                </div>
                            </td>
                            <td class="p-1" >
                                {{ item.status_name }}
                            </td>
                            <td class="p-1" >
                                {{ item.description }}
                            </td>
                            <td class="p-1" >
                                {{ item.division }}
                            </td>
                            <td class="p-1" >
                                {{ item.date }}
                            </td>
                            <td class="p-1" >
                                {{ item.time }}
                            </td>
                        </tr>
                        
                    </template>
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

    .border-dashed{
        border: 3px dashed var(--gray-divider);
        width: 0;
        height: 1rem;
    }

    .eclipse{
        width: 1rem;
        height: 1rem;
        background: #286BAE;
        filter: drop-shadow(1px 1px 10px #1271d1);
    }
</style>