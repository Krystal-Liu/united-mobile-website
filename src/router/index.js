import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Unlayer from '../components/cases/Unlayer.vue'
import Canal from '../components/cases/Canal.vue'
import Layer from '../components/cases/Layer.vue'
import Onetouch from '../components/cases/Onetouch.vue'
import Government from '../components/cases/Government.vue'
import Slide from '../components/common/Slide.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/unlayer',
      name: 'Unlayer',
      component: Unlayer
    },
    {
      path: '/canal',
      name: 'Canal',
      component: Canal
    },
    {
      path: '/layer',
      name: 'Layer',
      component: Layer
    },
    {
      path: '/onetouch',
      name: 'Onetouch',
      component: Onetouch
    },
    {
      path: '/government',
      name: 'Government',
      component: Government
    },
    {
      path: '/slide',
      name: 'Slide',
      component: Slide
    }
  ]
})
