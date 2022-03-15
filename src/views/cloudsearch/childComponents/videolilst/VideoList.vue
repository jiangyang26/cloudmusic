<template>
  <div class="video-list">
    <div class="item-list" v-for="item in videoList" :key="item.vid">
      <div class="img-box">
        <img :src="item.coverUrl" alt="">
      </div>
      <!-- 视频名称 -->
      <div class="title">{{item.title}}</div>
      <!-- 发布作者名称 -->
      <div class="name">{{item.creator[0].userName}}</div>
      <!-- 播放数量 -->
      <div class="broadcast"> 
        <img src="~assets/img/broadcast.png" alt="">
        <span>{{item.playTime}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  props: {
    videoList: {
      type: Array,
      default() {
        return []
      }
    }
  }
};
</script>

<style scoped>
.video-list{
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
.item-list{
  width: 30%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 25px;
}
.img-box>img{
  width: 100%;
  border-radius: 6px;
}
.item-list:nth-child(3n-1){
  margin: 0px 5%;
}
.title{
  font-size: 14px;
  color: rgb(55,55,55);
  margin-top: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.name{
  font-size: 14px;
  color: rgb(80,125,175);
  margin-top: 8px;
}
.broadcast{
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  top: 5px;
}
.broadcast>img{
  width: 16px;
}
.broadcast>span{
  font-size: 13px;
  color: white;
  margin-right: 10px;
  margin-left: 5px;
}
</style>