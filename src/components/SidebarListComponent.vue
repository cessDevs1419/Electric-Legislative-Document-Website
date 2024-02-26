<template>
    <TitleContainerComponent>
      <template #heading>
        <slot name="heading"></slot>
      </template>
    </TitleContainerComponent>
    <ul class="list-unstyled">
      <li class="text-decoration-none mt-5" v-for="(item, index) in paginatedItems" :key="index">
        <MembersListTemplateComponent v-if="listType === 'membersList'" :list="item.link">
          <template #memberName>{{ item.memberName }}</template>
        </MembersListTemplateComponent>
        <HotlinesTemplateComponent v-else>
          <template #HotlineTitle></template>
          <template #HotlineNumber></template>
        </HotlinesTemplateComponent>
      </li>
    </ul>
  </template>
  
  <script>
  import HotlinesTemplateComponent from './HotlinesTemplateComponent.vue';
  import MembersListTemplateComponent from './MembersListTemplateComponent.vue';
  import TitleContainerComponent from './HeaderContainerComponent.vue';
  
  export default {
    components: {
      HotlinesTemplateComponent,
      MembersListTemplateComponent,
      TitleContainerComponent
    },
    props: {
      items: {
        type: Array,
        required: true
      },
      itemsOnPage: {
        type: Number,
        required: true
      },
      listType: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        currentPage: 1
      }
    },
    computed: {
      paginatedItems() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.items.slice(startIndex, endIndex);
      }
    },
    mounted() {
    // Log the items prop when the component is mounted
    console.log('Member Names:');
    this.items.forEach(item => {
      console.log(item.memberName);
    });
  },
    methods: {
      handlePageChange(page) {
        this.currentPage = page;
      }
    }
  }
  </script>
  