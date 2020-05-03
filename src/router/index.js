import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/Homepage.vue'
import ProfilePage from '../views/ProfilePage.vue'
import SellerPage from '../views/SellerPage.vue'
import HomePageIn from '../views/HomePageIn.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/profile',
    name: 'Homepage',
    component: ProfilePage
  },
  {
    path: '/seller',
    name: 'Seller',
    component: SellerPage
  },
  {
    path: '/homepage',
    name: 'Homepagein',
    component: HomePageIn
  },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router