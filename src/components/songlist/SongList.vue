<template>
  <div class="song-list">
    <table class="list-table">
      <tr class="header">
        <td></td>
        <td></td>
        <td></td>
        <td>音乐标题</td>
        <td>歌手</td>
        <td>专辑</td>
        <td>时长</td>
      </tr>
      <tr class="body" v-for="(item, index) in songList" :key="index" 
          @dblclick="playerSong(item.id, item.name, item.al.picUrl, item.ar[0].id, item.ar[0].name, item.al.id, item.al.name)">
        <td class="number">{{promatNumber(index)}}</td>
        <td class="like">
          <img src="~assets/img/songlike.png" alt="">
        </td>
        <td class="down">
          <img src="~assets/img/song_down.png" alt="">
        </td>
        <td class="tr-song-name">{{item.name}}</td>
        <td>{{item.ar[0].name}}</td>
        <td>{{item.al.name}}</td>
        <td>03:53</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { getMusicUrl } from 'network/recommend.js'

import {Song} from 'utils/utils.js'

export default {
  data() {
    return {
      number: 9
    };
  },
  props: {
    songList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    playerSong(id, name, picUrl, artist_id, artist_name, album_id, album_name) {
      getMusicUrl(id).then(res => {
        const result = res.data.data[0]
        const current_play = false
        const duration = 0
        const song = new Song(result.id, name, picUrl, result.url, album_id, album_name, artist_id, artist_name, current_play, duration)
        if(this.$store.state.index != 0){
          this.$store.state.music.pause()
        }
        this.$store.commit('musicDetail', song);
      })
    },
    promatNumber(num) {
      let result = ''
      if(num < 9) {
        result = '0' + (num + 1)
      }else {
        result = num + 1
      }
      return result
    }
  }
};
</script>

<style scoped>
.list-table{
  width: 100%;
  border-collapse: collapse;
  /* text-align: center; */
}
.header{
  color: rgb(136,136,136);
  font-size: 14px;
}
tr{
  line-height: 40px;
}
.body img{
  width: 18px;
  color: #b1b1b1;
}
.body{
  font-size: 14px;
  color: rgb(101,101,101);
}
.tr-song-name{
  color: rgb(80,125,175);
}
.like,.down{
  width: 35px;
}
.number{
  width: 60px;
  text-align: center;
}
.like{
  padding-top: 5px;
  box-sizing: border-box;
}
.body:nth-child(2n){
  background-color: rgb(245, 245, 245);
}
.body:hover{
  background-color: rgb(238, 238, 238);
}
</style>