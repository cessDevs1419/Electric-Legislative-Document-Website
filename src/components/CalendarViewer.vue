<script>
import { defineComponent } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import CalendarApiService from '@/services/CalendarApiService'
import CalendarCategoryApiService from '@/services/CalendarCategoryApiService'

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
      groupedEvents: {},
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
    fetchData() {
      CalendarApiService.fetch()
      .then(events => {
        this.calendarEvents = events;
        console.log('Fetched data to calendar events:', this.calendarEvents);
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

        this.groupedEvents = this.groupEventsByCategory(this.calendarEvents, this.calendarCategory);
        console.log('Grouped Events:', this.groupedEvents);
      })
      .catch(error => {
        console.error('Error fetching calendar events:', error);
      });


    CalendarCategoryApiService.fetch()
      .then(categories => {
        this.calendarCategory = categories;
        console.log('Fetched data to calendar categories:', this.calendarCategory);
        
        // Group events by category
        this.groupedEvents = this.groupEventsByCategory(this.calendarEvents, this.calendarCategory);
        console.log('Grouped Events:', this.groupedEvents);
      })
      .catch(error => {
        console.error('Error fetching calendar categories:', error);
      });
  },
  groupEventsByCategory(events, categories) {
    const grouped = {};

    // Initialize groups as arrays
    categories.forEach(category => {
      grouped[category.name] = [];
    });

    // Group events
    events.forEach(event => {
      if (grouped[event.category_name]) {
        grouped[event.category_name].push(event);
      }
    });

    return grouped;
  },
  getCategoryColor(categoryName) {
    // Get category color from groupedEvents
    if (this.groupedEvents[categoryName]) {
      return this.groupedEvents[categoryName].color;
    }
    return '#000000'; 
  },
    formatDateTime(dateTime) {
      const dateObj = new Date(dateTime);

      const options = {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: '2-digit', 
        hour12: true 
      };

      const formattedDateTime = new Intl.DateTimeFormat('en-US', options).format(dateObj);
      return formattedDateTime;
  },
}
})
</script>

  

<template>
    <div class='demo-app'>
      <div class='demo-app-main'>

        <!-- Drawer -->
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">

          <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">Activities</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div class="offcanvas-body" v-for="(events, categoryName) in groupedEvents" :key="categoryName">
  <h6 class="d-flex align-items-center fw-bold">
    <span class="drawer-vl" :style="{ borderLeft: '10px solid ' + getCategoryColor(categoryName) }"></span>
    {{ categoryName }}
  </h6>
  <div class="row py-1">
    <div class="event-cards py-4 my-1" v-for="(event, index) in events" :key="index" :style="{ backgroundColor: getCategoryColor(event.category_color) + '33' }">
      <h6 class="fw-semibold text-truncate m-0">{{ event.title }}</h6>
      <p class="event-description m-0">{{ event.description }}</p>
      <p class="fw-semibold m-0">{{ formatDateTime(event.start_time) }}</p>
    </div>
  </div>
</div>


        </div>

        <!-- Calendar -->
        <div class="d-flex ">
          <div class="w-100 px-2">
            <FullCalendar
              class='demo-app-calendar'
              :options='calendarOptions'
            >
            <template v-slot:eventContent='arg'>
                <div class="-event-holder px-2 cursor-pointer" >
                    <div class="d-flex flex-column">
                        <b class="event-title">{{ arg.event.title }}</b>
                        <p class="m-0">{{ formatDateTime(arg.event.start) }}</p>
                    </div>
                </div>
            </template>

            </FullCalendar>
          </div>
          <div class="w-auto pt-5 px-0">
            <button class="drawer-btn btn btn-primary px-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
              <p class="btn-text w-100 text-nowrap ">View Activities</p>
            </button>
          </div>
        </div>
        
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" v-for="(event, index) in eventDetails" :key="index" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content px-4 pt-4 pb-3">
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
      padding: 0.7rem 0;
      border-left: 15px solid var(--primary-color);
      border-radius: 12px;
      background-color: var(--event-type-one);
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

  .event-holder {
    border-radius: 5px;
    color: var(--primary-font);
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
  