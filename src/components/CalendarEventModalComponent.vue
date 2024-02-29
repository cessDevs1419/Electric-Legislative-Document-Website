<template>
    <!-- FIRST MODAL -->
    <b-modal v-if="event" @hidden="$emit('close')">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content rounded-0 p-2">
          <div class="modal-header d-flex align-item-center border-0">
            <h4 class="d-flex align-items-center fw-bold"><span class="vertical-line"></span>Document Overview</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row mb-3">
              <div class="col-lg-6 m-auto">
                <h5 class="fw-semibold">{{ event.title }}</h5>
                <p>{{ formatDateTime(event.start) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  