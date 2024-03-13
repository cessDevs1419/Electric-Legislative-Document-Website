<script>
import { defineComponent } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import CalendarApiService from '@/services/CalendarApiService'
import CalendarCategoryApiService from '@/services/CalendarCategoryApiService'

export default defineComponent({
  props: {
    calendarType: {
      type: String,
      required: true
    },
  },
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
        events: [],
        selectable: true,
        selectMirror: true,
        dayMaxEvents: 2, // Allow grid to adjust based on number of events
        weekends: true,
        datesSet: this.handleDateSet,
        eventClick: this.handleEventClick,
      },
      selectedEvent: null,
      calendarCategory: [],
      calendarEvents: [],
      filteredEvents: [],
    }
  },
  watch: {
    activities: function(value){
      this.calendarOptions.events = value.map(d => {
          return {
              id: d.id,
              title: d.title,
              start: d.start_date_time,
              extendedProps: d,
          }
      })
    }
  },

  created() {
    this.fetchData();
  },
  methods: {
    handleEventClick(clickInfo) {
      this.selectedEvent = clickInfo.event;
      $('#exampleModalCenter').modal('show');
      console.log(clickInfo.event);
    },
    closeModal() {
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
    fetchData() {
      CalendarApiService.fetch()
      .then(events => {
        this.calendarEvents = events;
        this.calendarOptions.events = events.map(event => ({
          id: event.id,
          title: event.title,
          start: event.start_date_time, 
          extendedProps: {
            category_id: event.category_id,
            category_name: event.category_name,
            category_color: event.category_color,
            description: event.description,
            location: event.location
          }
        }));

      })
      .catch(error => {
        console.error('Error fetching calendar events:', error);
      });

    CalendarCategoryApiService.fetch()
      .then(categories => {
        this.calendarCategory = categories;
      })
      .catch(error => {
        console.error('Error fetching calendar categories:', error);
      });
    },

    formatDateTime(dateTime) {
      const dateObj = new Date(dateTime);

      const hours = dateObj.getHours();
      const minutes = dateObj.getMinutes();
      const period = hours >= 12 ? 'PM' : 'AM';

      // Convert 24-hour time to 12-hour time
      const formattedHours = hours % 12 || 12;

      const formattedDateTime = `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${period}`;
      return formattedDateTime;
    },
    modalFormatDate(dateTimeStr) {
  const options = {
    month: 'long', // Display full month name
    day: '2-digit', // Display two-digit day
    year: 'numeric', // Display full year
    hour: 'numeric', // Display hour in 12-hour format
    minute: '2-digit', // Display two-digit minutes
    hour12: true // Use 12-hour clock
  };
  
  const formattedDate = new Date(dateTimeStr).toLocaleString('en-US', options);
  return formattedDate;
},
    // Sorting by category
    getEventsByCategoryId(id) {
      const filteredEvents = this.calendarEvents.filter(event => event.category_id === id);
      return filteredEvents;
    },

    // Filter events by current date
    filterEventsByCurrentDate() {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1;
      const currentDay = currentDate.getDate();

      this.filteredEvents = this.calendarEvents.filter(event => {
        const eventDate = new Date(event.start_date);
        const eventYear = eventDate.getFullYear();
        const eventMonth = eventDate.getMonth() + 1; // Adding 1 because getMonth() is zero-based
        const eventDay = eventDate.getDate();

        return eventYear === currentYear && eventMonth === currentMonth && eventDay === currentDay;
      });
    },

    handleFilterByCurrentDate() {
      this.currentDateActive = true;
      this.monthYearActive = false;
      this.yearActive = false;
      this.filterEventsByCurrentDate();
    },

    // Filter Events by current month and year
    filterEventsByMonthAndYear() {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1; 

      this.filteredEvents = this.calendarEvents.filter(event => {
        const eventYear = new Date(event.start_date).getFullYear();
        const eventMonth = new Date(event.start_date).getMonth() + 1;
        return eventYear === currentYear && eventMonth === currentMonth;
      });
    },

    handleFilterByMonthAndYear() {
      this.currentDateActive = false;
      this.monthYearActive = true;
      this.yearActive = false;
      this.filterEventsByMonthAndYear();
    },

    //Filter Events by current year
    filterEventsByYear() {
      const currentYear = new Date().getFullYear();
      this.filteredEvents = this.calendarEvents.filter(event => {
        const eventYear = new Date(event.start_date).getFullYear();
        return eventYear === currentYear;
      });
    },

    handleFilterByYear() {
      this.currentDateActive = false;
      this.monthYearActive = false;
      this.yearActive = true;
      this.filterEventsByYear();
    },

    getEventsWithFiltered(categoryId) {
      const events = this.getEventsByCategoryId(categoryId);
      return events.filter(event => this.filteredEvents.some(filteredEvent => filteredEvent.id === event.id));
    },

}
})
</script>

  

