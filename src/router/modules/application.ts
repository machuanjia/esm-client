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
      path: "boards",
      component: () =>
        import(
          /* webpackChunkName: "icons" */ "@/views/boards/boards.view.vue"
        ),
      name: "boards",
      meta: {
        title: "boards",
        icon: "tab",
        noCache: true
      }
    },
    {
      path: "widgets",
      component: () =>
        import(
          /* webpackChunkName: "icons" */ "@/views/widgets/widgets.view.vue"
        ),
      name: "widgets",
      meta: {
        title: "widgets",
        icon: "component",
        noCache: true
      }
    },
    {
      path: "tags",
      component: () =>
        import(/* webpackChunkName: "icons" */ "@/views/tags/tags.view.vue"),
      name: "tags",
      meta: {
        title: "tags",
        icon: "nested",
        noCache: true
      }
    },
    {
      path: "datasource",
      component: () =>
        import(
          /* webpackChunkName: "icons" */ "@/views/data-source/data-source.view.vue"
        ),
      name: "datasource",
      meta: {
        title: "datasource",
        icon: "icon",
        noCache: true,
        icon: "data"
      }
    }
  ]
};

export default applicationRouter;
