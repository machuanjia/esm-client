import { RouteConfig } from "vue-router";
import FullLayout from "@/layout/full.vue";

const inoutboardRouter: RouteConfig = {
  path: "/inoutboard",
  component: FullLayout,
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
      path: "my-history",
      component: () =>
        import(
          /* webpackChunkName: "history" */ "@/views/inoutboard/history/my-history.view.vue"
        ),
      name: "myHistory",
      meta: {
        title: "myHistory",
        noCache: true,
        icon: "my-history"
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
      path: "my-statistics",
      component: () =>
        import(
          /* webpackChunkName: "history" */ "@/views/inoutboard/statistics/my-statistics.view.vue"
        ),
      name: "myStatistics",
      meta: {
        title: "myStatistics",
        noCache: true,
        icon: "my-statistics"
      }
    },
    {
      path: "statistics",
      component: () =>
        import(
          /* webpackChunkName: "history" */ "@/views/inoutboard/statistics/statistics.view.vue"
        ),
      name: "statistics",
      meta: {
        title: "statistics",
        noCache: true,
        icon: "statistics"
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

export default inoutboardRouter;
