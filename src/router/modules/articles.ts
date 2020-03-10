import { RouteConfig } from "vue-router";
import FullLayout from "@/layout/full.vue";

const articleRouter: RouteConfig = {
  path: "/articles",
  component: FullLayout,
  redirect: "noredirect",
  name: "status",
  meta: {
    title: "status",
    icon: "recent",
    key: "inoutboard*"
  },
  children: [
    {
      path: "index",
      component: () =>
        import(
          /* webpackChunkName: "roles" */ "@/views/articles/articles.view.vue"
        ),
      name: "recent",
      meta: {
        title: "recent",
        noCache: true,
        icon: "recent",
        key: "inoutboard.recent"
      }
    },
    {
      path: "category",
      component: () =>
        import(
          /* webpackChunkName: "roles" */ "@/views/articles/category/articles-category.view.vue"
        ),
      name: "recent",
      meta: {
        title: "recent",
        noCache: true,
        icon: "recent",
        key: "inoutboard.recent"
      }
    }
  ]
};

export default articleRouter;
