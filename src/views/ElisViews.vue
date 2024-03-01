<script setup>
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import SectionHeaderComponent from '@/components/SectionHeaderComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';
    import TableComponent from '@/components/TableComponent.vue';
    import DocumentApiService from '@/services/DocumentApiService';

</script>

<script>
    export default {
        data(){
            return{
                tableHeader: [
                    'Type', 
                    'Bayan',
                    'Title',
                    'Date',
                    'Category',
                    'PDF'
                ],
                tableRows: [
                    'type_name',
                    'bayan_name',
                    'title',
                    'enactment_date',
                    'category_name' ,
                    'attachments' ,

                ],
                tableData:[],
                rowData: Array
            }
        },
        methods: {
            getRowData(item){
                this.rowData = item
            },
            fetchData(){
                DocumentApiService.fetch()
                .then(data => {
                    this.tableData = []
                    this.tableData.push(...data);
                })
                .catch(error => {
                    console.error('Error fetching categories:', error);
                });  
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
    <TemplateContainer class="mb-5 px-3 px-lg-0">
        <div class="title mb-5 mt-lg-0">
            <SectionHeaderComponent  type="inside">
                <template #firstWord>Legislative</template>
                <template #secondWord>Documents</template>
            </SectionHeaderComponent>
            <p>Reminder: Anyone who needs the certified true copy of ordinances/resolutions or needs documents which are not posted in the website, kindly visit and request the documents at the SP-Records Division.</p>
        </div>
        <TableComponent
            :header="tableHeader"
            :data="tableData"
            :rows="tableRows"
            @row-click-data="getRowData"
        ></TableComponent>
    </TemplateContainer>
    <div class="modal fade" id="tableModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content rounded-0 p-2">
                <div class="modal-header d-flex align-item-center border-0">
                    <h4 class="d-flex align-items-center fw-bold"><span class="vertical-line"></span>Document Overview</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row mb-3 ">
                        <div class="col-lg-6 m-auto mt-0">
                            <h5 class="fw-semibold">Title</h5>
                            <p v-if="rowData.title">{{ rowData.title }}</p>
                            <p v-else>N/A</p>
                        </div>
                        <div class="col-lg-6 m-auto mt-0">
                            <h5 class="fw-semibold">Author/Sponsorship</h5>
                            <p v-if="rowData.author">{{ rowData.author }}</p>
                            <p v-else>N/A</p>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-lg-4 m-auto mt-0">
                            <h5 class="fw-semibold">Type</h5>
                            <p v-if="rowData.type_name">{{ rowData.type_name }}</p>
                            <p v-else>N/A</p>
                        </div>
                        <div class="col-lg-4 m-auto mt-0">
                            <h5 class="fw-semibold">Date of Enactment</h5>
                            <p v-if="rowData.enactment_date || enactment_date2 ">{{ rowData.enactment_date || enactment_date2 }}</p>
                            <p v-else>N/A</p>
                        </div>
                        <div class="col-lg-4 m-auto mt-0">
                            <h5 class="fw-semibold">Session Type</h5>
                            <p v-if="rowData.session_type">{{ rowData.session_type }}</p>
                            <p v-else>N/A</p>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-lg-2 mt-0">
                            <h5 class="fw-semibold">No</h5>
                            <p v-if="rowData.no">{{ rowData.no }}</p>
                            <p v-else>N/A</p>
                        </div>
                        <div class="col-lg-2 mt-0">
                            <h5 class="fw-semibold">Year</h5>
                            <p v-if="rowData.year">{{ rowData.year }}</p>
                            <p v-else>N/A</p>
                        </div>
                        <div class="col-lg-3 mt-0">
                            <h5 class="fw-semibold">Council No.</h5>
                            <p v-if="rowData.council_no">{{ rowData.council_no }}</p>
                            <p v-else>N/A</p>
                        </div>
                        <div class="col-lg-2 mt-0">
                            <h5 class="fw-semibold">JA/JS</h5>
                            <p v-if="rowData.ja_js">{{ rowData.ja_js }}</p>
                            <p v-else>N/A</p>
                        </div>
                        <div class="col-lg-3 mt-0">
                            <h5 class="fw-semibold">Session No</h5>
                            <p v-if="rowData.session_no">{{ rowData.session_no }}</p>
                            <p v-else>N/A</p>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-lg-3 mt-0">
                            <h5 class="fw-semibold">Category</h5>
                            <p v-if="rowData.category_name">{{ rowData.category_name }}</p>
                            <p v-else>N/A</p>
                        </div>
                        <div class="col-lg-2 mt-0">
                            <h5 class="fw-semibold">Bayan</h5>
                            <p v-if="rowData.bayan_name">{{ rowData.bayan_name }}</p>
                            <p v-else>N/A</p>
                        </div>
                        <div class="col-lg-3 mt-0">
                            <h5 class="fw-semibold">PDF</h5>
                            <span v-if="rowData.attachments === null">
                                <!-- <i v-if="rowData.pdf === 'pdf' || rowData.pdf === 'PDF'" class="bi bi-filetype-pdf fs-3"></i>
                                <i v-if="rowData.pdf === 'docs'" class="bi bi-file-earmark-word-fill fs-3"></i> -->
                                
                            </span>
                            <span v-else>
                                {{ rowData.not_show_attachments_desc }}
                            </span>
                        </div>
                        <div class="col-lg-4 mt-0">
                            <h5 class="fw-semibold">Remarks</h5>
                            <p v-if="rowData.remarks">{{ rowData.remarks }}</p>
                            <p v-else>N/A</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
    .vertical-line{
        display: inline-block;
        width: 17px;
        height: 40px;
        border-left: 17px solid var(--primary-color); /* Adjust thickness and color as needed */
        margin-right: 10px; 
    }
</style>