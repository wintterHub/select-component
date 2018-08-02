import Vue from 'vue'
import Router from 'vue-router'
import select from '../../select.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: select
    }
  ]
})