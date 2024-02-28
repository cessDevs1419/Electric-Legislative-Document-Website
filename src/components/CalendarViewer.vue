<script setup>
  import CalendarEventModalComponent from './CalendarEventModalComponent.vue'
</script>

<script>
  import { defineComponent } from 'vue'
  import FullCalendar from '@fullcalendar/vue3'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import timeGridPlugin from '@fullcalendar/timegrid'
  import interactionPlugin from '@fullcalendar/interaction'
  import { INITIAL_EVENTS, createEventId, formatDateTime } from '../event-utils'
  
  export default defineComponent({
    components: {
      FullCalendar,
    },
    data() {
      return {
        calendarOptions: {
          plugins: [
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin // needed for dateClick
          ],
          headerToolbar: {
            left: 'prev',
            center: 'title',
            right: 'next'
          },
          initialView: 'dayGridMonth',
          initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
          selectable: true,
          selectMirror: true,
          dayMaxEvents: 2, // Allow grid to adjust based on number of events
          weekends: true,
          select: this.handleDateSelect,
          eventClick: this.handleEventClick,
          eventsSet: this.handleEvents,
          eventContent: this.eventContent,
          eventDidMount: this.handleEventMount,
          /* you can update a remote database when these fire:
          eventAdd:
          eventChange:
          eventRemove:
          */
        },
        currentEvents: [],
        selectedEvent: null,
      }
    },
    methods: {
      handleWeekendsToggle() {
        this.calendarOptions.weekends = !this.calendarOptions.weekends // update a property
      },
      handleEventClick(clickInfo) {
        
        this.selectedEvent = clickInfo.event;
        console.log(clickInfo.event);
      },
      handleEvents(events) {
        this.currentEvents = events
      },
      formatDateTime(dateTimeString) {
        const date = new Date(dateTimeString);
        const options = {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        };
        return date.toLocaleString('en-US', options).replace(':', ' ');
      },
    }
  })
  </script>
  

<template>
    <div class='demo-app'>
      <div class='demo-app-main'>
        <FullCalendar
          class='demo-app-calendar'
          :options='calendarOptions'
        >
          <template v-slot:eventContent='arg'>
            <div class="event-holder px-4">
              <div class="row">
                <b>{{ arg.event.title }}</b>
                <br>
                <p class="m-0">{{ formatDateTime(arg.event.start) }}</p>
              </div>
            </div>
          </template>
        </FullCalendar>
      </div>
      <!-- Event Modal -->
    <CalendarEventModalComponent
      v-if="selectedEvent"
      :event="selectedEvent"
      @close="selectedEvent = null"
    />
    </div>
  </template>
  
  
  <style lang='css'>
  
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
  
  * {
      font-family: "Montserrat", sans-serif;
  }
  
  .event-holder {
    border-radius: 5px;
    color: var(--primary-font);
  }
  
  .demo-app {
    display: flex;
    font-size: 14px;
  }
  
  .demo-app-main {
    flex-grow: 1;
    padding: 3em;
  }
  
  .fc { /* the calendar root */
      width: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
  }
  
  .fc-event{
      margin: 0.3rem;
      padding: 0.7rem 0;
      border: 0px;
      border-radius: 12px;
      background-color: var(--event-type-one);
  }
  
.fc .fc-daygrid-day.fc-day-today {
    background-color: #ebebeb;
}

  </style>
  