import Vue from 'vue'
import Router from 'vue-router'
import Todo from '../components//ToDo.vue'
import AllQuotes from '../components/AllQuotes.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ToDo',
      component: Todo
    },
    {
      path: '/quote/all',
      name: 'AllQuotes',
      component: AllQuotes
    }
  ]
})