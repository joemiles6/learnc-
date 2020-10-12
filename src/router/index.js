import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'
import signup from '../views/signup.vue'
import welcome from '../views/welcomePage.vue'
import introduction from '../components/introduction.vue'
import started from '../components/started.vue'
import syntax from '../components/syntax.vue'
import output from '../components/output.vue'
import comments from '../components/comments.vue'
import variables from '../components/variables.vue'
import userInput from '../components/userinput.vue'
import datatypes from '../components/datatypes.vue'
import operator from '../components/oprator.vue'
import strings from '../components/string.vue'
import math from '../components/math.vue'
import boolean from '../components/booleans.vue'
import condition from '../components/condition.vue'
import loops from '../components/loops.vue'
import array from '../components/arrays.vue'
import errorpage from '../components/notfound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component: errorpage
  },
  {
    path: '/course/introduction',
    name: 'signup',
    component: welcome,
    meta: { requiresAuth: true },
    children: [
      {
        path:'',
        component: introduction
      },
      {
        path:'/course/started',
        component: started
      },
      {
        path:'/course/syntax',
        component: syntax
      },
      {
        path:'/course/output',
        component: output
      },
      {
        path:'/course/comments',
        component: comments
      },
      {
        path:'/course/variables',
        component: variables
      },
      {
        path:'/course/user-inputs',
        component: userInput
      },
      {
        path:'/course/data-types',
        component: datatypes
      },
      {
        path:'/course/operators',
        component: operator
      },
      {
        path:'/course/Strings',
        component: strings
      },
      {
        path:'/course/maths',
        component: math
      },
      {
        path:'/course/boolean',
        component: boolean
      },
      {
        path:'/course/conditions',
        component: condition
      },
      {
        path:'/course/loops',
        component: loops
      },
      {
        path:'/course/array',
        component: array
      },


      
    ]
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { requiresAuth1: true },

  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: { requiresAuth1: true },
  },
  {
    path: '/signup',
    // name: 'signup',
    component: signup,
    meta: { requiresAuth1: true },

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { requiresAuth: true },

  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})
const loggedIn = localStorage.getItem('token')
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!loggedIn) {
      next({
        path: '/login',
      })
    } else{
      next({})
    }
  } else {
    next() // make sure to always call next()!
  }


  if (to.matched.some(record => record.meta.requiresAuth1)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (loggedIn) {
      next({
        path: '/course/introduction',
      })
    } else{
      next({})
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
  