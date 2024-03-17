<script setup>
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';
    import OnlineTrackingTableComponent from '@/components/OnlineTrackingTableComponent.vue';
    import PublicUserApiService from '@/services/PublicUserApiService';

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
            handleRowData(data){
                this.rowData = data
                this.showModalTable = true
            },
            handleSearchQuery(){
                if (!this.searchQuery) return; 
                this.fetchData(this.searchQuery)
            },
            fetchData(){
                // PublicUserApiService.getAuthUser().then(items => {
                //     this.tableData = [];
                //     console.log(items)
                // })

                // .catch(error => {
                //     console.error('', error);
                // });
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
                :header="tableHeader"
                :data="tableData"
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