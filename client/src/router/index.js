import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home'
import Sign from '@/views/sign'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path:"/home",
      name:'home',
      component:Home
    },
    {
      path:"/sign",
      name:"sign",
      component:Sign
    }
  ]
})
