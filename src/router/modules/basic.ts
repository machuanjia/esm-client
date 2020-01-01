import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

const basicRouter: RouteConfig = {
  path: '/basic',
  component: Layout,
  redirect: 'noredirect',
  name: 'Basic',
  meta: {
    title: 'Basic',
    icon: 'tree-table'
  },
  children: [
    {
      path: 'organizations',
      component: () => import(/* webpackChunkName: "organization" */ '@/views/organizations/organizations.view.vue'),
      name: 'Organization',
      meta: {
        title: 'organization',
        noCache: true,
        icon: 'tree'
      }
    },
    {
      path: 'members',
      component: () => import(/* webpackChunkName: "members" */ '@/views/members/members.view.vue'),
      name: 'Members',
      meta: {
        title: 'members',
        noCache: true,
        icon: 'peoples'
      }
    },
    {
      path: 'roles',
      component: () => import(/* webpackChunkName: "roles" */ '@/views/roles/roles.view.vue'),
      name: 'Roles',
      meta: {
        title: 'roles',
        noCache: true,
        icon: 'user'
      }
    },
    {
      path: 'permissions',
      component: () => import(/* webpackChunkName: "roles" */ '@/views/permissions/permissions.view.vue'),
      name: 'Permissions',
      meta: {
        title: 'permissions',
        noCache: true,
        icon: 'education'
      }
    }
  ]
}

export default basicRouter
