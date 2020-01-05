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

  ]
};

export default applicationRouter;
