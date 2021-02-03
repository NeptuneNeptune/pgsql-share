import Vue from 'vue'
import App from './App'
import store from './vuex/store'
import VueRouter from 'vue-router'
import routes from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(VueRouter)
Vue.use(ElementUI)

Vue.config.productionTip = false

const router = new VueRouter({
  "mode": 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
