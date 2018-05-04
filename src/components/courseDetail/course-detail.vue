<template>
  <div class="courseDetail">
    <div class="course-info">
      <div class="path">
        <a href="" class="name">课程</a>
        <i class="path-split">\</i>
        <a href="" class="name">前端开发</a>
        <i class="path-split">\</i>
        <a href="" class="name">ReactJS</a>
        <i class="path-split">\</i>
        <a href="" class="name">
          <span>React知识点综合运用实例</span>
        </a>
      </div>
      <div class="hd">
        <h2 class="l">React知识点综合运用实例</h2>
      </div>
      <div class="statics">
        <div class="teacher-info">
          <img src="https://img2.mukewang.com/57a333b400010f6006400478-80-80.jpg" alt="">
          <div class="content">
            <span class="tit">
              <a href="">codeing迪斯尼...</a>
            </span>
            <span class="job">全栈工程师</span>
          </div>
        </div>
        <div class="static-item l">
          <span class="meta">难度</span>
          <span class="meta-value">初级</span>
        </div>
        <div class="static-item l">
          <span class="meta">时长</span>
          <span class="meta-value">1小时37分</span>
        </div>
        <div class="static-item l">
          <span class="meta">学习人数</span>
          <span class="meta-value">1421</span>
        </div>
        <div class="static-item l">
          <span class="meta">综合评分</span>
          <span class="meta-value">10.0</span>
        </div>
      </div>
    </div>
    <div class="course-info-menu">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="课程章节" name="first">
          <div class="content-wrap">
            <div class="content">
              <div class="course-description course-wrap">
                简介：本套课程将带领大家完成一个综合实例操作，对前面所学的知识进行完美综合，使技能掌握更纯熟，对react更加深入的了解与掌握
              </div>
              <div class="course-chapters">
                <div class="chapter course-wrap">
                  <course-chapter></course-chapter>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane class="el-tab-pane" label="问答评论" name="second">
          <div class="content-wrap">
            <div class="content">
              <div class="comp-filter-bar">
                <el-row>
                  <el-button round>全部</el-button>
                  <el-button round>评论</el-button>
                  <el-button round>问答</el-button>
                  <el-button round>未解决</el-button>
                  <el-button round>精华</el-button>
                </el-row>
              </div>
              <div class="answertabcon">
                <answer-item></answer-item>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane class="el-tab-pane" label="同学笔记" name="third">
          <div class="content-wrap">
            <div class="content">
              <div class="comp-filter-bar">
                <el-row>
                  <el-button round>最新</el-button>
                  <el-button round>点赞</el-button>
                </el-row>
              </div>
              <div class="answertabcon">
                <answer-item></answer-item>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane class="el-tab-pane" label="用户评价" name="fourth">
          <div class="content-wrap">
            <div class="content">
              <div class="evaluation-info">
                <div class="evaluation-title">
                  综合<br>评分
                </div>
                <div class="evaluation-score">9.5</div>
              </div>
              <div class="answertabcon">
                <answer-item></answer-item>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import CourseChapter from '@/base/course-chapter/course-chapter'
import AnswerItem from '@/base/answer-item/answer-item'
export default {
  data() {
    return {
      activeName: 'first',
    }
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event)
    }
  },
  components: {
    CourseChapter,
    AnswerItem
  }
    
}
</script>
<style lang="stylus">
  .courseDetail
    width 100%
    .course-info
      background-color #172a34
      padding 0 60px
      padding-bottom 30px
      .path
        padding-top 16px
        padding-bottom 24px
        line-height 24px
        font-size 12px
        color rgba(255, 255, 255, .5)
        .name
          color rgba(255, 255, 255, .5)
        .path-split
          margin 0 8px
        i
          font-style normal
      .hd
        .l
          margin-bottom 8px
          line-height 48px
          font-size 32px
          color #fff
      .statics
        color #fff
        font-size 0
        .teacher-info
          display inline-block
          line-height 12px
          font-size 12px
          padding-right 60px
          img
            float left
            width 48px
            height 48px
            border-radius 100%
          .content
            float left
            padding-left 4px
            .tit
              display block
              margin-top 3px
              a
                font-size 14px
                line-height 22px
                font-weight 700
                color #fff
            .job
              font-size 12px
              line-height 18px
        .static-item
          position relative
          display inline-block
          margin-right 16px
          font-size 12px
          top -22px
          .mate
            padding-right 8px
            line-height 12px
            font-size 12px
            font-weight 700
    .course-info-menu 
      width 100%
      // line-height 68px
      background-color #fff
      box-shadow 0 4px 8px 0 rgba(28,31,33,.1)
      .el-tabs__item
        padding 0 60px
        &.is-top:nth-child(2)
          padding-left 60px
        &.is-top:last-child
          padding-right 60px
      .content-wrap
        width 100%
        padding-left 50px
        .content
          width 60%
          padding-top 36px
          .course-description
            line-height 28px
            &.course-wrap
              margin-bottom 8px
              padding 24px 32px 32px
              background #fff
              box-shadow 0 8px 16px rgba(7, 17, 27, .1)
              border-radius 12px
      .content-wrap
        width 100%
        padding-left 50px
        .content
          width 60%
          padding-top 36px
          
</style>
