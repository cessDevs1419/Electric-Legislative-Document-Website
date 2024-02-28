<template>
    <b-modal v-if="event" @hidden="$emit('close')">
      <h4>{{ event.title }}</h4>
      <p>{{ formatDateTime(event.start) }}</p>
      <!-- Add more event details here -->
    </b-modal>
</template>
  
  <script>
  export default {
    props: {
      event: {
        type: Object,
        required: true
      }
    },
    methods: {
        formatDateTime(dateTimeString) {
        const date = new Date(dateTimeString);
        const options = {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        };
        return date.toLocaleString('en-US', options).replace(':', ' ');
      }
    }
  }
  </script>
  