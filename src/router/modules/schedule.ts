import { RouteConfig } from "vue-router";
import FullLayout from "@/layout/full.vue";

const scheduleRouter: RouteConfig = {
  path: "/schedule",
  component: FullLayout,
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
          /* webpackChunkName: "organization" */ "@/views/schedule/calender/calender-my.view.vue"
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
          /* webpackChunkName: "members" */ "@/views/schedule/calender/calendar-team.view.vue"
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
          /* webpackChunkName: "roles" */ "@/views/schedule/timeline/timeline.view.vue"
        ),
      name: "timeline",
      meta: {
        title: "timeline",
        noCache: true,
        icon: "timeline"
      }
    },
    {
      path: "schedule-calender-management",
      component: () =>
        import(/* webpackChunkName: "resource-status" */ "@/views/schedule/schedule-management/schedule-calender-management.view.vue"),
      name: "calendarManagement",
      meta: {
        title: "calendarManagement",
        noCache: true,
        icon: "calendar"
      }
    },
    {
      path: "schedule-event-management",
      component: () =>
        import(/* webpackChunkName: "resource-status" */ "@/views/schedule/schedule-management/schedule-event-management.view.vue"),
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
