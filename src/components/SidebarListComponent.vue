
<script setup>
  import HotlinesTemplateComponent from './HotlinesTemplateComponent.vue';
  import MembersListTemplateComponent from './MembersListTemplateComponent.vue';
  import TitleContainerComponent from './TitleContainerComponent.vue';
  import MiniCalendarTemplateComponent from './MiniCalendarTemplateComponent.vue'
  import MunicipalitiesTemplateComponent from './MunicipalitiesTemplateComponent.vue';
  import EventsTemplateComponent from './EventsTemplateComponent.vue';
  import PaginationListComponent from './PaginationListComponent.vue';
  import OrderofBusinessApiService from '@/services/OrderofBusinessApiService';
  import NewsApiService from '@/services/NewsApiService';
</script>

<script>
export default {
  data() {
    return {
      OrderOfBusiness: [],
      News: [],
    }
  },
  props: {
    listType: {
      type: String,
      required: true
    },
  },
  methods: {
    fetchData() {
      OrderofBusinessApiService.fetchOrderOfBusiness()
        .then(items => {
          this.OrderOfBusiness = [...items];
          
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });

      NewsApiService.fetch().then(item => {
          this.News = []
          this.News.push(...item);
        })
        .catch(error => {
          console.error('', error);
        });
    }, 
  },
  created() {
    this.fetchData();
    
  },
}
</script>

<template>
    
    <TitleContainerComponent>
        <template #heading>
            <slot name="heading" ></slot>
        </template>
    </TitleContainerComponent>
  <ul class="list-unstyled">
    <li class="text-decoration-none mt-2">
      <MembersListTemplateComponent v-if="listType === 'membersList'">
      </MembersListTemplateComponent>

      <HotlinesTemplateComponent v-if="listType === 'hotlineList'">
      </HotlinesTemplateComponent>

      <MiniCalendarTemplateComponent v-if="listType === 'calendar'">
      </MiniCalendarTemplateComponent>

      <MunicipalitiesTemplateComponent v-if="listType === 'municipalityList'">
      </MunicipalitiesTemplateComponent>

      <EventsTemplateComponent v-if="listType === 'eventList'">
      </EventsTemplateComponent>

      <!-- <NewsListTemplateComponent v-if="listType === 'newsList'">
      </NewsListTemplateComponent> -->

      <!-- <OrderListTemplateComponent v-if="listType === 'orderList'">
      </OrderListTemplateComponent> -->

      <PaginationListComponent
      v-if="listType === 'orderList' && OrderOfBusiness.length > 0"
      :items="OrderOfBusiness" 
      :itemsPerPage="4"
      :listType="'orderList'"
      >
      </PaginationListComponent>

      <PaginationListComponent
        v-if="listType === 'newsList' && News.length > 0"
        :items="News" 
        :itemsPerPage="4"
        :listType="'newsList'"
        >
      </PaginationListComponent>
    </li>
  </ul>
  
</template>
