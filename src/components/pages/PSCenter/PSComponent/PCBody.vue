<template>
  <div class="body">
    <div class="left">
      <div class="avatar">
        <div class="avatat-img">头像</div>
        <div class="avatar-name">昵称</div>
      </div>
      <div class="management">
        <div class="zh-mana">账户管理</div>
        <div class="mana-list">
          <input type="radio" class="tab1" id="tab-1" checked />
          <input type="radio" class="tab2" id="tab-2" />
          <input type="radio" class="tab3" id="tab-3" />
          <input type="radio" class="tab4" id="tab-4" />
          <input type="radio" class="tab5" id="tab-5" />
          <input type="radio" class="tab6" id="tab-6" />
          <ul class="manalist">
            <router-link to="/pscenter">
              <li class="mana-item"><label for="tab-1">账户绑定</label></li>
            </router-link>
            <router-link to="/pscenter/psinfo">
              <li class="mana-item"><label for="tab-2">个人信息</label></li>
            </router-link>
            <router-link to="/pscenter/pscourse">
              <li class="mana-item"><label for="tab-3">我的课程</label></li>
            </router-link>
            <router-link to="/pscenter/psnotes">
              <li class="mana-item"><label for="tab-4">我的笔记</label></li>
            </router-link>
            <router-link to="/pscenter/psbook">
              <li class="mana-item"><label for="tab-5">我的错题</label></li>
            </router-link>
            <router-link to="/pscenter/psadress">
              <li class="mana-item"><label for="tab-6">收件地址</label></li>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
    <div class="right">
      <router-view></router-view>
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
  box-sizing: border-box;
}
.body {
  width: 100%;
}
.left {
  width: 260px;
  height: 100%;
  float: left;
  background: #fbfbfb;
}
.avatar {
  position: relative;
  width: 100%;
  height: 30%;
}
.avatat-img {
  position: absolute;
  width: 100px;
  height: 100px;
  margin-top: 40px;
  margin-left: 80px;
  background: white;
  line-height: 100px;
  text-align: center;
  border-radius: 50%;
  border: 1px solid lightgray;
}
.avatar-name {
  position: absolute;
  width: 100%;
  height: 30px;
  text-align: center;
  margin-top: 155px;
  font-size: 14px;
}
.management {
  width: 85%;
  height: 70%;
  margin: 0 auto;
}
.zh-mana {
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-bottom: 1px solid lightgray;
  font-size: 18px;
  font-weight: 600;
}
.mana-list {
  width: 100%;
}
.manalist {
  list-style: none;
}
.mana-item {
  width: 90%;
  height: 40px;
  text-indent: 20px;
  margin-top: 10px;
  line-height: 40px;
  margin-left: 5%;
  position: relative;
}
.mana-item:hover {
  border: 1px solid gray;
}

.mana-item::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  border-top: 2px solid black;
  border-right: 2px solid black;
  transform: rotate(45deg);
  margin-top: 14px;
  margin-left: 80px;
}
.manalist a {
  text-decoration: none;
  color: black;
}
/* .mana-item:checked {
  background: black;
} */
/* #router-a:target {
  background: black;
} */

input[type="radio"] {
  display: none;
}
.tab1:checked ~ .manalist .a .mana-item1, 
.tab2:checked ~ .manalist .a .mana-item2, 
.tab3:checked ~ .manalist .a .mana-item3,
.tab4:checked ~ .manalist .a .mana-item4,
.tab5:checked ~ .manalist .a .mana-item5, 
.tab6:checked ~ .manalist .a .mana-item6, {
  background: lightblue;
}
.right {
  float: left;
  width: 940px;
  height: 100%;
  background: #fbfbfb;
  border-left: 1px solid lightgray;
}
</style>
