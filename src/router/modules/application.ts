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
    // {
    //   path: "status",
    //   component: () =>
    //     import(
    //       /* webpackChunkName: "status" */ "@/views/status/status.view.vue"
    //     ),
    //   name: "status",
    //   meta: {
    //     title: "status",
    //     noCache: true,
    //     icon: "status"
    //   }
    // },
    // {
    //   path: "company-status-event",
    //   component: () =>
    //     import(
    //       /* webpackChunkName: "status" */ "@/views/company-status-event/company-status-event.view.vue"
    //     ),
    //   name: "companyStatusEvent",
    //   meta: {
    //     title: "companyStatusEvent",
    //     noCache: true,
    //     icon: "company"
    //   }
    // }
  ]
};

export default applicationRouter;
