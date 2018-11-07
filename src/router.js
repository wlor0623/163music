import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'about',
      component: () => import('./views/users/login.vue')
    },
    {
      path: '/find',
      name: 'find',
      component: () => import('./views/find/index.vue')
    },
    {
      path: '/playlistInfo',
      name: 'playlistInfo',
      component: () => import('./views/playlistInfo/index.vue')
    }
  ]
})
