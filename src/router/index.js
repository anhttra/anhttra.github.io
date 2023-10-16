import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/blogs',
      name: 'blog-list',
      component: () => import('../views/BlogListView.vue')
    },
    {
      path: '/blogs/:slug',
      name: 'blog-page',
      component: () => import('../views/BlogPageView.vue')
    },
    // ... other paths ...
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../views/NotFoundView.vue")
    },
  ]
})

export default router
