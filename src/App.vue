<template>
  <div id="app">
    <tab></tab>
    <router-view/>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Courses from '@/components/courses/courses'
export default {
  name: 'App',
  components: {
    Courses,
    Tab
  }
}
</script>

<style>

</style>
