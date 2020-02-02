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
          /* webpackChunkName: "roles" */ "@/views/inoutboard/recent/recent.view.vue"
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
          /* webpackChunkName: "history" */ "@/views/inoutboard/history/history.view.vue"
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
          /* webpackChunkName: "status" */ "@/views/inoutboard/status/status.view.vue"
        ),
      name: "status",
      meta: {
        title: "status",
        noCache: true,
        icon: "status"
      }
    },
    {
      path: "company-events",
      component: () =>
        import(
          /* webpackChunkName: "status" */ "@/views/inoutboard/company-events/company-events.view.vue"
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
