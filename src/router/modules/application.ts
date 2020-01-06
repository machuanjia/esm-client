import { RouteConfig } from "vue-router";
import Layout from "@/layout/index.vue";

const applicationRouter: RouteConfig = {
  path: "/application",
  component: Layout,
  redirect: "noredirect",
  name: "application",
  meta: {
    title: "application",
    icon: "component"
  },
  children: [
    {
      path: "status",
      component: () =>
        import(/* webpackChunkName: "status" */ "@/views/status/status.view.vue"),
      name: "status",
      meta: {
        title: "status",
        noCache: true,
        icon: "status"
      }
    },{
      path: "company-status-event",
      component: () =>
        import(/* webpackChunkName: "status" */ "@/views/company-status-event/company-status-event.view.vue"),
      name: "companyStatusEvent",
      meta: {
        title: "companyStatusEvent",
        noCache: true,
        icon: "company"
      }
    },{
      path: "resource-status",
      component: () =>
        import(/* webpackChunkName: "resource-status" */ "@/views/resource-status/resource-status.view.vue"),
      name: "resourceStatus",
      meta: {
        title: "resourceStatus",
        noCache: true,
        icon: "resource-status"
      }
    },{
      path: "resource-type",
      component: () =>
        import(/* webpackChunkName: "resource-status" */ "@/views/resource-type/resource-type.view.vue"),
      name: "resourceType",
      meta: {
        title: "resourceType",
        noCache: true,
        icon: "resource-management"
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

export default applicationRouter;
