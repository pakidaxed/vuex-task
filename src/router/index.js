import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MovieReview from "@/views/MovieReview";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie/:id',
    name: 'Movie Review',
    component: MovieReview
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
