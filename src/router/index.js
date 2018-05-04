import Vue from 'vue'
import Router from 'vue-router'
import Courses from '@/components/courses/courses'
import Home from '@/components/home/home'
import Chat from '@/components/chat/chat'
import FriendCard from '@/components/chat/friendCard'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/chat'
    },
    {
      path: '/courese',
      component: Courses
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/chat',
      component: Chat
    }
  ]
})
