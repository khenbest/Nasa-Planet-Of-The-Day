import Vue from 'vue'
import Router from 'vue-router'
import APOD from './views/APOD.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'apod',
      component: APOD
    },
    {
      path: '*',
      redirect: 'about',
    },
  ]
})
