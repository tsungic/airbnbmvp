import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/Home.vue'
import signIn from '../views/Signin.vue'
import signUp from '../views/Signup.vue'
import postListing from '../views/PostListing.vue'
import viewListing from '../views/ViewListing.vue'



Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name: "home-page",
    component: home
  },
  {
    path: '/Signin',
    name: 'signin-page',
    component: signIn
  },
  {
    path:'/Signup',
    name: "signup-page",
    component: signUp
  },
  {
    path:'/PostListing',
    name: "postlisting-page",
    component: postListing
  },
  {
    path:'/ViewListing',
    name: "viewlisting-page",
    component: viewListing
  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
