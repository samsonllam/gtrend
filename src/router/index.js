import Vue from 'vue'
import Router from 'vue-router'
import gtrend from '@/components/gtrend'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'gtrend',
      component: gtrend
    }
  ]
})
