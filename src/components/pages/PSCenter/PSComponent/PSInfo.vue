<template>
  <div class="body">
    <div class="container">
      <div class="title">个人信息</div>
      <div class="item">
        <div class="item-title">昵称</div>
        <input type="text" class="item-input" placeholder="昵称">
      </div>
      <div class="item">
        <div class="item-title">职位</div>
        <input type="text" class="item-input" placeholder="学生">
      </div>
      <div class="item">
        <div class="item-title">城市</div>
        <input type="text" class="item-input" placeholder="未设置">
      </div>
      <div class="item">
        <div class="item-title">性别</div>
        <input type="text" class="item-input" placeholder="女">
      </div>
      <div class="item">
        <div class="item-title">个性签名</div>
        <input type="text" class="item-input" placeholder="未设置">
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
    width: 94%;
    height: 50px;
    margin: 0 auto;
    margin-top: 30px;
    position: relative;
  }
  .item:nth-child(2){
    margin-top: 40px;
  }
  .item-title {
    width: 120px;
    height: 50px;
    background: lightgray;
    line-height: 50px;
    text-align: center;
    position: absolute;
  }
  .item-input {
    float: left;
    position: absolute;
    width: 650px;
    height: 50px;
    margin-left: 135px;
    box-sizing: border-box;
    font-size: 14px;
    border: none;
    color: black;
    border-bottom: 1px solid lightgray;
    text-indent: 20px;
    background: #fbfbfb;
  }
</style>
