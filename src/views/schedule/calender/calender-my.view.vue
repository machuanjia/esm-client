<template>
  <app-content class="full-app-content">
    <template v-slot:body>
      <span class="calendar-full-title">
        <svg-icon name="calendar" />
        <span class="ml5">我的日程</span>
      </span>
      <FullCalendar
        ref="fullCalendar"
        class="app-calendar"
        default-view="dayGridMonth"
        :header="{
          left: 'texts',
          center: 'prev,title,next,today',
          right: 'createButton,dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        }"
        :custom-buttons="customButtons"
        :button-text="buttonText"
        :plugins="calendarPlugins"
        :weekends="calendarWeekends"
        :events="calendarEvents"
        :height="'auto'"
        locale="zh-cn"
        @dateClick="handleDateClick"
      />
    </template>
  </app-content>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';
import { Form as ElForm, Input } from 'element-ui';
import { UserModule } from '@/store/modules/user';
import { isValidUsername } from '@/utils/validate';
import { Dictionary } from 'vue-router/types/router';
import AppContent from '@/components/Content/index.vue';
import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
// import bootstrapPlugin from "@fullcalendar/bootstrap";

@Component({
  name: 'calendar',
  components: {
    AppContent,
    FullCalendar
  }
})
export default class extends Vue {
  private calendarPlugins = [
    // plugins must be defined in the JS
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin,
    // bootstrapPlugin
    listPlugin // needed for dateClick
  ];
  private calendarWeekends = true;
  private calendarEvents = [
    // initial event data
    { title: 'Event Now', start: new Date() }
  ];

  private customButtons = {
    createButton: {
      text: '新建',
      click: function() {
        alert('clicked the custom button!');
      }
    }
  };

  private buttonText = {
    today: '今天',
    dayGridMonth: '月',
    timeGridWeek: '周',
    timeGridDay: '日',
    listWeek: '列表'
  };

  mounted() {}

  toggleWeekends() {
    this.calendarWeekends = !this.calendarWeekends; // update a property
  }
  // gotoPast() {
  //   let calendarApi = this.$refs.fullCalendar.getApi() // from the ref="..."
  //   calendarApi.gotoDate('2000-01-01') // call a method on the Calendar object
  // }
  handleDateClick(arg: any) {
    if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      // this.calendarEvents.push({ // add new event data
      //   title: 'New Event',
      //   start: arg.date,
      //   allDay: arg.allDay
      // })
    }
  }
}
</script>

<style lang="scss">
@import "~@fullcalendar/core/main.css";
@import "~@fullcalendar/daygrid/main.css";
@import "~@fullcalendar/timegrid/main.css";
// @import "~@fullcalendar/bootstrap/main.css";
</style>
