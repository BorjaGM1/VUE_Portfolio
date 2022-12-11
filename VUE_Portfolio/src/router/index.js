import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import Algorithms from '../components/Algorithms.vue'
import Squares from '../components/Squares.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexView
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
      path: '/Algorithms',
      name: 'Algorithms',
      component: Algorithms
    },
    {
      path: '/Squares',
      name: 'Squares',
      component: Squares
    }
  ]
})

export default router
