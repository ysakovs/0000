import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '@/components/Register.vue'
import Login from '@/components/Login.vue'
import BrowseSongs from '@/components/BrowseSongs.vue'
import CreateSong from '@/components/CreateSong.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/songs',
    name: 'songs',
    component: BrowseSongs
  },
  {
    path: '/songs/create',
    name: 'create',
    component: CreateSong
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
