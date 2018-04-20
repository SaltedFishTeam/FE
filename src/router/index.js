import Vue from 'vue'
import Router from 'vue-router'
import Courses from '@/components/courses/courses'
import CourseContent from '@/base/course-content/course-content'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // redirect: '/courses'
    },
    {
      path: '/courses',
      component: Courses,
      children: [
        {
          path: 'content',
          component: CourseContent
        }
      ]
    }
  ]
})
