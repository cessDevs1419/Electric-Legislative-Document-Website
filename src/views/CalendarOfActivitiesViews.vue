<script setup>
     import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
     import TemplateContainer from '@/components/TemplateContainer.vue';
     import SidebarListComponent from '@/components/SidebarListComponent.vue';
     import LiveVideoComponent from '@/components/LiveVideoComponent.vue';
</script>

<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainer>
        <div class="row">

        </div>
        <div class="row">
            <div class="col-lg-6">
                <LiveVideoComponent
                    :pageLink="'https://www.facebook.com/QuezonGovPh'"
                    :videoSrc="'src/assets/images/sample_vid.mp4'"
                    >
                    <template #heading>Facebook Livestream Link</template>
                </LiveVideoComponent>
            </div>
            <div class="col-lg-6">
                <SidebarListComponent
                    :listType="'eventList'">
                    <template #heading>Upcoming Events</template>
                </SidebarListComponent>
            </div>
        </div>
    </TemplateContainer>

</template>