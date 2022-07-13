import { createRouter, createWebHistory } from 'vue-router'
import seriesView from '../views/seriesView.vue'
import filmsView from '../views/filmsView.vue'
import HomeView from '../views/HomeView.vue'
import SeriesDetails from '../views/seriesDetailsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/serie',
    name: 'seriesView',
    component: seriesView
  },
  {
    path: '/film',
    name: 'filmsView',
    component: filmsView
  },
  {
    path: '/serie/:id',
    name: 'seriesDetails',
    component: SeriesDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
