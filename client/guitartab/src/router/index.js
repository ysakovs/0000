import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '@/components/Register.vue'
import App from '@/App.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
