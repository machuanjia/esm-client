import { RouteConfig } from "vue-router";
import Layout from "@/layout/index.vue";

const accountRouter: RouteConfig = {
  path: "/account",
  component: Layout,
  redirect: "noredirect",
  name: "account",
  meta: {
    title: "account",
    icon: "setting",
    key: "account*"
  },
  children: [
    {
      path: "bills",
      component: () =>
        import(/* webpackChunkName: "bills" */ "@/views/account/bills/bills.view.vue"),
      name: "bills",
      meta: {
        title: "bills",
        noCache: true,
        icon: "money",
        key: "account.bills"
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
        icon: "setting",
        key: "account.account"
      }
    },
    {
      path: "locations",
      component: () =>
        import(
          /* webpackChunkName: "resource-status" */ "@/views/account/location/location.view.vue"
        ),
      name: "resourceLocation",
      meta: {
        title: "resourceLocation",
        noCache: true,
        icon: "resource-2",
        key: "account.resourceLocation"
      }
    }
  ]
};

export default accountRouter;
