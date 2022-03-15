<template>
  <div class="buttom-player">
    <div class="left">
      <!-- 没有播放歌曲 显示为空盒子 -->
      <div class="white-box" v-if="this.$store.state.musicDetail.length <= 0"></div>
      <!-- 正在播放歌曲显示歌曲信息 -->
      <div v-else-if="lyricIsShow == false && this.$store.state.musicDetail.length > 0" class="left-box">
        <div class="left-box-pic" @mouseenter ="topImageShow" @mouseleave="topImageHide" @click="lyricClick">
          <img :src="this.$store.state.musicDetail[this.$store.state.index].picUrl" alt="">
          <!-- 展开音乐详情页按钮 -->
          <div v-if="topImageIsShow" class="topImg">
            <img src="~assets/img/top.png" alt="">
          </div>
        </div>
        <div class="left-box-name">
          <div class="title-box">
            <span>{{this.$store.state.musicDetail[this.$store.state.index].name}}</span>
            <img src="~assets/img/like.png" alt="">
          </div>
          <div class="name-box">{{this.$store.state.musicDetail[this.$store.state.index].artist_name}}</div>
        </div>
      </div>
      <div v-else-if="lyricIsShow == true" class="lyric-bottom-box">
        <div class="close-box" @click="closeLyric"><img src="~assets/img/bottom.png" alt=""></div>
        <div class="like-box"><img src="~assets/img/songlike.png" alt=""></div>
        <div class="down-box"><img src="~assets/img/download.png" alt=""></div>
        <div class="more-box"><img src="~assets/img/more.png" alt=""></div>
      </div>
    </div>
    <div class="center">
      <div class="center-box">
        <div class="center-box-top">
          <!-- 上一首 -->
          <div class="prev" @mouseover="prevMouseOver" @mouseout="prevMouseOut" @click="prevClick">
            <img v-if="isPrevActive == false" src="~assets/img/prev_music.png" alt="">
            <img v-else src="~assets/img/prev_music_active.png" alt="">
          </div>
          <!-- 开始按钮 -->
          <div class="start_delay">
            <img v-if="this.$store.state.playing == false" class="start" src="~assets/img/start.png" @click="startBroadcast" alt="">
            <img v-else src="~assets/img/delay.png" @click="delayBroadcast" alt="">
          </div>
          <!-- 下一首 -->
          <div class="next" @mouseover="nextMouseOver" @mouseout="nextMouseOut" @click="nextClick">
            <img v-if="isNextActive == false" src="~assets/img/next_music.png" alt="">
            <img v-else src="~assets/img/next_music_active.png" alt="">
          </div>
        </div>
        <!-- 进度条 -->
        <div class="center-box-bottom">
          <meter ref="meter" :max="music.duration" min="0">60%</meter>
        </div>
      </div>
    </div>
    <div class="right">
      <div v-if="this.$store.state.musicDetail.length <= 0"></div>
      <div v-else class="right-box">
        <div class="list-image" @click="listIsShowClick"><img src="~assets/img/list_image.png" alt=""></div>
      </div>
      <!-- 播放列表 -->
      <play-list v-if="this.$store.state.listIsShow" @clearList="clearList"></play-list>
      <!-- 音乐详情 -->
      <transition name="fade">
        <!-- <lyric v-if="true" @closeLyric="closeLyric"></lyric> -->
        <lyric v-if="lyricIsShow" @closeLyric="closeLyric" :lrcArr="lrcArr"></lyric>
      </transition>
    </div>
  </div>
</template>

<script>
import PlayList from './PlayerList.vue'
import Lyric from './Lyric.vue'
import { lyric } from 'network/lyric.js'

