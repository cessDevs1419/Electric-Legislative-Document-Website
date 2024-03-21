<script>
import CalendarApiService from "@/services/CalendarApiService";
export default {
  data() {
    return {
      events: [],
      selectedEvent: [],
    };
  },
  methods: {
    fetchData() {
      CalendarApiService.fetch()
        .then((data) => {
          this.events = [];
          this.events.push(...data);
        })
        .catch((error) => {
          console.error("Error fetching events:", error);
        });
    },
    selectEvent(event) {
      this.selectedEvent = [];
      this.selectedEvent.push(event);
    },
    modalFormatDate(dateTimeStr) {
      const options = {
        month: "long", // Display full month name
        day: "2-digit", // Display two-digit day
        year: "numeric", // Display full year
        hour: "numeric", // Display hour in 12-hour format
        minute: "2-digit", // Display two-digit minutes
        hour12: true, // Use 12-hour clock
      };

      const formattedDate = new Date(dateTimeStr).toLocaleString(
        "en-US",
        options
      );
      return formattedDate;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<template>
  <div class="card-body tertiary-bg my-3 px-2 pb-5 position-relative">
    <ul class="list-unstyled">
      <template v-for="(event, index) in events" :key="index">
        <li v-if="index < 5" class="py-0 px-2">
          <p
            class="pt-3 fw-semibold tertiary-font fs-5"
            @click="selectEvent(event)"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            {{ event.title }}
          </p>
          <hr class="grey-divider mt-0" />
        </li>
      </template>
    </ul>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content px-4 pt-4 pb-3" v-if="selectedEvent">
        <div
          class="modal-header d-flex align-item-center border-0"
          v-for="(items, index) in selectedEvent"
          :key="index"
        >
          <h4 class="d-flex align-items-center fw-bold">
            <span
              class="event-vl"
              :style="{
                borderLeft: '10px solid ' + items.category_color,
              }"
            ></span
            >{{ items.category_name }}
          </h4>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            data-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div
          class="modal-body"
          v-for="(items, index) in selectedEvent"
          :key="index"
        >
          <div class="row mb-3" v-if="selectedEvent">
            <h5 class="fw-semibold">What</h5>
            <p>{{ items.title }}</p>
          </div>
          <div class="row mb-3" v-if="selectedEvent">
            <h5 class="fw-semibold">Where</h5>
            <p>{{ items.location }}</p>
          </div>
          <div class="row mb-3" v-if="selectedEvent">
            <h5 class="fw-semibold">When</h5>
            <p>{{ modalFormatDate(items.start_date) }}</p>
          </div>
          <div class="row mb-3" v-if="selectedEvent">
            <h5 class="fw-semibold">Description</h5>
            <p>{{ items.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.semi-bold {
  font-weight: 600;
}

.card-body p:hover {
  color: var(--secondary-color);
  cursor: pointer;
}
</style>
