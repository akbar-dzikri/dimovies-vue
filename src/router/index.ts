import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import MoviesViewVue from '@/views/MoviesView.vue'
import CreditsViewVue from '@/views/CreditsView.vue' 

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
      component: AboutView
    },
    {
      path: '/movies',
      name: 'movies',
      component: MoviesViewVue
    },
    {
      path: '/credits',
      name: 'credits',
      component: CreditsViewVue
    }
  ]
})

export default router
