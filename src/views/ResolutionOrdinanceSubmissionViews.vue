<script setup>
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';
    import OnlineTrackingTableComponent from '@/components/OnlineTrackingTableComponent.vue';
    import PublicUserApiService from '@/services/PublicUserApiService';
    import EmptySubmissionComponent from '@/components/EmptySubmissionComponent.vue';
    import TableComponent from '@/components/TableComponent.vue';
import DocumentApiService from '@/services/DocumentApiService';

</script>
<script>
    export default {
        data(){
            return {
                tableHeader: [
                    'No',
                    'Process', 
                    'Title', 
                    'Date',
                    'Time',
                ],
                tableRows: [
                    'process_name',
                    'title',
                    'date',
                    'time',
                ],
                detailsHeader: [
                    'Field name', 
                    'Old Value', 
                    'New Value',
                    'Remarks',
                ],
                detailsRows: [
                    'name',
                    'old_value',
                    'new_value',
                    'remarks',
                ],
                tableData: [],
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
                this.rowData = item
            },
            handleRowData(data){
                this.rowData = data
                this.showModalTable = true
            },
            handleSearchQuery(){
                if (!this.searchQuery) return; 
                this.fetchData(this.searchQuery)
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
            <!-- <OnlineTrackingTableComponent 

                :header="tableHeader"
                :data="tableData"
                :detailsheader="detailsHeader"
                :detailsrows="detailsRows"
                :rows="tableRows"
                :searchbar="true"
                :standalone="true"
            >

            </OnlineTrackingTableComponent > -->
            <TableComponent
                v-if="tableData && tableData.length > 0"
                :header="tableHeader"
                :data="tableData"
                :rows="tableRows"
                @row-click-data="getRowData"
            ></TableComponent>
            <EmptySubmissionComponent v-else>

            </EmptySubmissionComponent>
        </TemplateContainer>

</template>

<style scoped>


</style>