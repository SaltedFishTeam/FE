<template>
  <div class="top">
    <div class="container">
      <div class="logo"></div>
      <div class="toplists">
        <div class="toplist">
          <ul class="top-list">
            <li class="top-item">
              <router-link to="/">
                <i class="iconfont icon-home"></i>
                首页
              </router-link>
            </li>
            <li class="top-item">
              <router-link to="">我的课程</router-link>
            </li>
            <li class="top-item">
              <router-link to="">学习资料</router-link>
            </li>
            <li class="top-item">
              <router-link to="">线下活动</router-link>
            </li>
            <li class="top-item">
              <router-link to="">论坛区</router-link>
            </li>
          </ul>
        </div>
        <div class="toplist2">
          <ul class="top-list2">
            <li class="top2-item">
              <router-link to="">
                <i class="iconfont icon-message"></i>
                消息
              </router-link>
            </li>
            <li class="top2-item">
              <router-link to="">
                <i class="iconfont icon-user"></i>
                个人中心
              </router-link>
            </li>
            <li class="top2-item">
              <router-link to="">
                <i class="iconfont icon-shezhi"></i>
              </router-link>
            </li>
          </ul>
        </div>
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
.top {
  width: 100%;
  height: 80px;
}
.container {
  width: 1200px;
  height: 80px;
  background: black;
  margin: 0 auto;
  position: relative;
}
.logo {
  position: absolute;
  width: 50px;
  height: 50px;
  background: white;
  margin-top: 15px;
  margin-left: 25px;
}
.toplists {
  position: absolute;
  width: 800px;
  height: 30px;
  margin-left: 180px;
  /* margin-top: 30px; */
  line-height: 80px;
}
.toplist {
  width: 400px;
  height: 40px;
}
.top-list {
  list-style: none;  
}
.top-item,.top2-item{
  float: left;
  margin-left: 30px;
}
ul li:first-child {
  margin-left: 0;
}
.top-item a, .top2-item a{
  text-decoration: none;
  color: white;
}
.iconfont {
  color: white;
}
.toplist2 {
  width: 250px;
  height: 40px;
  position: absolute;
  margin-left: 750px;
  margin-top: -20px;
  line-height: 40px;
}
.top-list2 {
  list-style: none;
}
</style>
