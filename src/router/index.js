import Vue from 'vue'
import VueRouter from 'vue-router'
import HalamanUtama from '../views/HalamanUtama.vue'
import ProfilePage from '../views/ProfilePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HalamanUtama',
    component: HalamanUtama
  },
  {
    path: '/profile',
    name: 'HalamanUtama',
    component: ProfilePage
  },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router