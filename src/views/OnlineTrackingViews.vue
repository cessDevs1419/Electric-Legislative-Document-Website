<script setup>
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';
    import OnlineTrackingTemplateComponent from '@/components/OnlineTrackingTemplateComponent.vue'
    import OnlineTrackingTableComponent from '@/components/OnlineTrackingTableComponent.vue';
    import ESubmissionFormComponent from '@/components/ESubmissionFormComponent.vue';
</script>
<script>
    export default {
        data(){
            return {
                tableHeader: [
                    'No.', 
                    'Status', 
                    'Documents',
                    'Division',
                    'Date',
                    'Time',
                ],
                tableRows: [
                    'no',
                    'status',
                    'description',
                    'division',
                    'date',
                    'time',
                ],
                tableData:  [
                    {
                        no: '01',
                        tracking_id: 'trckid1',
                        title: 'Document of the Philippines',
                        office: 'office1',
                        bayan: 'quezon prov',
                        attachments: 'pdf',
                        division: 'Receiving',
                        date: '2021-01-01',
                        time: '12:00:00',
                        status: 'Received',
                        description: 'description',
                    },
                    {
                        no: '02',
                        tracking_id: 'trckid1',
                        title: 'Document of the Philippines',
                        office: 'office1',
                        bayan: 'quezon prov',
                        attachments: 'pdf',
                        division: 'Sorting Office',
                        date: '2021-01-01',
                        time: '12:00:00',
                        status: 'Endorsed',
                        description: 'description',
                        breakdown: [
                            {
                                description: 'On process for endorsement',
                                division: 'Sorting Office',
                                date: '2021-02-29',
                                time: '12:00:00',
                            },
                            {
                                description: 'On final stage',
                                division: 'Receiving',
                                date: '2021-03-01',
                                time: '12:00:00',
                            }
                        ]
                    }
                ],
                rowData: Object
            }
        },
        methods: {
            handleRowData(data){
                this.rowData = data
                console.log(data)
            }
        }
    }
</script>

<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainer class=" mt-lg-0 mb-5">
        <!-- Search bar  -->
        <!-- 
            <div class=" w-100 text-center mb-5">
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
                <input type="text" class="form-control p-2 px-3" placeholder="Search Tracking Number Here . . . " >
                <span class="input-group-text linear-primary-bg px-3" >
                    <i class="bi bi-search p-2 text-white fs-3"></i>
                </span>
            </div>
        </div> -->

        <!-- Table  -->
        <!-- <OnlineTrackingTemplateComponent
            :header="tableHeader"
            :data="tableData"
            :rows="tableRows"
            :searchbar="true"
        >

        </OnlineTrackingTemplateComponent> -->
        <OnlineTrackingTableComponent
            :header="tableHeader"
            :data="tableData"
            :rows="tableRows"
            @row-click-data="handleRowData"
        >

        </OnlineTrackingTableComponent>

        
    </TemplateContainer>
    <div class="modal fade" id="tableModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content rounded-0 p-2">
                <div class="modal-header d-flex align-item-center border-0">
                    
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <OnlineTrackingTemplateComponent
                        :header="tableHeader"
                        :data="rowData"
                        :rows="tableRows"
                        :standalone="false"
                    >

                    </OnlineTrackingTemplateComponent>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .input-group{
        max-width: 1000px;
    }
</style>