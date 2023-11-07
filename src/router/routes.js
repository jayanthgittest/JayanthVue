
const routes = [
  {
    path: '/jayanth',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/jayanth/', component: () => import('pages/MyHome.vue') },
      { path: '/jayanth/about', component: () => import('pages/AboutMe.vue') },
      { path: '/jayanth/skills', component: () => import('pages/MySkills.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
