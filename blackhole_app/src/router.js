/*global Vue*/
import Router from 'vue-router'
import header from '@/components/header'
import footer from '@/components/footer'
import home from '@/components/home'
import login from '@/components/user/login'
import my from '@/components/user/my'
import register from '@/components/user/register'
import blackhole from '@/components/blackhole/blackhole'



Vue.component('header',header)
Vue.component('footer',footer)
Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }, {
          path: '/login',
          name: 'login',
          component:login
      },{
          path: '/register',
          name: 'register',
          component:register
      },{
          path: '/my',
          name: 'my',
          component:my
      },{
          path: '/blackhole',
          name: 'blackhole',
          component:blackhole
      }
  ]
})
