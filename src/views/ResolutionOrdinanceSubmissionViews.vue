<script setup>
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';
    import OnlineTrackingTableComponent from '@/components/OnlineTrackingTableComponent.vue';
    import PublicUserApiService from '@/services/PublicUserApiService';
    import EmptySubmissionComponent from '@/components/EmptySubmissionComponent.vue';
    import TableComponent from '@/components/TableComponent.vue';
    import DocumentApiService from '@/services/DocumentApiService';
    import OnlineTrackingTemplateComponent from '@/components/OnlineTrackingTemplateComponent.vue';

</script>
<script>
    export default {
        data(){
            return {
                tableHeader: [
                    'Type',
                    'Bayan', 
                    'Title', 
                    'Year',
                    'Category',
                    'PDF',
                ],
                tableRows: [
                    'type_name',
                    'bayan_name',
                    'title',
                    'year',
                    'category_name',
                    'attachments',
                ],
                detailsHeader: [
                    'No',
                    'Process', 
                    'Title', 
                    'Date',
                    'Time',
                ],
                detailsRows: [
                    'process_name',
                    'title',
                    'date',
                    'time',
                ],
                logsRows: [
                    'name',
                    'old_value',
                    'new_value',
                    'remarks',
                ],
                tableData: [

                ],
                rowData: Object,
                rowTrackingData: Object,
                showModalTable: false,
                searchQuery: '',
                showTable: false,
                hideSearch: true,
            }
        },
        methods: {
            getRowData(item){
                this.rowData = {}
                this.rowData = item
                this.showTable = true
            },
            fetchData(){
                DocumentApiService.fetchMyDocument()
                .then(data => {
                    this.tableData = []
                    this.tableData.push(...data);
                })
                .catch(error => {
                    console.error('Error fetching document:', error);
                });  
            },
            openPdf(file) {
                window.open(file, '_blank');
            },
            checkIfNotNull(attachments) {
                console.log(attachments);
                return attachments && attachments.length > 0; 
            }
        },
        created(){
            this.fetchData()
        }
    }
</script>

<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
        <TemplateContainer class="d-flex align-item-center mb-5">
            <OnlineTrackingTableComponent 
                v-if="tableData && tableData.length !== 0"
            >
                <TableComponent
                    :header="tableHeader"
                    :data="tableData"
                    :rows="tableRows"
                    :standalone="true"
                    :itemsPerPage="10"
                    @row-click-data="getRowData"
                ></TableComponent>
            </OnlineTrackingTableComponent >

            <EmptySubmissionComponent v-else>

            </EmptySubmissionComponent>
        </TemplateContainer>

        <div class="modal fade" id="tableModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content rounded-0 p-2">
                    <div class="modal-header d-flex align-item-center border-0">
                        <h4 class="d-flex align-items-center fw-bold"><span class="vertical-line"></span>Document Logs</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-0">
    
                        <OnlineTrackingTemplateComponent 
                            v-if="showTable"
                            :header="detailsHeader"
                            :data="rowData"
                            :rows="detailsRows"
                            :detailsrows="logsRows"
                            :standalone="false"
                        >
                
                        </OnlineTrackingTemplateComponent>
                    </div>
                </div>
            </div>
        </div>
</template>

<style scoped>


</style>