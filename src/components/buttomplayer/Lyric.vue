<template>
  <div class="lyric" v-if="lrcArray.length !== 0">
    <div class="lyric-header">
      <div @click="closeLyric"><img src="~assets/img/bottom.png" alt="" /></div>
    </div>
    <div class="lyric-body">
      <div class="body-left"></div>
      <div class="body-center">
        <!-- 音乐名称 -->
        <div class="music-name">{{musicDetail[state.index].name}}</div>
        <!-- 音乐信息 -->
        <div class="music-detail">
          <!-- 作者 -->
          <span class="artist-name">{{musicDetail[state.index].artist_name}}</span>
          <span v-if="musicDetail.album_name !== ''"> - </span>
          <!-- 专辑 -->
          <span class="album-name">{{musicDetail[state.index].album_name}}</span>
        </div>
        <!-- 歌词显示 -->
        <div class="lyric-active">
          <div ref="content" class="content">
            <p class="p" v-for="(item, index) in lrcArray" :key="index">{{item.text}}</p>
          </div>
        </div>
      </div>
      <div class="body-right">
        
      </div>  
    </div>
  </div>
</template>

<script> 
import { formatLyricTime } from 'utils/utils.js'

export default {
  data() {
    return {
      line: 0,
      coll: 3,
      timer: null,
      currentTime: 0,
      lrcArray: []
    };
  },
  props: {
    lrcArr: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {  },
  methods: {
    // 关闭歌词页面
    closeLyric() {
      this.$emit('closeLyric');
    },
    lineHigh() {  
      const content = this.$refs.content
      if(content.getElementsByTagName('p')) {
        const list = content.getElementsByTagName('p')
        if(this.line > 0) {
          list[this.line - 1].removeAttribute('class')
        }
        list[this.line].className = 'lineHigh'
      }
      
    }
  },
  computed: {
    musicDetail() {
      return this.$store.state.musicDetail
    },
    state() {
      return this.$store.state
    },
    playing() {
      return this.$store.state.playing
    },
    music() {
      return this.$store.state.music
    }
  },

  watch: {
    lrcArr: {
      handler(newValue, oldValue) {
        this.lrcArray = newValue
        console.log('1111');
      }
    },
  },
  
  mounted() {
    this.lrcArray = this.lrcArr
    this.music.addEventListener('timeupdate', () => {
      if(this.line < this.lrcArray.length){
        this.currentTime = this.music.currentTime
        let time = formatLyricTime(this.lrcArray[this.line].time)
        if(time <= this.currentTime) {
          // 高亮显示歌词
          this.lineHigh()
          this.line += 1
        }
      }else{
        this.line = 0
      }
    })
    this.music.addEventListener('ended', () => {
      this.line = 0
    })
  },
  destroyed() {
    
  }
};
</script> 

<style scoped>
.lyric {
  position: fixed;
  width: 100vw;
  height: calc(100vh - 70px - 1px);
  top: 0px;
  z-index: 20;
  background-image: linear-gradient(#c5c4c5, #ffffff);
  display: flex;
  flex-direction: column;
}

.lyric-header {
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: calc(100vw - 97%);
  box-sizing: border-box;
}
.lyric-header img {
  width: 18px;
  cursor: pointer;
}
.lyric-body {
  width: 100vw;
  height: calc(100% - 60px);
  display: flex;
}
.lyric-body>div {
  width: 0;
  height: 100%;
  flex-grow: 1;
  border: 1px solid;
}
.body-center>div {
  text-align: center;
}
.music-name {
  color: rgb(46, 46, 46);
  font-size: 29px;
  margin-bottom: 10px;
  margin-top: 25px;
}
.music-detail {
  color: rgb(136, 136, 136);
  font-size: 15px;
  margin-bottom: 15px;
}
.artist-name,.album-name {
  cursor: pointer;
}
.artist-name:hover {
  color: rgb(35, 93, 157);
}
.album-name:hover {
  color: rgb(35, 93, 157);
}
.lyric-active{
  height: calc(100% - 99.6px);
  overflow: scroll;
}
.lyric-active::-webkit-scrollbar{
	display: none
}
.content p{
  line-height: 35px;
  font-size: 14px;
  color: rgb(97,97,97);
}
.content .lineHigh{
  color: black;
  font-weight: bold;
  font-size: 16px;
}
</style>