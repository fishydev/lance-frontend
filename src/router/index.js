import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/Homepage.vue'
import ProfilePage from '../views/ProfilePage.vue'
import SellerPage from '../views/SellerPage.vue'
import HomepageIn from '../views/HomepageIn.vue'
import AddJob from '../views/AddJob.vue'
import UpdateProfile from '../views/UpdateProfile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/profile',
    name: 'ProfilePage',
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
    component: HomepageIn
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
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router