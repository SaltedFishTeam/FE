import Vue from 'vue'
import Router from 'vue-router'
import Courses from '@/components/courses/courses'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // redirect: '/courese'
    },
    {
      path: '/courese',
      component: Courses
    }
  ]
})
