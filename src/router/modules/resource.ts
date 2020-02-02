import { RouteConfig } from "vue-router";
import FullLayout from "@/layout/full.vue";

const resourceRouter: RouteConfig = {
  path: "/resource",
  component: FullLayout,
  redirect: "noredirect",
  name: "resource",
  meta: {
    title: "resource",
    icon: "resource"
  },
  children: [
    {
      path: "index",
      component: () =>
        import(
          /* webpackChunkName: "history" */ "@/views/resource/resource.view.vue"
        ),
      name: "resource",
      meta: {
        title: "resource",
        noCache: true,
        icon: "resource"
      }
    },
    {
      path: "resource-status",
      component: () =>
        import(
          /* webpackChunkName: "resource-status" */ "@/views/resource/status/resource-status.view.vue"
        ),
      name: "resourceStatus",
      meta: {
        title: "resourceStatus",
        noCache: true,
        icon: "resource-status"
      }
    },
    {
      path: "resource-type",
      component: () =>
        import(
          /* webpackChunkName: "resource-status" */ "@/views/resource/category/resource-category.view.vue"
        ),
      name: "resourceType",
      meta: {
        title: "resourceType",
        noCache: true,
        icon: "resource-management"
      }
    }
  ]
};

export default resourceRouter;
