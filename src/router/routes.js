import Vue from 'vue'
import Router from 'vue-router'
import testSelect from '../testSelect.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: testSelect
    }
  ]
})
