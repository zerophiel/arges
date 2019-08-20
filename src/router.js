import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Form from "./views/Form";
import Scoreboard from "./views/Scoreboard";
import PageNotFound from "./views/PageNotFound";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/scoreboard',
      name: 'scoreBoard',
      component: Scoreboard
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    },
    {
      path:"*",
      component: PageNotFound
    }
  ]
})
