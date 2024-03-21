<script>
import CalendarApiService from "@/services/CalendarApiService";
export default {
  data() {
    return {
      events: [],
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
          <p class="pt-3 fw-semibold tertiary-font fs-5">
            {{ event.title }}
          </p>
          <hr class="grey-divider mt-0" />
        </li>
      </template>
    </ul>
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