<template>
  <div class="full-view" v-if="calendarType === 'fullview'">
    <div class='demo-app'>
      <div class='demo-app-main'>

        <!-- Drawer -->
        <div class="offcanvas offcanvas-end vh-100" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style="overflow-y: auto;">
          <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">Activities</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body d-flex flex-column">

          <!-- Filter Button Group -->
          <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label :class="{'btn': true, 'filter-btn': true, 'active': currentDateActive}">
              <input @click="handleFilterByCurrentDate" type="radio" name="options" id="option1" autocomplete="off" checked> Today
            </label>
            <label :class="{'btn': true, 'filter-btn': true, 'active': monthYearActive}">
              <input @click="handleFilterByMonthAndYear" type="radio" name="options" id="option2" autocomplete="off"> Month
            </label>
            <label :class="{'btn': true, 'filter-btn': true, 'active': yearActive}">
              <input @click="handleFilterByYear" type="radio" name="options" id="option3" autocomplete="off"> Year
            </label>
          </div>


          <!-- Event Deck -->
          <div class="row py-1">
            <div v-for="(category, catIndex) in calendarCategory" :key="catIndex" :style="{ flex: '0 0 auto' }">
              <h6 class="d-flex align-items-center fw-bold pt-4">
                <span class="drawer-vl" :style="{ borderLeft: '10px solid ' + category.color }"></span>
                {{ category.name }}
              </h6>

              <div class="event-cards px-3 py-3 my-1" v-for="(event, eventIndex) in getEventsWithFiltered(category.id)" :key="eventIndex" :style="{ backgroundColor: category.color + '33' }">
                <h6 class="fw-bold text-truncate m-0">{{ event.title }}</h6>
                <p class="event-description m-0">{{ event.description }}</p>
                <p class="fw-semibold m-0">{{ modalFormatDate(event.start_date_time) }}</p>
              </div>

            </div>
          </div>

        </div>
  </div>


        <!-- Calendar -->
        <div class="d-flex ">
          <div class="w-100 ">
            <FullCalendar
              class='demo-app-calendar'
              :options='calendarOptions'
            >
            <template v-slot:eventContent='arg'>
              <div class="event-holder py-3 w-100 cursor-pointer" :style="{ 'border-left': '15px solid ' + arg.event.extendedProps.category_color, 'background-color': arg.event.extendedProps.category_color + '33' }">
                    <div class="d-flex flex-column primary-font mx-2">
                        <b class="event-title">{{ arg.event.title }}</b>
                        <p class="m-0">{{ formatDateTime(arg.event.start) }}</p>
                    </div>
                </div>
            </template>

            </FullCalendar>
          </div>
          <div class="w-auto pt-5 ps-2 px-0 ">
            <button @click="handleFilterByCurrentDate" class="drawer-btn btn btn-primary px-2 mt-3 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
              <p class="btn-text w-100 text-nowrap ">View Activities</p>
            </button>
          </div>
        </div>
        
      </div>
    </div>

