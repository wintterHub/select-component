import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './app.vue'
import router from './router/routes.js'
import axios from 'axios'
import HSelect from '../index.js'
window.axios = axios

Vue.use(ElementUI)
Vue.use(HSelect)

new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App)
})
