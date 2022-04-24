import Vue from "vue"
import VueRouter from "vue-router"
import AdventOfCode from "../components/AdventOfCode.vue"

// Do not install a router in tests, since that prevents $route and $router to be mocked.
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'aoc4',
    component: AdventOfCode,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router