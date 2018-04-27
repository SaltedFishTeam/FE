import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import HelloWorld from '@/components/HelloWorld'
import PSCenter from '@/components/pages/PSCenter/PSCenter'
import PSBind from '@/components/pages/PSCenter/PSComponent/PSBind.vue'
import PSInfo from '@/components/pages/PSCenter/PSComponent/PSInfo.vue'
import PSCourse from '@/components/pages/PSCenter/PSComponent/PSCourse.vue'
import PSNotes from '@/components/pages/PSCenter/PSComponent/PSNotes.vue'
import PSBook from '@/components/pages/PSCenter/PSComponent/PSBook.vue'
import PSAdress from '@/components/pages/PSCenter/PSComponent/PSAdress.vue'

=======
import Courses from '@/components/courses/courses'
import CourseContent from '@/base/course-content/course-content'
>>>>>>> 0ee39339334f422ba93bfd032c4f5d091d73ac9e
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/pscenter',
      component: PSCenter,
      children: [
        {path: '/', name: 'PSBind', component: PSBind},
        {path: '/pscenter/psinfo', name: 'PSInfo', component: PSInfo},
        {path: '/pscenter/pscourse', name: 'PSCourse', component: PSCourse},
        {path: '/pscenter/psnotes', name: 'PSNotes', component: PSNotes},
        {path: '/pscenter/psbook', name: 'PSBook', component: PSBook},
        {path: '/pscenter/psadress', name: 'PSAdress', component: PSAdress},
=======
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
>>>>>>> 0ee39339334f422ba93bfd032c4f5d091d73ac9e
      ]
    }
  ]
})
