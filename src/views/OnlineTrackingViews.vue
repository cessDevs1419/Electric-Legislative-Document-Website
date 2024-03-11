<script setup>
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';
    import OnlineTrackingTemplateComponent from '@/components/OnlineTrackingTemplateComponent.vue'
    import OnlineTrackingTableComponent from '@/components/OnlineTrackingTableComponent.vue';
    import ESubmissionFormComponent from '@/components/ESubmissionFormComponent.vue';
    import DocumentApiService from '@/services/DocumentApiService';


</script>
<script>
    export default {
        data(){
            return {
                tableHeader: [
                    'No.', 
                    'Status', 
                    'Description',
                    'Division',
                    'Date',
                    'Time',
                ],
                tableRows: [
                    'no',
                    'status_name',
                    'type_name',
                ],
                tableData:  [],
                sampletableData: {},
                rowData: Object,
                rowTrackingData: Object,
                showModalTable: false,
                searchQuery: '',
                showTable: false,
                hideSearch: true,
            }
        },
        methods: {
            handleRowData(data){
                this.rowData = data
                this.showModalTable = true
            },
            handleSearchQuery(){
                if (!this.searchQuery) return; 
                this.sampletableData = {};
                for (let item of this.tableData) {
                    if (item.document_number === this.searchQuery) {
                        this.sampletableData = { ...item };
                        this.hideSearch = false;
                        this.showTable = true;
                        return;
                    }
                }

                this.hideSearch = false;
                this.showTable = true;

            },
            fetchData(){
                DocumentApiService.fetchOnlineTrackingDocument().then(item => {
                    this.tableData = []
                    this.tableData.push(...item);
                })
                .catch(error => {
                    console.error('', error);
                });
            },
            searchData(stringData){
                if (!stringData) return; 
                this.sampletableData = {};
                for (let item of this.tableData) {
                    if (item.document_number === stringData) {
                        this.sampletableData = { ...item };
                        this.hideSearch = false;
                        this.showTable = true;
                        return;
                    }
                }


                this.hideSearch = false;
                this.showTable = true;

            },
            handleRowTrackingData(data){
                console.log(data)
                this.rowTrackingData = data
            },
            openPdf(file) {
                window.open(file, '_blank');
            },
            checkIfNotNull(attachments) {
                console.log(attachments);
                return attachments && attachments.length > 0; // Return true if attachments is not null and not empty
            }
        },
        created() {
            this.fetchData(); 
        }
    }
</script>

