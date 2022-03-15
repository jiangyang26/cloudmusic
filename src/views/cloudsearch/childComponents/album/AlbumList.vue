<template>
  <div class="album-list">
    <div class="item-list" v-for="item in albumList" :key="item.id">
      <div class="img-box"><img :src="item.blurPicUrl" alt=""></div>
      <div class="name-box">{{item.name}}</div>
      <div class="artist-box">{{item.artist.name}} <span class="alias">({{item.artist.alias[0]}})</span></div>
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
    albumList: {
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
  width: 500px;
}
.artist-box{
  font-size: 13px;
  color: rgb(80,125,175);
}
.item-list:nth-child(2n){
  background-color: rgb(247, 247, 247);
}
.item-list:hover{
  background-color: rgb(240, 240, 240);
}
.alias{
  color: rgb(159,159,159);
}
</style>