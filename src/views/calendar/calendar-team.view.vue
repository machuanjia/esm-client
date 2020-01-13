<template>
  <app-content>
    <template v-slot:body>
      <FullCalendar
        ref="fullCalendar"
        class="demo-app-calendar"
        default-view="dayGridMonth"
        :header="{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        }"
        :plugins="calendarPlugins"
        :weekends="calendarWeekends"
        :events="calendarEvents"
        @dateClick="handleDateClick"
      />
    </template>
  </app-content>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'
import { Form as ElForm, Input } from 'element-ui'
import { UserModule } from '@/store/modules/user'
import { isValidUsername } from '@/utils/validate'
import { Dictionary } from 'vue-router/types/router'
import AppContent from '@/components/Content/index.vue'
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

@Component({
  name: 'calendar',
  components: {
    AppContent,
    FullCalendar
  }
})
export default class extends Vue {
  private calendarPlugins = [ // plugins must be defined in the JS
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin // needed for dateClick
  ]
  private calendarWeekends = true
  private calendarEvents = [ // initial event data
    { title: 'Event Now', start: new Date() }
  ]

  mounted() {

  }

  edit(row:any) {

  }
  remove(row:any) {

  }

  toggleWeekends() {
    this.calendarWeekends = !this.calendarWeekends // update a property
  }
  // gotoPast() {
  //   let calendarApi = this.$refs.fullCalendar.getApi() // from the ref="..."
  //   calendarApi.gotoDate('2000-01-01') // call a method on the Calendar object
  // }
  // handleDateClick(arg:any) {
  //   if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
  //     this.calendarEvents.push({ // add new event data
  //       title: 'New Event',
  //       start: arg.date,
  //       allDay: arg.allDay
  //     })
  //   }
  // }
}
</script>

<style lang="scss">
@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';
@import '~@fullcalendar/timegrid/main.css';
</style>
