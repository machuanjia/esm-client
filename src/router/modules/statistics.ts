import { RouteConfig } from "vue-router";
import Layout from "@/layout/index.vue";
import FullLayout from "@/layout/full.vue";

const statisticsRouter: RouteConfig = {
  path: "/statistics",
  component: FullLayout,
  redirect: "noredirect",
  name: "statistics",
  meta: {
    title: "statistics",
    icon: "statistics",
    key: "statistics*"
  },
  children: [
    {
      path: "story",
      component: () =>
        import(
          /* webpackChunkName: "icons" */ "@/views/statistics/story/story.view.vue"
        ),
      name: "story",
      meta: {
        title: "story",
        icon: "story",
        noCache: true,
        key: "statistics.story"
      }
    },
    {
      path: "boards",
      component: () =>
        import(
          /* webpackChunkName: "icons" */ "@/views/statistics/boards/boards.view.vue"
        ),
      name: "boards",
      meta: {
        title: "boards",
        icon: "tab",
        noCache: true,
        key: "statistics.boards"
      }
    },
    {
      path: "widgets",
      component: () =>
        import(
          /* webpackChunkName: "icons" */ "@/views/statistics/widgets/widgets.view.vue"
        ),
      name: "widgets",
      meta: {
        title: "widgets",
        icon: "component",
        noCache: true,
        key: "statistics.widgets"
      }
    },

    {
      path: "datasource",
      component: () =>
        import(
          /* webpackChunkName: "icons" */ "@/views/statistics/data-source/data-source.view.vue"
        ),
      name: "datasource",
      meta: {
        title: "datasource",
        noCache: true,
        icon: "data",
        key: "statistics.datasource"
      }
    }
    // {
    //   path: "tags",
    //   component: () =>
    //     import(
    //       /* webpackChunkName: "icons" */ "@/views/statistics/tags/tags.view.vue"
    //     ),
    //   name: "tags",
    //   meta: {
    //     title: "tags",
    //     icon: "nested",
    //     noCache: true
    //   }
    // }
  ]
};

export default statisticsRouter;
