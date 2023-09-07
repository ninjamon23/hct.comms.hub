import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/lead', component: () => import('pages/LeadPage.vue') },
      {
        path: '/campaign',
        template: '<router-view/>',
        children: [
          { path: '', component: () => import('pages/CampaignPage.vue') },
          { path: 'new', component: () => import('pages/CampaignNew.vue') }
        ]
      },
      {
        path: '/scripts',
        template: '<router-view/>',
        children: [
          { path: '', component: () => import('pages/ScriptList.vue') },
          { path: 'new', component: () => import('pages/ScriptNew.vue') }
        ]
      },
      {
        path: '/review',
        component: () => import('pages/ReviewManagerPage.vue')
      }
    ]
  },
  { path: '/login', component: () => import('pages/LoginPage.vue') },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
