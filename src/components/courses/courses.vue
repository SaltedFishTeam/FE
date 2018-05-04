<template>
  <div class="course">
    <div class="nav-box">
      <div class="courseTab-wrapper">
        <course-tab :data="direction"></course-tab>
      </div>
      <div class="courseTab-wrapper">
        <course-tab :data="classify"></course-tab>
      </div>
      <div class="courseTab-wrapper">
        <course-tab :data="type"></course-tab>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import CourseTab from '@/base/course-tab/course-tab'
export default {
  data() {
    return {
      direction: {
        title: '阶段 :',
        content: ['全部','小学','初中','高中']
      },
      classify: {
        title: '年纪 :',
        content: ['全部','一年级','二年级','三年级','四年级','五年级','六年级','七年级','八年级','九年级']
      },
      type: {
        title: '类型 :',
        content: ['全部','视频','直播','习题','图片']
      }
    }
  },
  components: {
    CourseTab
  }
}
</script>
<style lang="stylus">
  .course
    width 100%
    .nav-box
      width 90%
      margin 0 auto
      .courseTab-wrapper
        width 100%
        padding 32px 0 15px
        border-bottom 1px solid #edf1f2
</style>
