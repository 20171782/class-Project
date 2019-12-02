import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import events from '../views/newAndEvents'
import policy from '../views/BusinessPolicy'
import Contact from '../views/Contact'
import services from '@/components/services/services.vue'
import gallery from '@/views/gallery'

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.min.css'

// loads the Icon plugin
UIkit.use(Icons);



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/events',
    name: 'newAndEvents',
    component: events
  },

  {
    path: '/policy',
    name: 'BusinessPolicy',
    component: policy
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/services',
    name: 'services',
    component: services
  },{
    path: '/gallery',
    name: 'gallery',
    component:gallery
  },


  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
