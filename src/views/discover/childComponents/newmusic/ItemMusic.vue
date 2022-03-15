<template>
  <div class="item-song">
    <div class="left-box" @click="startMusic">
      <img class="left-img" :src="itemSong.picUrl" @load="loadImage" alt="">
      <broadcast-button class="bro-button"></broadcast-button>
    </div>
    <div class="right-box">
      <div class="music-name">{{itemSong.name}}</div>
      <div class="name">{{itemSong.song.artists[0].name}}</div>
    </div>
  </div>
</template>

<script>
import BroadcastButton from 'components/broadcast/BroadcastButton'

import { getMusicUrl } from 'network/recommend'

import { Song } from 'utils/utils.js'

export default {
  data() {
    return {
      
    };
  },
  props: {
    itemSong: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: { BroadcastButton },
  methods: {
    // 监听图片加载
    loadImage() {
      this.$bus.$emit('loadImage')
    },

    // 开始播放
    startMusic() { 
      getMusicUrl(this.itemSong.id).then(res => {
        const result = res.data.data[0]
        const itemSong = this.itemSong
        const current_play = false
        const duration = 0
        const song = new Song(result.id, itemSong.name, itemSong.picUrl, result.url, itemSong.song.album.id, itemSong.song.album.name, itemSong.song.artists[0].id, itemSong.song.artists[0].name, current_play, duration)
        if(this.$store.state.index != 0){
          this.$store.state.music.pause()
        }
        this.$store.commit('musicDetail', song);
      })
    }
  },
};
</script>

<style scoped>
.item-song{
  width: 32%;
  display: flex;
  margin-top: 5px;
  align-items: center;
}
.left-box,.name{
  cursor: pointer;
}
.left-box>.left-img{
  width: 70px;
  border-radius: 5px;
}
.right-box{
  flex-grow: 1;
  margin-left: 10px;
  overflow: hidden;
}
.right-box>.music-name{
  color: rgb(55, 55, 55);
  font-size: 14px;
  cursor: default;
}
.right-box>.name{
  color: rgb(159,159,159);
  font-size: 13px;
  margin-top: 20px;
}
.left-box{
  position: relative;
}
.bro-button{
  position: absolute;
  top: 50%;
  margin-top: -11px;
  left: 50%;
  margin-left: -12px;
}
</style>