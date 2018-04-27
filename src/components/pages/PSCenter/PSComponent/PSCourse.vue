<template>
  <div class="body">
    <div class="container">
      <div class="title">我的课程</div>
      <div class="item">
        <div class="item-img">图片</div>
        <p class="item-name">几何数学</p>
        <p class="item-info">
          <span class="item-finish">已学 16%</span>
          <span class="item-time">用时 19分</span>
        </p>
        <p class="item-three">
          <span class="item-note">笔记 2</span>
          <span class="item-question">提问 2</span>
          <span class="item-homework">作业 1</span>
        </p>
        <button class="item-study">继续学习</button>
      </div>
      <div class="item">
        <div class="item-img">图片</div>
        <p class="item-name">三角函数</p>
        <p class="item-info">
          <span class="item-finish">已学 5%</span>
          <span class="item-time">用时 26分</span>
        </p>
        <p class="item-three">
          <span class="item-note">笔记 0</span>
          <span class="item-question">提问 1</span>
          <span class="item-homework">作业 1</span>
        </p>
        <button class="item-study">继续学习</button>
      </div>
      <div class="item">
        <div class="item-img">图片</div>
        <p class="item-name">立体几何</p>
        <p class="item-info">
          <span class="item-finish">已学 100%</span>
          <span class="item-time">用时 3小时37分</span>
        </p>
        <p class="item-three">
          <span class="item-note">笔记 4</span>
          <span class="item-question">提问 5</span>
          <span class="item-homework">作业 7</span>
        </p>
        <button class="item-study">继续学习</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .body {
    width: 100%;
    /* background: blueviolet; */
    position: relative;
    height: 100%;
  }
  .container {
    position: absolute;
    width: 90%;
    height: 90%;
    background: #fbfbfb;
    position: absolute;
    margin-left: 5%;
    margin-top: 3.3%;
  }
  .title {
    width: 100%;
    /* background: white; */
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid lightgray;
    text-indent: 50px;
    font-size: 20px;
    font-weight: 600;
  }
  .item {
    width: 100%;
    height: 120px;
    position: relative;
    margin-top: 30px;
  }
  .item:nth-child(2) {
    margin-top: 40px;
  }
  .item-img {
    width: 180px;
    height: 100%;
    background: lightgray;
    line-height: 120px;
    text-align: center;
    color: gray;
    position: absolute;
    margin-left: 20px;
  }
  .item-name {
    margin-left: 220px;
    font-weight: 500;
    font-size: 18px;
    padding-top: 15px;
  }
  .item-info {
    margin-left: 220px;
    font-size: 14px;
    padding-top: 15px;
  }
  .item-finish {
    color: red;
  }
  .item-time {
    margin-left: 15px;
  }
  .item-three {
    position: absolute;
    margin-left: 220px;
    font-size: 14px;
    padding-top: 15px;
    /* float: left; */
  }
  .item-question, .item-homework {
    margin-left: 110px;
  }
  .item-study {
    position: absolute;
    margin-left: 700px;
    width: 100px;
    height: 40px;
    border: 1px solid red;
    background: #fbfbfb;
    font-size: 16px;
    color: red;
    border-radius: 5px;
    margin-top: -35px;
  }
  
</style>
