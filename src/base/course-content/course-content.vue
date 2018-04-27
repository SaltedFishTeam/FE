<template>
  <div class="courseContent">
    <course-item></course-item>
  </div>
</template>
<script>
import CourseItem from '@/base/course-item/course-item'
export default {
  components: {
    CourseItem
  }
}
</script>
<style lang="stylus">
  .courseContent
    width 100%
    background #F3F5F7
</style>
