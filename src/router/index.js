import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TripInfoShareView from "@/views/TripInfoShareView.vue"
import CreateTripInfoShare from "@/components/CreateTripInfoShare.vue"
import TripInfoShareList from "@/components/TripInfoShareList.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      path: '/tripInfoShare',
      name: 'tripInfoShare',
      component: TripInfoShareView,
      children: [
        {
          path: 'createTripInfoShare',
          name: 'createTripInfoShare',
          component: CreateTripInfoShare
        },
        {
          path: 'tripInfoShareList',
          name: 'tripInfoShareList',
          component: TripInfoShareList
        }
      ]
    }
  ]
})

export default router
