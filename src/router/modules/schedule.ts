import { RouteConfig } from "vue-router";
import Layout from "@/layout/index.vue";
import LayoutCalendar from "@/layout/calendar.vue";

const scheduleRouter: RouteConfig = {
  path: "/schedule",
  component: LayoutCalendar,
  redirect: "noredirect",
  name: "schedule",
  meta: {
    title: "schedule",
    icon: "calendar"
  },
  children: [
    {
      path: "my",
      component: () =>
        import(
          /* webpackChunkName: "organization" */ "@/views/calendar/calendar-my.view.vue"
        ),
      name: "my",
      meta: {
        title: "my",
        noCache: true,
        icon: "calendar"
      }
    },
    {
      path: "team",
      component: () =>
        import(
          /* webpackChunkName: "members" */ "@/views/calendar/calendar-team.view.vue"
        ),
      name: "team",
      meta: {
        title: "team",
        noCache: true,
        icon: "team-calendar"
      }
    },
    {
      path: "timeline",
      component: () =>
        import(
          /* webpackChunkName: "roles" */ "@/views/calendar/timeline.view.vue"
        ),
      name: "timeline",
      meta: {
        title: "timeline",
        noCache: true,
        icon: "timeline"
      }
    },
    {
      path: "calendar-management",
      component: () =>
        import(/* webpackChunkName: "resource-status" */ "@/views/calendar-management/calendar-management.view.vue"),
      name: "calendarManagement",
      meta: {
        title: "calendarManagement",
        noCache: true,
        icon: "calendar"
      }
    },
    {
      path: "calendar-event-management",
      component: () =>
        import(/* webpackChunkName: "resource-status" */ "@/views/calendar-management/calendar-event-management.view.vue"),
      name: "calendarEventManagement",
      meta: {
        title: "calendarEventManagement",
        noCache: true,
        icon: "calendar-event"
      }
    }
  ]
};

export default scheduleRouter;
