<template>
  <div id="app">
    <tab></tab>
    <course-detail></course-detail>
    <router-view/>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Courses from '@/components/courses/courses'
import CourseDetail from '@/components/courseDetail/course-detail'
export default {
  name: 'App',
  components: {
    Courses,
    Tab,
    CourseDetail
  }
}
</script>

<style>

</style>