export default {
   
  data() {
    return {
      // 上一曲按钮是否显示
      isPrevActive: false,
      // 下一曲按钮是否显示
      isNextActive: false,
      // 获取音乐进度定时器
      timer: null,
      topImageIsShow: false,
      lyricIsShow: false,
      // 歌词数组对象
      lrcArr: [],
      // 歌词lrc文本
      lrcStr: ""
    };
  },
  components: { PlayList, Lyric },
  methods: {
    // 开始播放
    startBroadcast() {
      if(this.$store.state.musicDetail.length > 0) {
        setTimeout(() => {
          this.$store.commit('startPlaying');
          if(this.$store.state.playing){
            this.$store.state.music.play()
          }
        }, 100);
      }
    },

    // 暂停播放
    delayBroadcast() {
      this.$store.commit('delayPlaying');
      setTimeout(() => {
        if(this.$store.state.playing == false){
          this.$store.state.music.pause()
        }
      }, 100);
    },

    // 上一首
    prevClick() {
      if(this.$store.state.musicDetail.length > 0) {
        this.$store.commit('prevPlay');
      }
    },

    prevMouseOver() {
      this.isPrevActive = true
    },

    prevMouseOut() {
      this.isPrevActive = false
    },

    // 下一首
    nextClick() {
      if(this.$store.state.musicDetail.length > 0) {
        this.$store.commit('nextPlay');
      }
    },

    nextMouseOver() {
      this.isNextActive = true
    },

    nextMouseOut() {
      this.isNextActive = false
    },

    // 播放列表显示
    listIsShowClick() {
      this.$store.commit('listIsShowFun');
    },
    // 清空播放列表 进度条归零
    clearList() {
      this.$refs.meter.value = "0"
    },

    // 关闭定时器
    clearTime() {
      clearInterval()
    }, 

    // 展开音乐详情页按钮
    topImageShow() {
      this.topImageIsShow = true
    },
    topImageHide() {
      this.topImageIsShow = false
    },

    // 音乐详情页打开
    lyricClick() {
      this.lyricIsShow = !this.lyricIsShow
    },

    // 音乐详情页点击按钮发射事件关闭页面
    closeLyric() {
      this.lyricIsShow = false
      this.topImageIsShow = false
    }
  },
  computed: {
    music() {
      return this.$store.state.music
    },
    playing() {
      return this.$store.state.playing
    },
    musicDetail() {
      return this.$store.state.musicDetail
    },
    musicIndex() {
      return this.$store.state.index
    },
    musicIndey() {
      return this.$store.state.indey
    }
  },
  watch: {
    playing(newData, oldData) {
      if(this.musicDetail.length !== 0) {
        if(this.musicDetail[this.musicIndex].current_play == false) {
          this.$refs.meter.value = "0"
        }
      }
      if(newData == true) {
        this.timer = setInterval(() => {
          let currentTime =  this.music.currentTime
          this.$refs.meter.value = currentTime
        }, 1200);
      }else{
        clearInterval(this.timer)
      }
    },
    musicIndey(newValue, oldValue) {
      if(newValue !== -1) {
        this.lrcArr = []
        lyric(this.musicDetail[this.musicIndex].id).then(res => {
          this.lrcStr = res.data.lrc.lyric
          let arr = []
          arr = this.lrcStr.split('\n')
          arr.forEach((item, index) => {
            let time = item.substring(item.indexOf('[') + 1, item.indexOf(']'))
            let text = item.substring(item.indexOf(']') + 1)
            this.lrcArr.push({
              line: index + 1,
              time: time,
              text: text
            })
          })
        })
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
    this.timer = null
  }
};
</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* 中间盒子 */
.buttom-player{
  width: 100vw;
  height: 70px;
  border-top: 1px solid rgb(212,212,212);
  background-color: #fff;
  display: flex;
}
.left,.right{
  width: 23%;
  height: 100%;
}
.center{
  flex-grow: 1;
}
.center-box{
  width: 60%;
  height: 100%;
  margin: auto;
}
.center-box-top{
  width: 60%;
  height: 60%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.prev,.next{
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.prev>img,.next>img{
  width: 30px;
  height: 30px;
}
.start_delay{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgb(240, 240, 240);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.start_delay:hover{
  background-color: rgb(209, 209, 209);
}
.start_delay>img{
  width: 25px;
}
.center-box-bottom{
  height: 40%;
}
.start{
  margin-left: 4px;
}

/* 左侧盒子 */
.left{
  padding-left: calc(100vw - 97%);
  box-sizing: border-box;
}
.left-box{
  width: 70%;
  height: 100%;
  display: flex;
}
.left-box-pic{
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
}
.left-box-pic>img{
  width: 60px;
  border-radius: 5px;
}

.left-box-name{
  display: flex;
  flex-direction: column;
  color: rgb(51,51,51);
  flex-grow: 1;
  justify-content: center;
  margin-left: 15px;
}
.title-box{
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.title-box>img{
  width: 18px;
  margin-left: 8px;
}
.name-box{
  font-size: 13px;
}

/* 右侧盒子 */
.right{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.list-image{
  margin-right: 47px;
  cursor: pointer;
}
.list-image>img{
  width: 20px;
}

.center-box-bottom{
  text-align: center;
}
meter{
  width: 400px;
  height: 10px;
}
.topImg{
  position: absolute;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}
.topImg>img{
  width: 20px;
}
.lyric-bottom-box{
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
.lyric-bottom-box>div>img{
  width: 20px;
}
.close-box{
  width: 60px;
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.like-box,.down-box,.more-box{
  width: 40px;
  height: 40px;
  border: 1px solid rgb(230,230,230);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>