<template>
  <div class="new-song">
    <TypeNavBar @typeClick="typeClick"></TypeNavBar>
    <div class="item-new-song" v-for="(item, index) in newSongList" :key="index">
      <div class="number">{{formatIndex(index)}}</div>
      <div class="img-box">
        <img :src="item.album.picUrl" alt="">
        <broadcast-button class="button"></broadcast-button>
      </div>
      <div class="song-name">{{item.name}}</div>
      <div class="singer-name">{{item.artists[0].name}}</div>
      <div class="album-name">{{item.album.name}}</div>
      <div class="play-time">04:32</div>
    </div>
  </div>
</template>

<script>
import TypeNavBar from './../typenavbar/TypeNavBar.vue'
import BroadcastButton from 'components/broadcast/BroadcastButton.vue'

import { getNewSongExpress } from 'network/recommend.js'

export default {
  data() {
    return {
      newSongList: [],
      type: 0
    };
  },

  components: { TypeNavBar, BroadcastButton },

  created() {
    this.requestNewSong()
  },

  methods: {
    // 请求新歌数据
    requestNewSong() {
      getNewSongExpress(this.type).then(res => {
        this.newSongList = res.data.data
      })
    },
    formatIndex(index) {
      if(index < 9) {
        return 0 + '' + (index + 1)
      }else {
        return index + 1
      }
    },
    typeClick(index) {
      switch (index) {
        case 0:
          this.type = 0
          break;
        case 1:
          this.type = 7
          break;
        case 2:
          this.type = 96
          break;
        case 3:
          this.type = 8
          break;
        case 4:
          this.type = 16
          break;
        default:
          break;
      }
    }
  },
  watch: {
    type(newValue, oldValue) {
      this.requestNewSong()
    }
  }
};
</script>

<style scoped>
.item-new-song{
  display: flex;
  align-items: center;
  padding: 10px 0px;
}
.item-new-song:nth-child(2n){
  background-color: rgb(249,249,249); 
}
.item-new-song:hover{
  background-color: rgb(240,241,242);
}
.img-box{
  display: flex;
  position: relative;
}
.img-box>img{
  width: 70px;
  border-radius: 5px;
}
.number{
  width: 40px;
  color: rgb(195,195,196);
  font-size: 14px;
}
.song-name{
  flex-grow: 1;
  margin-left: 40px;
  color: rgb(55,55,55);
  font-size: 15px;
}
.singer-name{
  width: 200px;
  color: rgb(101,101,101);
  font-size: 14px;
}
.album-name{
  width: 200px;
  color: rgb(101,101,101);
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.play-time{
  color: rgb(159,159,159);
  font-size: 14px;
}
.button{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -11px;
  margin-left: -12px;
}
</style>