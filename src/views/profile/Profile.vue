<template>
  <div class="profile">
    <div class="profile-box">
      <header-detail :user="user"></header-detail>
      <play-list :user="user"></play-list>
    </div>
  </div>
</template>

<script>
import HeaderDetail from './childComponents/headerdetail/HeaderDetail.vue'
import PlayList from './childComponents/playlist/PlayList.vue'

import { getUserInfo } from 'network/login.js'
import { UserInfo } from 'utils/utils.js'

export default {
  data() {
    return {
      user: {}
    };
  },

  components: { HeaderDetail, PlayList },

  mounted() {
    getUserInfo(this.$route.query.uid).then(res => {
      const result = res.data
      let userId = result.profile.userId
      let nickname = result.profile.nickname
      let avatarUrl = result.profile.avatarUrl
      let level = result.level          // 用户等级
      let listenSongs = result.listenSongs  // 累计听歌
      let authority = result.profile.authority  // 动态
      let follows = result.profile.follows      // 关注
      let followeds = result.profile.followeds  // 粉丝
      let playlistCount = result.profile.playlistCount  // 创建的歌单
      const user = new UserInfo(userId, nickname, avatarUrl, level, listenSongs, authority, follows, followeds, playlistCount)
      this.user = user
    })
  },

  methods: {
    
  },
};
</script>

<style scoped>
.profile{
  width: calc(100vw - 260px);
  height: 100%;
  box-sizing: border-box;
  overflow: scroll;
  
}
.profile::-webkit-scrollbar {display:none}
.profile-box{
  width: 85%;
  margin: auto;
}
</style>