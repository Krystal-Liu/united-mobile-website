import Vue from 'vue'
import Router from 'vue-router'

import Unlayer from '../components/cases/Unlayer.vue'
import Canal from '../components/cases/Canal.vue'
import Layer from '../components/cases/Layer.vue'
import Onetouch from '../components/cases/Onetouch.vue'
import Government from '../components/cases/Government.vue'

import Home from '../components/Home'
import News from '../components/News.vue'
import Introduce from '../components/Introduce.vue'
import Notice from '../components/Notice.vue'
import Details from '../components/cases/Details.vue'

Vue.use(Router)

export default new Router({
  routes: [
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
    {path: '/', name: 'Home' , component: Home},
    {path: '/introduce', name: 'Introduce', component: Introduce},
    {path: '/news', name: 'News' , component: News},
    {path: '/notice', name: 'Notice' , component: Notice},
    {path: '/news/details', name: 'Details',component: Details},
    {path: '/notice/details', name: 'Details', component: Details}
  ]
})
