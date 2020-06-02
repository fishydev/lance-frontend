import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/Homepage.vue'
import ProfilePage from '../views/ProfilePage.vue'
import SellerPage from '../views/SellerPage.vue'
import HomepageIn from '../views/HomepageIn.vue'
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
    path: '/home',
    name: 'Homepagein',
    component: HomepageIn
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
    let token = localStorage.getItem('token')
    let isAuthenticated = localStorage.getItem('isAuth')

    axios.get('https://lance-be.herokuapp.com/users/checkLogin', { headers: { 'x-access-token': token }}).then((res) => {
        if (res.status === 200)
            isAuthenticated = true
        else
            isAuthenticated = false
    })

    if (to.name !== 'Homepage' && isAuthenticated == false) {
        alert("Please login first")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
        next({ name: 'Homepage' })
  
    }
    else
        next()
})

  export default router