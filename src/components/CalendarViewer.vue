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
        eventDetails: [{
          title: 'Joint Committee Hearing- Dynamic Title',
          place: 'Munisipyo ng Baranggay Dimagasalang - Dynamic',
          date: 'February 29, 2024  12:30 PM - Dynamic',
          description: 'Joint Commitee Hearing On February 19, 2024 (Monday) At 1:00 in the afternoon to be held at the Sangguniang Panlungsod Session Hall. Lorem ipsum dolor sit amet consectetur. Nibh habitant quisque egestas aenean eleifend fringilla interdum mattis id. Id ut sed volutpat aliquet arcu mollis convallis commodo. Odio lorem in in eget amet. Consequat donec ipsum pharetra sit morbi metus habitant.'
        }],
      }
    },
    methods: {
      handleWeekendsToggle() {
        this.calendarOptions.weekends = !this.calendarOptions.weekends // update a property
      },
      handleEventClick(clickInfo) {
        this.selectedEvent = clickInfo.event;
        $('#exampleModalCenter').modal('show');
        console.log(clickInfo.event);
      },
      handleEvents(events) {
        this.currentEvents = events
      },
      closeModal() {
        this.selectedEvent = null;
        $('#exampleModalCenter').modal('hide');
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
    </div>

    <!-- Modal -->
    <!-- Modal -->
<div class="modal fade" v-for="(event, index) in eventDetails" :key="index" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content px-4 py-2">
      <div class="modal-header d-flex align-item-center border-0">
        <h4 class="d-flex align-items-center fw-bold"><span class="event-vl"></span>Activity Information</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Modal body content -->
      <div class="row mb-3">
        <h5 class="fw-semibold">What</h5>
        <p>{{event.title}}</p>
      </div>
      <div class="row mb-3">
        <h5 class="fw-semibold">Where</h5>
        <p>{{event.place}}</p>
      </div>
      <div class="row mb-3">
        <h5 class="fw-semibold">When</h5>
        <p>{{event.date}}</p>
      </div>
      <div class="row mb-3">
        <h5 class="fw-semibold">Description</h5>
        <p>{{event.description}}</p>
      </div>
      </div>
    </div>
  </div>
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

  .event-vl{
      display: inline-block;
      width: 17px;
      height: 40px;
      border-left: 17px solid var(--primary-color);
      margin-right: 10px; 
  }

  .fc .fc-button {
    border: none;
    background-color: var(--white-font);
  }

  .fc .fc-button:hover {
    background-color: var(--tertiary-bg);
  }

  .fc .fc-button .fc-icon {
    font-size: 3.5em;
    color: var(--primary-font);
  }
  
  </style>
  