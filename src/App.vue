<template>
  <div id="app">
    <app-header>
      <img src="~assets/img/CloudMusic2.png" alt="" />
    </app-header>
    <div class="app-bar">
      <left-bar :barTitle="barTitle"></left-bar>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <buttom-player></buttom-player>
  </div>
</template>

<script>
import AppHeader from 'components/appheader/AppHeader.vue'
import LeftBar from 'components/leftbar/LeftBar.vue'
import ButtomPlayer from 'components/buttomplayer/ButtomPlayer.vue'
export default {
  data() {
    return {
      barTitle: [
        {title: '发现音乐', path: '/discover'},
        {title: '播客', path: '/podcast'},
        {title: '视频', path: '/video'},
        {title: '朋友', path: '/friend'},
        {title: '直播', path: '/live'},
        {title: '私人FM', path: '/fm'},
      ]
    }
  },
  components: {
    AppHeader,
    LeftBar,
    ButtomPlayer
  }
}
</script>

<style>
@import url('./assets/css/normalize.css');
@import url('./assets/css/base.css');

.app-bar{
  width: 100%;
  height: calc(100vh - 60px - 70px - 1px);
  display: flex;
}
.app-nav{
  display: flex;
  flex-direction: column;
}
</style>