<!-- Modal for Event Details -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style="overflow-y: auto; z-index: 9999;">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content px-4 pt-4 pb-3">
      <div class="modal-header d-flex align-item-center border-0" v-if="selectedEvent">
        <h4 class="d-flex align-items-center fw-bold"><span class="event-vl" :style="{ borderLeft: '10px solid ' + selectedEvent.extendedProps.category_color }"></span>Activity Information</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row mb-3" v-if="selectedEvent">
          <h5 class="fw-semibold">What</h5>
          <p>{{ selectedEvent.title }}</p>
        </div>
        <div class="row mb-3" v-if="selectedEvent">
          <h5 class="fw-semibold">Where</h5>
          <p>{{ selectedEvent.extendedProps.location }}</p>
        </div>
        <div class="row mb-3" v-if="selectedEvent">
          <h5 class="fw-semibold">When</h5>
          <p>{{ modalFormatDate(selectedEvent.start) }}</p>
        </div>
        <div class="row mb-3" v-if="selectedEvent">
          <h5 class="fw-semibold">Description</h5>
          <p>{{ selectedEvent.extendedProps.description }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>

  <div class="full-view" v-if="calendarType === 'miniview'">
    <div class='demo-app'>
      <div class='demo-app-main'>

        <!-- Calendar -->
        <div class="d-flex ">
          <div class="w-100 ">
            <FullCalendar
              class='demo-app-calendar'
              :options='calendarOptions'
            >
            <template v-slot:eventContent='arg'>
              <div class="event-holder py-3 w-100 cursor-pointer" :style="{ 'border-left': '15px solid ' + arg.event.extendedProps.category_color, 'background-color': arg.event.extendedProps.category_color + '33' }">
                    <div class="d-flex flex-column primary-font mx-2">
                        <b class="event-title">{{ arg.event.title }}</b>
                        <p class="m-0">{{ formatDateTime(arg.event.start) }}</p>
                    </div>
                </div>
            </template>

            </FullCalendar>
          </div>
        </div>
        
      </div>
    </div>

<!-- Modal for Event Details -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style="overflow-y: auto; z-index: 9999;">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content px-4 pt-4 pb-3">
      <div class="modal-header d-flex align-item-center border-0" v-if="selectedEvent">
        <h4 class="d-flex align-items-center fw-bold"><span class="event-vl" :style="{ borderLeft: '10px solid ' + selectedEvent.extendedProps.category_color }"></span>Activity Information</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row mb-3" v-if="selectedEvent">
          <h5 class="fw-semibold">What</h5>
          <p>{{ selectedEvent.title }}</p>
        </div>
        <div class="row mb-3" v-if="selectedEvent">
          <h5 class="fw-semibold">Where</h5>
          <p>{{ selectedEvent.extendedProps.location }}</p>
        </div>
        <div class="row mb-3" v-if="selectedEvent">
          <h5 class="fw-semibold">When</h5>
          <p>{{ modalFormatDate(selectedEvent.start) }}</p>
        </div>
        <div class="row mb-3" v-if="selectedEvent">
          <h5 class="fw-semibold">Description</h5>
          <p>{{ selectedEvent.extendedProps.description }}</p>
        </div>
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

  .filter-btn {
    background-color: #286BAE;
    color: white;
  }

  .filter-btn:active,
  .filter-btn.active {
    background-color: #1C5083;
    color:white;
    border: none;
  }

  .filter-btn:hover{
    background-color: #1C5083;
  }

  /* Hide the default radio button */
  .filter-btn input[type="radio"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 0;
    height: 0;
    position: absolute;
  }

  /* Style the label for the filter button */
  .filter-btn label {
    cursor: pointer;
    padding: 0.8rem 1rem;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .filter-btn label.active {
    background-color: #1C5083;
    color: white;
  }

  .event-holder {
    border-radius: 12px;
  }

  .event-cards p {
    font-size: 0.75rem;
  }

  .drawer-btn{
    border-radius: 0 0.7rem 0.7rem 0;
    background-color: var(--primary-color);
    height: auto;
    min-height: 9rem;
    width: 2rem;
    padding: 0 , 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .btn-text{
    transform: rotate(90deg);
    text-wrap: nowrap;
    margin: 0;
  }

  .event-description {
    max-height: 3rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .demo-app {
    display: flex;
    font-size: 14px;
  }
  
  .demo-app-main {
    flex-grow: 1;
    padding: 3em;
  }

  .fc .fc-daygrid-day{
    height: 8rem;
  }

  .fc { /* the calendar root */
      width: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
  }
  
  .fc-event{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 0.3rem;
      border-radius: 12px;
  }
    
  .fc .fc-daygrid-day.fc-day-today {
      background-color: #ebebeb;
  }

  .demo-app-main {
    padding: 0;
  }

  /* Vertical Line for Calendar Modal */
  .event-vl{
      display: inline-block;
      width: 17px;
      height: 40px;
      border-left: 17px solid var(--primary-color);
      margin-right: 10px; 
  }

  /* Vertical Line for drawer event type */
  .drawer-vl {
      display: inline-block;
      height: 25px;
      border-left: 10px solid var(--secondary-color);
      margin-right: 10px; 
  }

  .fc .fc-button {
    background-color: var(--primary-color);
    border: none;
  }

  .fc .fc-button:hover {
    background-color: var(--primary-color);
  }
  
  .fc .fc-button:active {
    background-color: var(--primary-color);
  }

  .fc .fc-button .fc-icon {
    font-size: 2.5em;
    color: var(--white-font);
  }

  .fc .fc-daygrid-day-number,.fc .fc-col-header-cell-cushion {
    color: var(--primary-font);
    text-decoration: none;
    font-weight: bold;
  }
  
  </style>
  