import { RouteConfig } from "vue-router";
import Layout from "@/layout/index.vue";

const statusRouter: RouteConfig = {
  path: "/status",
  component: Layout,
  redirect: "noredirect",
  name: "status",
  meta: {
    title: "status",
    icon: "recent"
  },
  children: [
    {
      path: "recent",
      component: () =>
        import(
          /* webpackChunkName: "roles" */ "@/views/recent/recent.view.vue"
        ),
      name: "recent",
      meta: {
        title: "recent",
        noCache: true,
        icon: "recent"
      }
    },
    {
      path: "history",
      component: () =>
        import(
          /* webpackChunkName: "history" */ "@/views/history/history.view.vue"
        ),
      name: "history",
      meta: {
        title: "history",
        noCache: true,
        icon: "history"
      }
    },
    {
      path: "status",
      component: () =>
        import(
          /* webpackChunkName: "status" */ "@/views/status/status.view.vue"
        ),
      name: "status",
      meta: {
        title: "status",
        noCache: true,
        icon: "status"
      }
    },
    {
      path: "company-status-event",
      component: () =>
        import(
          /* webpackChunkName: "status" */ "@/views/company-status-event/company-status-event.view.vue"
        ),
      name: "companyStatusEvent",
      meta: {
        title: "companyStatusEvent",
        noCache: true,
        icon: "company"
      }
    }
  ]
};

export default statusRouter;
