import Vue from 'vue'
import Router from 'vue-router'
import Todo from '../views//ToDo.vue'
import AllQuotes from '../views/AllQuotes.vue'
import table from '../views/Table.vue'
import modal from '../components/EditCalorieModal.vue'

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
    },
    {
      path: '/table',
      name: 'table',
      component: table
    },
    {
      path: '/modal',
      name: 'modal',
      component: modal
    }
  ]
})