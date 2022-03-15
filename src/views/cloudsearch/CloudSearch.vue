<template>
  <div class="cloud-search">
    <div class="cloud-search-box">
      <div class="title">
        <span v-if="type === 1">找到 {{res.songCount}} 首单曲</span>
        <span v-else-if="type === 100">找到 {{res.artistCount}} 位歌手</span>
        <span v-else-if="type === 10">找到 {{res.albumCount}} 张专辑</span>
        <span v-else-if="type === 1014">找到 {{res.videoCount}} 个视频</span>
        <span v-else-if="type === 1000">找到 {{res.playlistCount}} 个歌单</span>
      </div>
      <nav-bar :navTitle="navTitle" type="search" @handleType="cloudSearch"></nav-bar>
      <song-list v-if="type === 1" :songList="res.songs"></song-list>
      <singer-list v-else-if="type === 100"  :singerList="res.artists"></singer-list>
      <album-list v-else-if="type === 10"  :albumList="res.albums"></album-list>
      <video-list v-else-if="type === 1014" :videoList="res.videos"></video-list>
      <play-list v-else-if="type === 1000" :playList="res.playlists"></play-list>
      <user-profile v-else-if="type === 1002" :userList="res.userprofiles"></user-profile>
    </div>
  </div>
</template>

<script>
import { search } from 'network/search.js'

import NavBar from 'components/navbar/NavBar'
import SongList from 'components/songlist/SongList'
import SingerList from './childComponents/singerlist/SingerList.vue'
import AlbumList from './childComponents/album/AlbumList.vue'
import VideoList from './childComponents/videolilst/VideoList.vue'
import PlayList from './childComponents/playlist/PlayList.vue'
import UserProfile from './childComponents/userprofile/UserProfile.vue'
 
export default {
  data() {
    return {
      keywords: '',
      navTitle: [
        {title: '单曲'},
        {title: '歌手'},
        {title: '专辑'},
        {title: '视频'},
        {title: '歌单'},
        {title: '用户'}
      ],
      res: {},
      type: 1
    };
  },
  components: { NavBar, SongList, SingerList, AlbumList, VideoList, PlayList, UserProfile },
  watch: {
    '$route' (newkey, oldkey) {
      if(newkey !== oldkey) {
        this.keywords = newkey.query.keywords
        this.cloudSearch()
      }
    }
  },
  created() {
    this.keywords = this.$route.query.keywords
    this.cloudSearch()
  },
  methods: {
    cloudSearch(index) {
      switch (index) {
        case 0:
          // 单曲
          this.type = 1
          break;
        case 1:
          // 歌手
          this.type = 100
          break;
        case 2:
          // 专辑
          this.type = 10
          break;
        case 3:
          // 视频
          this.type = 1014
          break;
        case 4:
          // 歌单
          this.type = 1000
          break;
        case 5:
          // 用户
          this.type = 1002
          break;
        default:
          break;
      }
      search({
        keywords: this.keywords,
        limit: 20,
        type: this.type
      }).then(res => {
        this.res = res.data.result
      })
    },
  },
};
</script>

<style scoped>
.cloud-search{
  width: calc(100vw - 260px);
  height: 100%;
  box-sizing: border-box;
}
.cloud-search-box{
  width: 85%;
  height: 100%;
  margin: auto;
  overflow: scroll;
}
/* 去除滚动条样式 */
.cloud-search-box::-webkit-scrollbar {display:none}
.title{
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 18px;
}
</style>