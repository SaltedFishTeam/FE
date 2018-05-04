<template>
  <div class="course-chapter">
    <div class="chapter course-wrap">
      <h3>1章 运用ReactRouter开发一个单页App</h3>
      <div class="chapter-description">
        本章节主要运用ReactRouter开发一个单页App
      </div>
      <ul class="video">
        <li v-for="item in chapterDesc" :key="item.index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chapterDesc:['1-1 运用ReactRouter开发一个单页App','1-2 运用ReactRouter开发一个单页App','1-3 运用ReactRouter开发一个单页App']
    }
  }
}
</script>
<style lang="stylus">
  .course-chapter
    width 100%
    .course-wrap
      margin-bottom 8px
      padding 24px 32px 32px
      box-shadow 0 8px 16px 0 rgba(7, 17, 27, .1)
      border-radius 12px
      background #fff
      h3
        color #1c1f21
        font-size 16px
        font-weight 700
        line-height 24px
      .chapter-description
        margin-top 2px
        font-size 12px
        color #545c63
        line-height 18px
      .video
        li
          padding-left 12px
          height 48px
          line-height 48px
          list-style none
</style>

