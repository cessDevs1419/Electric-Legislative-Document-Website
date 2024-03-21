<script setup>
import HeaderContainerComponent from "@/components/HeaderContainerComponent.vue";
import TemplateContainer from "@/components/TemplateContainer.vue";
import SidebarListComponent from "@/components/SidebarListComponent.vue";
import LiveVideoComponent from "@/components/LiveVideoComponent.vue";
import CalendarViewer from "@/components/CalendarViewer.vue";
import CalendarCategoryApiService from "@/services/CalendarCategoryApiService";
</script>

<script>
import CalendarCategoryApiService from "@/services/CalendarCategoryApiService";

export default {
  data() {
    return {
      calendarCategory: [],
    };
  },
  methods: {
    fetchData() {
      CalendarCategoryApiService.fetch()
        .then((data) => {
          this.calendarCategory = [];
          this.calendarCategory.push(...data);
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
        });
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<template>
  <HeaderContainerComponent></HeaderContainerComponent>
  <div class="spacer"></div>
  <TemplateContainer>
    <div class="row w-100 m-auto">
      <CalendarViewer :calendarType="'fullview'"></CalendarViewer>
      <div class="calendar-legend d-flex justify-content-center py-4">
        <div class="row">
          <div class="col-md-12">
            <div class="d-flex flex-wrap">
              <div
                class="d-flex justify-content-start align-items-center me-3 mb-2"
                v-for="(calendarCategory, index) in calendarCategory"
                :key="index"
              >
                <div
                  class="mx-2"
                  :style="{
                    width: '20px',
                    height: '20px',
                    backgroundColor: calendarCategory.color,
                  }"
                ></div>
                <div class="text-nowrap">{{ calendarCategory.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row w-100 m-auto">
      <div class="col-lg-6 pb-5">
        <LiveVideoComponent
          :pageLink="'https://www.facebook.com/QuezonGovPh'"
          :videoSrc="'src/assets/images/sample_vid.mp4'"
        >
          <template #heading>Facebook Livestream Link</template>
        </LiveVideoComponent>
      </div>
      <div class="col-lg-6">
        <SidebarListComponent :listType="'eventList'">
          <template #heading>Upcoming Events</template>
        </SidebarListComponent>
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
        <SidebarListComponent :listType="'eventList'">
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
