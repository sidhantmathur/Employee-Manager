import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/dashboard'
import NewEmployee from '@/components/newEmployee'
import ViewEmployee from '@/components/viewEmployee'
import EditEmployee from '@/components/editEmployee'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'new-employee',
      component: NewEmployee
    },
    {
      path: '/edit/:employee_id',
      name: 'edit-employee',
      component: EditEmployee
    },
    {
      path: '/:employee_id',
      name: 'view-employee',
      component: ViewEmployee
    },
  ]
})
