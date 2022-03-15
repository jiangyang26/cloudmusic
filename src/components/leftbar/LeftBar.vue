<template>
  <div class="left-bar">
    <div v-for="(item, index) in barTitle" 
         :key="item.path" @click="pushPage(item, index)" 
         :class="index === currentIndex ? 'active' : ''">
      {{item.title}}
    </div>
    <span class="my-music">我的音乐</span>
    <div v-for="item in myMusic" 
         :key="item.image" 
         class="my-music-item"
         @click="pushMusic(item)">
      <img :src="item.image" alt="">
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      currentIndex: 0,
      myMusic: [
        {image: require('assets/img/music.png'), title: '本地音乐', path: '/music'},
        {image: require('assets/img/download.png'), title: '下载管理', path: '/download'},
        {image: require('assets/img/lately.png'), title: '最近播放', path: '/lately'}
      ]
    };
  },

  props: {
    barTitle: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    pushPage(item, index){
      this.$router.push(item.path)
      this.currentIndex = index
    },
    pushMusic(item) {
      this.$router.push(item.path)
    }
  }
};
</script>

<style scoped>
.left-bar{
  width: 260px;
  height: 100%;
  border-right: 1px solid rgb(212, 212, 212);
  padding-left: calc(100vw - 97%);
  box-sizing: border-box;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
}
.left-bar>div{
  padding: 10px 0px;
  margin-bottom: 2px;
  border-radius: 3px;
}
.left-bar>div:hover{
  background-color: rgb(246,246,247);
  cursor: pointer;
}
.active{
  background-color: rgb(246,246,247);
  font-weight: bold;
}
.my-music{
  font-size: 12px;
  color: rgb(94, 94, 94);
  margin-top: 15px;
  margin-bottom: 10px;
  cursor: default;
}
.my-music-item{
  display: flex;
  align-items: center;
}
.my-music-item>img{
  width: 18px;
  margin-right: 8px;
}
</style>