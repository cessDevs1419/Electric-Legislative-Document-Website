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
                ]

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
        ></TableComponent>
    </TemplateContainer>
    <div class="modal fade" id="tableModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    
                </div>
            </div>
        </div>
    </div>

</template>