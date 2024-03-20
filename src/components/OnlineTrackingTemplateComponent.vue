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
            },
            rows: {
                type: Array,
            },
            data: {
                type: Object,
            },
            detailsheader: {
                type: Array,
            },
            detailsrows: {
                type: Array,
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
                return attachments && attachments.length > 0; 
            },
            getDate(dateTime) {
                const date = new Date(dateTime);
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                return date.toLocaleDateString('en-US', options);
            },
            getTime(time) {
                const date = new Date(time);

                const options = { hour: 'numeric', minute: 'numeric', hour12: true };
                return date.toLocaleTimeString('en-US', options);
            },
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
                    console.log()
                    this.search();
                }
            }
        },
        components: { StatusTemplateComponent, StatusTemplateComponent }
    }
</script>

<template>
    <div class="table-container overflow-auto "  :class="{'box-shadow px-4':this.standalone}">
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
            <ul class="w-100 border list-unstyled d-flex ">
                <li class="primary-bg text-white fw-semibold py-3 m-auto w-100 text-center" v-for="(item, index) in header" :key="index">
                    {{ item }}
                </li>
            </ul>
            <div class="accordion mt-0" id="accordionExample" v-if="data['logs'] && data['logs'].length !== 0">
                <div v-for="(items, index) in data['logs']" :key="index" class=" accordion-item rounded-0 border-top-0 border-end-0 border-start-0" >
                    <button class="btn border border-0 w-100" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse'+index" aria-expanded="false" aria-controls="collapseOne">
                        <ul class="w-100 list-unstyled d-flex ">
                            <li class="py-2 m-auto w-100 grey-font fw-semibold" >
                                {{ index }}
                            </li>
                            <li class="py-2 m-auto w-100" v-for="(row, index) in rows" :key="index">
                                <template v-if="header[3].toLowerCase() === row">
                                    {{ getDate(items[row]) }}
                                </template>
                                <template v-else-if="header[4].toLowerCase()  === row">
                                    {{ getTime(items['date'])  }}
                                </template>
                                <template v-else>
                                    {{ items[row] }}
                                </template>
                            </li>
                        </ul>
                    </button>
                    
                    <div :id="'collapse'+index" class="accordion-collapse mt-0 border-white collapse  " data-bs-parent="#accordionExample">
                        <div class="accordion-body border-white">
                            <!-- <ul class="w-100 border list-unstyled d-flex ">
                                <li class="primary-bg text-white fw-semibold py-3 m-auto w-100 text-center" v-for="(item, index) in detailsheader" :key="index">
                                    {{ item }}
                                </li>
                            </ul> -->
                            <template id="collapse" v-if="items" >
                                <template v-for="(item, ind) in  items['field_names']" :key="ind" >
                                    <ul  class="accordion-collapse d-flex list-unstyled collapse show border-white" data-bs-parent="#accordionExample" > 
                                        <li class="py-0 m-auto w-100 grey-font fw-semibold" >
                                            <div class="d-flex flex-column me-3 align-items-center justify-content-center">
                                                <div class="border-dashed"></div>
                                                <div class="eclipse p-2 rounded-circle"></div>
                                            </div>
                                        </li>
                                        <li class=" py-0 text-center m-auto w-100" v-for="(row, i) in  detailsrows" :key="i" >
                                            <template v-if="row === 'old_value'">
                                                <StatusTemplateComponent
                                                    :theme="item[row]"
                                                    :status_bg_color="item['old_value_color']"
                                                    :status_font_color="item['old_value_text_color']"
                                                >
                                                    <template #status >
                                                        {{ item[row] }}
                                                    </template>
                                                </StatusTemplateComponent>
                                            </template>
                                            <template v-else-if="row === 'new_value'">
                                                <StatusTemplateComponent
                                                    :theme="item[row]"
                                                    :status_bg_color="item['new_value_color']"
                                                    :status_font_color="item['new_value_text_color']"
                                                >
                                                    <template #status >
                                                        {{ item[row] }}
                                                    </template>
                                                </StatusTemplateComponent>
                                            </template>
                                            <template v-else-if="row === 'remarks'">
                                                {{ item[row] || 'N/A' }}
                                            </template>
                                            <p class="mt-2 mb-0" v-else>
                                                {{ item[row] }}
                                            </p>
                                        </li>                        
                                    </ul>
                                </template>
                            </template> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-100 h-100 text-center grey-font" v-else>
                <h1>No Current Logs</h1>
            </div>
        </div>

    </div>
</template>

<style scoped>
    .tracking-no{
        max-width: fit-content;
    }
    .table-body{
        min-width: 1000px;
        width: 100%;
    }

    tbody{
        background: #F2F3F9 !important;
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
        border: 2px dashed var(--gray-divider);
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

