
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
    
    <TitleContainerComponent>
        <template #heading>
            <slot name="heading" ></slot>
        </template>
    </TitleContainerComponent>
  <ul class="list-unstyled">
    <li class="text-decoration-none mt-2">
      <MembersListTemplateComponent v-if="listType === 'membersList'" :list="items">
        <template #1st-MemberName>Hon. Rosalita T. Nuñez, MNSA, PHD</template>
        <template #2nd-MemberName>Hon. Jose Edmar J. Yumang</template>
        <template #3rd-MemberName>Hon. Jose Orlando R. Acharon</template>
        <template #4th-MemberName>Hon. Dominador S. Lagare, Jr.</template>
        <template #5th-MemberName>Hon. Maria Lourdes F. Casabuena</template>
        <template #6th-MemberName>Hon. Vandyke B. Congson</template>
        <template #7th-MemberName>Hon. Richard L. Atendido</template>
        <template #8th-MemberName>Hon. Jonathan T.  Blando</template>
        <template #9th-MemberName>Hon. Froebel Kan M. Balleque</template>
        <template #10th-MemberName>Hon. Virginia T. Llido</template>
      </MembersListTemplateComponent>
      <HotlinesTemplateComponent v-if="listType === 'hotlineList'" :list="items">
        <template #HotlineTitle>Joint Task Force Gensan (JTF Gensan)</template>
            <template #HotlineNumber>Landline: 887-6018</template>
            <template #1HotlineTitle>Philippine National Police (PNP)</template>
            <template #1HotlineNumber>Landline: 887-6018</template>
            <template #2HotlineTitle>City Disaster Risk Reduction Management Office (CDRRMO)</template>
            <template #2HotlineNumber>Landline: 887-6018</template>
            <template #3HotlineTitle>Bureau of Fire Protection (BFP)</template>
            <template #3HotlineNumber>Landline: 887-6018</template>
            <template #4HotlineTitle>Philippine Army</template>
            <template #4HotlineNumber>Landline: 887-6018</template>
      </HotlinesTemplateComponent>
      <MiniCalendarTemplateComponent v-if="listType === 'calendar'" :list="items">
      </MiniCalendarTemplateComponent>
      <MunicipalitiesTemplateComponent v-if="listType === 'municipalityList'" :list="items">
        <template #1st-Municipality>Agdangan</template>
        <template #2nd-Municipality>Burdeos</template>
        <template #3rd-Municipality>Calauag</template>
        <template #4th-Municipality>Dolores</template>
        <template #5th-Municipality>General Luna</template>
        <template #6th-Municipality>Guinayangan</template>
        <template #7th-Municipality>Jomalig</template>
        <template #8th-Municipality>Pagbilao</template>
        <template #9th-Municipality>Plaridel</template>
        <template #10th-Municipality>Sampaloc</template>
      </MunicipalitiesTemplateComponent>
      <EventsTemplateComponent v-if="listType === 'eventList'" :list="items">
        <template #1st-event>Paru-Paro Festival</template>
        <template #2nd-event>10th Anniversary Party</template>
        <template #3rd-event>Tapat mo, Linis mo</template>
        <template #4th-event>Blood Letting with Red Cross</template>
        <template #5th-event>Free anti-rabies for furbabies</template>
      </EventsTemplateComponent>
    </li>
  </ul>
  
</template>
