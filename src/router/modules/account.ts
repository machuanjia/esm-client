import { RouteConfig } from "vue-router";
import Layout from "@/layout/index.vue";

const accountRouter: RouteConfig = {
  path: "/account",
  component: Layout,
  redirect: "noredirect",
  name: "account",
  meta: {
    title: "account",
    icon: "setting"
  },
  children: [
    {
      path: "bills",
      component: () =>
        import(/* webpackChunkName: "bills" */ "@/views/bills/bills.view.vue"),
      name: "bills",
      meta: {
        title: "bills",
        noCache: true,
        icon: "money"
      }
    },
    {
      path: "account",
      component: () =>
        import(/* webpackChunkName: "bills" */ "@/views/account/account.view.vue"),
      name: "account",
      meta: {
        title: "account",
        noCache: true,
        icon: "setting"
      }
    }
  ]
};

export default accountRouter;