<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainer class=" mt-lg-0 mt-5  pb-5 mb-5">
        <!-- Search bar  -->
        
        <div class=" w-100 text-center mb-5 px-2"  v-if="hideSearch" >
            <div class="title mb-5 ">
                <img class="company-logo primary-bg rounded-circle  border-0 mx-auto mb-2" src="../assets/images/circle.png" alt="" srcset="">
                <h1 class="tertiary-font fw-bold">
                    THE SANGGUNIANG PANLUNGSOD OF QUEZON
                </h1>
                <h3 class="tertiary-font">
                    Search for on process Resolution and Ordinance
                </h3>
            </div>
            <div class="input-group mb-3 mx-auto">
                <input type="text" class="form-control p-2 px-3" v-model="searchQuery" placeholder="Search By Document Number Here . . . " >
                <button @click="handleSearchQuery" class="input-group-text linear-primary-bg px-3" >
                    <i class="bi bi-search p-2 text-white fs-3"></i>
                </button>
            </div>
        </div>

        <!-- Table  -->

        <OnlineTrackingTemplateComponent 
            v-if="showTable"
            :header="tableHeader"
            :data="sampletableData"
            :rows="tableRows"
            :searchbar="true"
            :standalone="true"
            @search-data="searchData"
            @row-click-data="handleRowTrackingData"
        >

        </OnlineTrackingTemplateComponent>

        <!-- <OnlineTrackingTableComponent
            :header="tableHeader"
            :data="tableData"
            :rows="tableRows" 
            @row-click-data="handleRowData"
        >

        </OnlineTrackingTableComponent> -->

        
    </TemplateContainer>
    <div class="modal fade" id="tableModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content rounded-0 p-2">
                <div class="modal-header d-flex align-item-center border-0">
                    <h4 v-if="rowTrackingData" class="d-flex align-items-center fw-bold"><span class="vertical-line"></span>Document Overview</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <OnlineTrackingTemplateComponent
                        v-if="showModalTable"
                        :header="tableHeader"
                        :data="rowData"
                        :rows="tableRows"
                        :standalone="false"
                    >

                    </OnlineTrackingTemplateComponent>

                    <div class="w-100" v-if="rowTrackingData">
                        <div class="d-flex px-3 flex-wrap align-items-start justify-content-between w-100 m-auto mb-4 ">
                            <div class=" mt-0">
                                <h5 class="fw-semibold">Title</h5>
                                <p v-if="rowTrackingData.title">{{ rowTrackingData.title }}</p>
                                <p v-else>N/A</p>
                            </div>
                            <div class=" mt-0">
                                <h5 class="fw-semibold">Type</h5>
                                <p v-if="rowTrackingData.type_name">{{ rowTrackingData.type_name }}</p>
                                <p v-else>N/A</p>
                            </div>
                            <div class=" mt-0">
                                <h5 class="fw-semibold">Category</h5>
                                <p v-if="rowTrackingData.category_name">{{ rowTrackingData.category_name }}</p>
                                <p v-else>N/A</p>
                            </div>
                        </div>  
                        <div class="d-flex px-3 flex-wrap align-items-start justify-content-between w-100 m-auto mb-4 " >
                            <div class=" mt-0">
                                <h5 class="fw-semibold">No</h5>
                                <p class="m-0" v-if="rowTrackingData.no">{{ rowTrackingData.no }}</p>
                                <p class="m-0" v-else>N/A</p>
                            </div>
                            <div class=" mt-0">
                                <h5 class="fw-semibold">Year</h5>
                                <p class="m-0" v-if="rowTrackingData.year">{{ rowTrackingData.year }}</p>
                                <p class="m-0" v-else>N/A</p>
                            </div>
                            <div class="mt-0">
                                <h5 class="fw-semibold">Bayan</h5>
                                <p class="m-0" v-if="rowTrackingData.bayan_name">{{ rowTrackingData.bayan_name }}</p>
                                <p class="m-0" v-else>N/A</p>
                            </div>
                            <div class="mt-0">
                                <h5 class="fw-semibold">Office</h5>
                                <p class="m-0" v-if="rowTrackingData.office_name">{{ rowTrackingData.office_name }}</p>
                                <p class="m-0" v-else>N/A</p>
                            </div>
                            <div class="mt-0" v-if="rowTrackingData.show_records_division_data" >
                                <h5 class="fw-semibold">PDF</h5>
                                <span class="d-flex justify-content-start text-truncate" v-if="checkIfNotNull(rowTrackingData.attachments)">
    
                                    <i v-for="(items, index) in rowTrackingData.attachments" @click="openPdf(items)" :href="items" :key="index" class="cursor-pointer mx-2 bi bi-filetype-pdf fs-3">
                                    </i>    
                                </span>
                                <span v-else>
                                    {{ rowTrackingData.not_show_attachments_desc || 'No attachments available' }}
                                </span>
                            </div>
                        </div>   
                        <div class="d-flex px-3 flex-wrap align-items-start justify-content-between w-100 m-auto mb-4 " v-if="rowTrackingData.show_legislative_division_data" >
                            <div class=" mt-0">
                                <h5 class="fw-semibold">Session Type</h5>
                                <p v-if="rowTrackingData.session_type">{{ rowTrackingData.session_type }}</p>
                                <p v-else>N/A</p>
                            </div>
                            <div class=" mt-0">
                                <h5 class="fw-semibold">Session No</h5>
                                <p v-if="rowTrackingData.session_no">{{ rowTrackingData.session_no }}</p>
                                <p v-else>N/A</p>
                            </div>
                            <div class=" mt-0">
                                <h5 class="fw-semibold">JA/JS</h5>
                                <p v-if="rowTrackingData.ja_js">{{ rowTrackingData.ja_js }}</p>
                                <p v-else>N/A</p>
                            </div>
                            <div class=" mt-0">
                                <h5 class="fw-semibold">Date of Enactment</h5>
                                <p v-if="rowTrackingData.enactment_date">{{ rowTrackingData.enactment_date || enactment_date2 }}</p>
                                <p v-else>N/A</p>
                            </div>
                        </div>    
                        <div class="d-flex px-3 flex-wrap align-items-start justify-content-between w-100 m-auto mb-4 "  >    
                            <div class=" mt-0" >
                                <h5 class="fw-semibold">Endorsed to</h5>
                                <p v-if="rowTrackingData.endorse_to_office_name">{{ rowTrackingData.endorse_to_office_name }}</p>
                                <p v-else>N/A</p>
                            </div>  
                            <div class=" mt-0" >
                                <h5 class="fw-semibold">Pages</h5>
                                <p v-if="rowTrackingData.pages">{{ rowTrackingData.pages }}</p>
                                <p v-else>N/A</p>
                            </div>        
                            <div class=" mt-0" v-if="rowTrackingData.show_legislative_division_data" >
                                <h5 class="fw-semibold">Council No.</h5>
                                <p v-if="rowTrackingData.council_no">{{ rowTrackingData.council_no }}</p>
                                <p v-else>N/A</p>
                            </div>   
                            <div class=" mt-0" v-if="rowTrackingData.show_legislative_division_data" >
                                <h5 class="fw-semibold" >Author/Sponsorship</h5>
                                <p class="m-0" v-if="rowTrackingData.author">{{ rowTrackingData.author }}</p>
                                <p class="m-0" v-else>N/A</p>
                            </div>
                        </div>    

                        <div class=" w-100 m-auto px-2 mb-4" v-if="rowTrackingData.requirements && rowTrackingData.requirements.length > 0" >
                            <table class="table ">
                                <thead>
                                    <tr>
                                      <th class="p-0 px-2">
                                        <h5 class="fw-semibold" >Requirements</h5>
                                      </th>
                                      <th class="p-0 px-2" >
                                        <h5 class="fw-semibold" >Files</h5>
                                      </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr  v-for="(items, index) in rowTrackingData.requirements" :key="index">
                                        <td class="p-0 px-2">{{items.requirement_name}}</td>
                                        <td class="p-0 px-2">
                                            <ul v-if="items.files && items.files.length > 0">
                                                <li v-for="(file, index) in items.files" :key="index">
                                                    {{ file }}
                                                </li>
                                            </ul>
                                            <template v-else>
                                                N/A
                                            </template>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class=" w-100 m-auto px-3 mb-4" v-if="rowTrackingData.show_legislative_division_data" >
                            <div class=" mt-0" >
                                <h5 class="fw-semibold" >Schedule</h5> 
                                <ul v-if="rowTrackingData.schedules && rowTrackingData.schedules.length > 0" >
                                    <li v-for="(scheds, index) in rowTrackingData.schedules" :key="index">
                                        {{ scheds}}
                                    </li>
                                </ul>
                                <p class="m-0" v-else>N/A</p>
                            </div>
                        </div>

                        <div class="row w-100 m-auto px-1" v-if="rowTrackingData.show_legislative_division_data" >
                            <div class="w-100 mt-0">
                                <h5 class="fw-semibold">Remarks</h5>
                                <p v-if="rowTrackingData.remarks">{{ rowTrackingData.remarks }}</p>
                                <p v-else>N/A</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
    .input-group{
        max-width: 1000px;
    }

    tr{
        padding: 0;
        border: white;
    }
</style>