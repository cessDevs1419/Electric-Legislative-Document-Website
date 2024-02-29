<script setup>
     import HeaderContainerComponent from '@/components/HeaderContainerComponent.vue';
     import TemplateContainer from '@/components/TemplateContainer.vue';
     import SidebarListComponent from '@/components/SidebarListComponent.vue';
     import LiveVideoComponent from '@/components/LiveVideoComponent.vue';
     import CalendarViewer from '@/components/CalendarViewer.vue';
</script>

<template>
    <HeaderContainerComponent></HeaderContainerComponent>
    <div class="spacer"></div>
    <TemplateContainer>
        <div class="row w-100 m-auto">
            <CalendarViewer></CalendarViewer>
            <div class="calendar-legend d-flex justify-content-center py-4">
              <div class="row w-100 m-auto">
                <div class="col-lg-2 col-md-4 col-sm-6">
                  <div class="row">
                    <div class="col-lg-3 m-0"><div class="event-color event-type-one"></div></div>
                    <div class="col-lg-5"><p>Sched01</p></div>
                  </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6">
                  <div class="row">
                    <div class="col-lg-3 m-0"><div class="event-color event-type-two"></div></div>
                    <div class="col-lg-5"><p>Sched02</p></div>
                  </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6">
                  <div class="row">
                    <div class="col-lg-3 m-0"><div class="event-color event-type-three"></div></div>
                    <div class="col-lg-5"><p>Sched03</p></div>
                  </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6">
                  <div class="row">
                    <div class="col-lg-3 m-0"><div class="event-color event-type-four"></div></div>
                    <div class="col-lg-5"><p>Sched04</p></div>
                  </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6">
                  <div class="row">
                    <div class="col-lg-3 m-0"><div class="event-color event-type-five"></div></div>
                    <div class="col-lg-5"><p>Sched05</p></div>
                  </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6">
                  <div class="row">
                    <div class="col-lg-3 m-0"><div class="event-color event-type-six"></div></div>
                    <div class="col-lg-5"><p>Sched06</p></div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6 pb-5">
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

<style scoped>

.event-color {
    height: 20px;
    width: 20px;
  }
</style>