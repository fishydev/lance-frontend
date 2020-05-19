import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/Homepage.vue'
import ProfilePage from '../views/ProfilePage.vue'
import SellerPage from '../views/SellerPage.vue'
import HomePageIn from '../views/HomePageIn.vue'
import AddJob from '../views/AddJob.vue'
import UpdateProfile from '../views/UpdateProfile.vue'
import CategoryPage from '../views/CategoryPage.vue'
import JobPage from '../views/JobPage.vue'

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
  {
    path: '/addjob',
    name: 'AddJob',
    component: AddJob
  },
  {
    path: '/updateprofile',
    name: 'UpdateProfile',
    component: UpdateProfile
  },
  {
    path: '/category',
    name: 'CategoryPage',
    component: CategoryPage
  },
  {
    path: '/jobpage',
    name: 'JobPage',
    component: JobPage
  },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router