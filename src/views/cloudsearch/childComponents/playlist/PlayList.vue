<template>
  <div class="play-list">
    <div class="item-list" v-for="item in playList" :key="item.id">
      <div class="img-box"><img :src="item.coverImgUrl" alt=""></div>
      <div class="name-box">{{item.name}}</div>
      <div class="artist-box">{{item.trackCount}}首</div>
      <div class="username">{{item.creator.nickname}}</div>
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
    playList: {
      type: Array,
      default() {
        return []
      }
    }
  }
};
</script>

<style scoped>
.item-list{
  display: flex;
  align-items: center;
  padding: 15px 0px;
}
.img-box{
  display: flex;
  align-items: center;
}
.img-box>img{
  width: 75px;
  border-radius: 7px;
}
.name-box{
  margin-left: 20px;
  font-size: 15px;
  width: 350px;
}
.artist-box{
  font-size: 13px;
  color: rgb(159,159,159);
  width: 180px;
}
.item-list:nth-child(2n){
  background-color: rgb(247, 247, 247);
}
.item-list:hover{
  background-color: rgb(240, 240, 240);
}
.username{
  color: rgb(97,97,98);
  font-size: 13px;
}
</style>