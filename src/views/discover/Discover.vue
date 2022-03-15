<template>
  <div class="discover">
    <nav-bar class="super-nav" @handleType="handleType"></nav-bar>
    <scroll class="content" ref="scroll">
      <div v-if="currentIndex == 0" class="discover-box">
        <swiper v-if="banners.length !== 0" :banners="banners"></swiper>
        <Song v-if="songSheet.length !== 0" :songSheet="songSheet"></Song>
        <Sole v-if="sole.length !== 0" :soleList="sole" />
        <new-music v-if="newMusic !== 0" :songList="newMusic"></new-music>
        <Sole v-if="mv.length !== 0" :isMV="true" :soleList="mv" />
      </div>
      <!-- 歌手 -->
      <div v-else-if="currentIndex == 4" class="singer">
        <Singer></Singer>
      </div>
      <!-- 最新音乐 -->
      <div v-else-if="currentIndex == 5" class="newSong">
        <child-nav-bar @navClick="navClick"/>
        <div v-if="navIndex == 0">
          <!-- 新歌速递 -->
          <new-song-express></new-song-express>
        </div>
        <div v-else-if="navIndex == 1">
          <!-- 新碟上架 -->
          <new-song-grounding></new-song-grounding>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/scroll/Scroll";
import NavBar from "components/navbar/NavBar";
import Swiper from "components/swiper/Swiper";
import Song from "components/song/Song";
import Sole from 'components/sole/Sole'
import NewMusic from './childComponents/newmusic/NewMusic.vue'
import ChildNavBar from './childComponents/navbar/NavBar.vue'
import NewSongExpress from './childComponents/newsong/NewSongExpress.vue'
import NewSongGrounding from './childComponents/newsong/NewSongGrounding.vue'
import Singer from './childComponents/singer/Singer.vue'

import { banners, songSheet, sole, newMusic, recommendMV } from "network/recommend";

export default {
  data() {
    return {
      // 轮播图数据
      banners: [],
      songSheet: [],
      sole: [],
      newMusic: [],
      mv: [],
      // nav-bar
      currentIndex: 0,
      // 新歌速递/新歌上架
      navIndex: 0
    };
  },

  components: { Scroll, NavBar, Swiper, Song, Sole, NewMusic, ChildNavBar, NewSongExpress, NewSongGrounding, Singer },

  created() {
    // 请求数据
    banners().then((res) => {
      this.banners = res.data.banners;
    });

    songSheet().then(res => {
      this.songSheet = res.data.result
    })

    sole().then(res => {
      this.sole = res.data.result
    })

    newMusic().then(res => {
      this.newMusic = res.data.result
    })

    recommendMV().then(res => {
      this.mv = res.data.result
    })
  },

  methods: {
    // 刷新scroll
    loadImageRefresh() {
      this.$refs.scroll.refresh()
    },
    handleType(index) {
      this.currentIndex = index
    },
    navClick(index) {
      this.navIndex = index
    }
  },
  mounted() {
    // 事件总线
    this.$bus.$on('loadImage', this.loadImageRefresh)
  }
};
</script>

<style scoped>
.content {
  margin-top: 60px;
  width: calc(100vw - 260px);
  height: calc(100% - 60px);
  overflow: hidden;
  padding-top: 25px;
  box-sizing: border-box;
}
.discover-box,.newSong, .singer {
  width: 85%;
  margin: auto;
}
.super-nav{
  position: fixed;
  z-index: 10;
}
</style>