<template>
  <div class="play-list">
    <div class="title">我创建的歌单 <span class="count">({{user.playlistCount}})</span></div>
    <div class="list">
      <div class="item-list">
        <div class="img"><img src="~assets/img/song_top.png" alt=""></div>
        <div class="describe">我的听歌排行</div>
        <div class="play-song-count">累计听歌{{user.listenSongs}}首</div>
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
    user: {
      type: Object,
      default() {
        return {}
      }
    }
  }
};
</script>

<style scoped>
.play-list{
  margin-top: 60px;
}
.title{
  font-size: 17px;
  font-weight: bold;
}
.count{
  font-size: 13px;
  color: rgb(103,103,103);
}
.list{
  display: flex;
  margin-bottom: 40px;
}
.item-list{
  width: 190px;
  margin-top: 15px;
}
.img{
  background-color: rgb(48,48,46);
  width: 180px;
  height: 180px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img>img{
  width: 140px;
}
.describe{
  font-size: 15px;
  color: rgb(55,55,55);
  margin: 10px 0px;
}
.play-song-count{
  color: rgb(159,159,159);
  font-size: 13px;
}
</style>