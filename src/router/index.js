import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


let routes=[
  {
    path: '/',
    name: 'home',
    alias:'/home',
    component: ()=>import("@/components/Home")
  }
]

export default routes
