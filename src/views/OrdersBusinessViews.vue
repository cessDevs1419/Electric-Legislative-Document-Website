<script setup>
    import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
    import TemplateContainer from '@/components/TemplateContainer.vue';
    import SidebarListComponent from '@/components/SidebarListComponent.vue';
    import SectionHeaderComponent from '@/components/SectionHeaderComponent.vue';
    
</script>

<script>
    import PaginationListComponentVue from '@/components/PaginationListComponent.vue';

    export default {
        components: {
            PaginationListComponentVue
        },
        data() {
            return {
                items: [
                        {
                        title: 'Order Business – 69th Regular Session of the 20th Sangguniang Panlungsod of Quezon Province',
                        description: 'Lorem ipsum dolor sit amet consectetur. A vitae iaculis sit pharetra diam risus elementum. Sit ut mi malesuada blandit eu. Arcu leo ac felis tellus consequat at ut euismod. At quis tellus commodo eu vehicula augue.Lorem ipsum dolor sit amet consectetur. A vitae iaculis sit pharetra diam risus elementum. Sit ut........',
                        date: 'February 15, 2024',
                        link: 'http://example.com',
                        linkTitle: 'Sample 1'
                        },
                        {
                        title: 'Another Dynamic Item2',
                        description: 'Another description Lorem ipsum dolor sit amet consectetur. A vitae iaculis sit pharetra diam risus elementum. Sit ut mi malesuada blandit eu. Arcu leo ac felis tellus consequat at ut euismod. At quis tellus commodo eu vehicula augue.Lorem ipsum dolor sit amet consectetur. A vitae iaculis sit pharetra diam risus elementum. Sit ut........',
                        date: 'February 20, 2024',
                        link: 'http://example.com/another',
                        linkTitle: 'Sample 2'
                        },
                        {
                        title: 'Another Dynamic Item3',
                        description: 'Another description Lorem ipsum dolor sit amet consectetur. A vitae iaculis sit pharetra diam risus elementum. Sit ut mi malesuada blandit eu. Arcu leo ac felis tellus consequat at ut euismod. At quis tellus commodo eu vehicula augue.Lorem ipsum dolor sit amet consectetur. A vitae iaculis sit pharetra diam risus elementum. Sit ut........',
                        date: 'February 20, 2024',
                        link: 'http://example.com/another',
                        linkTitle: 'Sample 2'
                        },
                        {
                        title: 'Another Dynamic Item4',
                        description: 'Another description Lorem ipsum dolor sit amet consectetur. A vitae iaculis sit pharetra diam risus elementum. Sit ut mi malesuada blandit eu. Arcu leo ac felis tellus consequat at ut euismod. At quis tellus commodo eu vehicula augue.Lorem ipsum dolor sit amet consectetur. A vitae iaculis sit pharetra diam risus elementum. Sit ut........',
                        date: 'February 20, 2024',
                        link: 'http://example.com/another',
                        linkTitle: 'Sample 2'
                        },
                        {
                        title: 'Another Dynamic Item5',
                        description: 'Another description Lorem ipsum dolor sit amet consectetur. A vitae iaculis sit pharetra diam risus elementum. Sit ut mi malesuada blandit eu. Arcu leo ac felis tellus consequat at ut euismod. At quis tellus commodo eu vehicula augue.Lorem ipsum dolor sit amet consectetur. A vitae iaculis sit pharetra diam risus elementum. Sit ut........',
                        date: 'February 20, 2024',
                        link: 'http://example.com/another',
                        linkTitle: 'Sample 2'
                        },
                        {
                        title: 'Another Dynamic Item6',
                        description: 'Another description Lorem ipsum dolor sit amet consectetur. A vitae iaculis sit pharetra diam risus elementum. Sit ut mi malesuada blandit eu. Arcu leo ac felis tellus consequat at ut euismod. At quis tellus commodo eu vehicula augue.Lorem ipsum dolor sit amet consectetur. A vitae iaculis sit pharetra diam risus elementum. Sit ut........',
                        date: 'February 20, 2024',
                        link: 'http://example.com/another',
                        linkTitle: 'Sample 2'
                        },
                        {
                        title: 'Another Dynamic Item8',
                        description: 'Another description Lorem ipsum dolor sit amet consectetur. A vitae iaculis sit pharetra diam risus elementum. Sit ut mi malesuada blandit eu. Arcu leo ac felis tellus consequat at ut euismod. At quis tellus commodo eu vehicula augue.Lorem ipsum dolor sit amet consectetur. A vitae iaculis sit pharetra diam risus elementum. Sit ut........',
                        date: 'February 20, 2024',
                        link: 'http://example.com/another',
                        linkTitle: 'Sample 2'
                        }
                        // Add more items as needed
                ]
            };
        },
        mounted() {
            // Log the items prop when the component is mounted
        
        }
    }
</script>


<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainer>
        <div class="row g-5 w-100 m-auto mb-5">
            <div class="col-lg-7 px-md-5 ">
                <SectionHeaderComponent type="outside" class="mb-5" >
                    <template #firstWord >Order of</template>
                    <template #secondWord >Business</template>
                </SectionHeaderComponent>
                <PaginationListComponentVue 
                    :items="items" 
                    :itemsPerPage="4"
                    :listType="'orderList'"
                    :title="''"
                >

                </PaginationListComponentVue>
            </div>
            <div class="col-lg-5 px-0">
                <SidebarListComponent
                    :listType="'membersList'"
                >
                    <template #heading>The 20th Sangguniang Panlungsod Members</template>
                </SidebarListComponent>
                <SidebarListComponent
                    :listType="'hotlineList'"
                >
                    <template #heading>Quezon Province Hotlines</template>
                </SidebarListComponent>

            </div>
        </div>
    </TemplateContainer>
</template>

<style scoped>
</style>