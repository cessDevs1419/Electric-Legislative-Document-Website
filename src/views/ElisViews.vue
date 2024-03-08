<script setup>
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import SectionHeaderComponent from '@/components/SectionHeaderComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';
    import TableComponent from '@/components/TableComponent.vue';
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
                    'type',
                    'bayan',
                    'title',
                    'date',
                    'category' ,
                    'pdf' ,

                ],
                tableData:[
                    {
                        title: '(FP) AN ORDINANCE OPERATIONALIZING FREEDOM OF INFORMATION IN THE CITY OF GENERAL SANTOS, PROVIDING',
                        author: '[Sponsor] Nuñez, Rosalita T., [Sponsor] Balleque, Froebel Kan M, [Sponsor] Yumang, Jose Edmar J, [Sponsor] Rivera, Jane G, [Sponsor] Bagonoc, Elizabeth B., [Sponsor] Acharon, Edgar C',
                        type: 'ORDINANCE',
                        date: 'Feb 27, 2024',
                        session_type: 'Regular Session',
                        no: '69',
                        year: '2024',
                        council_no: '20th',
                        ja: '60',
                        session_no: '60',
                        bayan: 'quezon prov',
                        category: 'Category 1',
                        pdf: 'PDF',
                        remarks: 'For publication: If the document is needed, please visit the SP-Records Division. Thank you!'
                    },
                ],
                rowData: Array
            }
        },
        methods: {
            getRowData(item){
                this.rowData = item
            }
        }
    }
</script>
<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainer class="my-5 py-5 py-xl-0">
        <div class="title mb-5 mt-5 mt-lg-0">
            <SectionHeaderComponent class="mt-5 mt-lg-0" type="inside">
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
                    <div class="row mb-3">
                        <div class="col-lg-6 m-auto">
                            <h5 class="fw-semibold">Title</h5>
                            <p>{{ rowData.title }}</p>
                        </div>
                        <div class="col-lg-6 m-auto">
                            <h5 class="fw-semibold">Author/Sponsorship</h5>
                            <p>{{ rowData.author }}</p>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-lg-4 m-auto">
                            <h5 class="fw-semibold">Type</h5>
                            <p>{{ rowData.type }}</p>
                        </div>
                        <div class="col-lg-4 m-auto">
                            <h5 class="fw-semibold">Date of Enactment</h5>
                            <p>{{ rowData.date }}</p>
                        </div>
                        <div class="col-lg-4 m-auto">
                            <h5 class="fw-semibold">Session Type</h5>
                            <p>{{ rowData.session_type }}</p>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-lg-2">
                            <h5 class="fw-semibold">No</h5>
                            <p>{{ rowData.no }}</p>
                        </div>
                        <div class="col-lg-2">
                            <h5 class="fw-semibold">Year</h5>
                            <p>{{ rowData.year }}</p>
                        </div>
                        <div class="col-lg-3">
                            <h5 class="fw-semibold">Council No.</h5>
                            <p>{{ rowData.council_no }}</p>
                        </div>
                        <div class="col-lg-2">
                            <h5 class="fw-semibold">JA/JS</h5>
                            <p>{{ rowData.ja }}</p>
                        </div>
                        <div class="col-lg-3">
                            <h5 class="fw-semibold">Session No</h5>
                            <p>{{ rowData.session_no }}</p>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-lg-3">
                            <h5 class="fw-semibold">Category</h5>
                            <p>{{ rowData.category }}</p>
                        </div>
                        <div class="col-lg-3">
                            <h5 class="fw-semibold">Bayan</h5>
                            <p>{{ rowData.bayan }}</p>
                        </div>
                        <div class="col-lg-2">
                            <h5 class="fw-semibold">PDF</h5>
                            <p>{{ rowData.pdf }}</p>
                        </div>
                        <div class="col-lg-4">
                            <h5 class="fw-semibold">Remarks</h5>
                            <p>{{ rowData.remarks }}</p>
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