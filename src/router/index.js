import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/Homepage.vue'
import ProfilePage from '../views/ProfilePage.vue'
import SellerPage from '../views/SellerPage.vue'
import HomepageIn from '../views/HomepageIn.vue'
import AddJob from '../views/AddJob.vue'
import UpdateProfile from '../views/UpdateProfile.vue'
import CategoryPage from '../views/CategoryPage.vue'
import JobPage from '../views/JobPage.vue'
import axios from 'axios'

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

router.beforeEach((to, from, next) => {
    let isAuthenticated = () => {
        axios.post('https://lance-be.herokuapp.com/checkLogin', localStorage.getItem('token')).then((res) => {
            if (res.status == 200)
                return true
            else
                return false
        })
    }

    if (to.name !== 'Homepage' && isAuthenticated === false) {
        window.alert("You need to login first")
        next({ name: 'Homepage' })
    }
    else
        next()
})

  export default router