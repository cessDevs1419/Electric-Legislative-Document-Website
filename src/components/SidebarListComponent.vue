
<script setup>
  import HotlinesTemplateComponent from './HotlinesTemplateComponent.vue';
  import MembersListTemplateComponent from './MembersListTemplateComponent.vue';
  import TitleContainerComponent from './TitleContainerComponent.vue';
  import MiniCalendarTemplateComponent from './MiniCalendarTemplateComponent.vue'
  import MunicipalitiesTemplateComponent from './MunicipalitiesTemplateComponent.vue';
  import EventsTemplateComponent from './EventsTemplateComponent.vue';


</script>

<script>
export default {
  props: {
    listType: {
      type: String,
      required: true
    },
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
    </li>
  </ul>
  
</template>
