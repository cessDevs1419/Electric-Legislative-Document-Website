<script setup>
     import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
     import TemplateContainer from '@/components/TemplateContainer.vue';
     import SidebarListComponent from '@/components/SidebarListComponent.vue';
</script>

<script>
    export default {
        props: {
            items: {
            type: Array,
            required: true
            },
            listType: {
            type: String,
            required: true
            }
        },
    mounted() {
        // Log the items prop when the component is mounted
    
    }
    }
</script>


<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <TemplateContainer>
        <div class="row g-3 my-3">
            <div class="col-lg-7">

            </div>
            <div class="col-lg-5">
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