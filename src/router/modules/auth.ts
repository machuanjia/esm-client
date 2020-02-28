import { RouteConfig } from "vue-router";
import Layout from "@/layout/index.vue";

const authRouter: RouteConfig = {
  path: "/auth",
  component: Layout,
  redirect: "noredirect",
  name: "org",
  meta: {
    title: "org",
    icon: "tree-table",
    key: "auth*"
  },
  children: [
    {
      path: "organizations",
      component: () =>
        import(
          /* webpackChunkName: "organization" */ "@/views/auth/organizations/organizations.view.vue"
        ),
      name: "Organization",
      meta: {
        title: "organization",
        noCache: true,
        icon: "tree",
        key: "auth.organization"
      }
    },
    {
      path: "members",
      component: () =>
        import(
          /* webpackChunkName: "members" */ "@/views/auth/members/members.view.vue"
        ),
      name: "Members",
      meta: {
        title: "members",
        noCache: true,
        icon: "peoples",
        key: "auth.members"
      }
    },
    {
      path: "roles",
      component: () =>
        import(/* webpackChunkName: "roles" */ "@/views/auth/roles/roles.view.vue"),
      name: "Roles",
      meta: {
        title: "roles",
        noCache: true,
        icon: "user",
        key: "auth.roles"
      }
    },
    {
      path: "permissions",
      component: () =>
        import(
          /* webpackChunkName: "roles" */ "@/views/auth/permissions/permissions.view.vue"
        ),
      name: "Permissions",
      meta: {
        title: "permissions",
        noCache: true,
        icon: "education",
        key: "auth.permissions"
      }
    },
    {
      path: "application",
      component: () =>
        import(
          /* webpackChunkName: "roles" */ "@/views/auth/application/application.view.vue"
        ),
      name: "Application",
      meta: {
        title: "application",
        noCache: true,
        icon: "component",
        key: "auth.application"
      }
    }
  ]
};

export default authRouter;
