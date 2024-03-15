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
                this.fetchData(this.searchQuery)
            },
            fetchData(stringData){
                DocumentApiService.fetchOnlineTrackingDocument().then(items => {
                    this.sampletableData = {};
                    for (let item of items) {
                        if (item.document_number === stringData) {
                            this.sampletableData = { ...item };
                            this.hideSearch = false;
                            this.showTable = true;
                            return;
                        }
                    }
                    this.hideSearch = false;
                    this.showTable = true;
                })

                .catch(error => {
                    console.error('', error);
                });
            },
            searchData(stringData){
                if (!stringData) return; 
                this.fetchData(stringData)
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
        }
    }
</script>

<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
        <TemplateContainer class="d-flex align-item-center mb-5 py-5">
            <OnlineTrackingTableComponent 
                :header="tableHeader"
                :data="sampletableData"
                :detailsheader="detailsHeader"
                :detailsrows="detailsRows"
                :rows="tableRows"
                :searchbar="true"
                :standalone="true"
            >

            </OnlineTrackingTableComponent>
    </TemplateContainer>

</template>

<style scoped>


</style>