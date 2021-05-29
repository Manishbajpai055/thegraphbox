
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* @vite-ignore */'../views/Landing_page.vue')
  },
  {
    path: '/disclaimer',
    name: 'disclaimer ',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* @vite-ignore *//* webpackChunkName: "about" */ '')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ /* @vite-ignore */ '')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import(/* @vite-ignore */ '../views/Projects.vue')
  },
  {
    path: '/meeting',
    name: 'Meeting',
    component: () => import(/* @vite-ignore */ '../views/meeting.vue')
  }
]

export default routes
