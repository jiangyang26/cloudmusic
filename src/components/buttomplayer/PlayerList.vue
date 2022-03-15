<template>
  <div class="player-list">
    <div class="header">
      <div class="title">当前播放</div>
      <div class="count">
        <span>总{{this.$store.state.musicDetail.length}}首</span>
        <span @click="clearClick">清空列表</span>
      </div>
    </div>
    <div class="list">
      <div class="content">
        <div class="item-list" v-for="(item, index) in this.$store.state.musicDetail" 
             :key="index" @click="itemListClick(index)"
             :class="item.current_play === true ? 'active' : ''">
          <div class="item-auto">
            <div class="item-left">{{item.name}}</div>
            <div class="item-center">{{item.artist_name}}</div>
            <div class="item-right">{{getMusicDuration(item.duration)}}</div>
          </div>
          <div v-if="item.current_play === true" class="before-div">
            <img src="~assets/img/broadcast_s.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from 'utils/utils.js'

export default {
  data() {
    return {
      aaaa: this.$store.state.music.duration
    };
  },
  components: {  },
  methods: {
    // 清空播放列表
    clearClick() {
      this.$emit('clearList');
      this.$store.commit('clearList');
    },

    // 格式化单曲时间
    getMusicDuration(s) {
      return formatDate(s)
    },

    //播放列表点击播放
    itemListClick(index) {
      this.$store.commit('itemListPlayer', index);
    }
  }
};
</script>

<style scoped>
.player-list{
  width: calc(100vw - 77%);
  background-color: #fff;
  position: fixed;
  top: 60px;
  bottom: 70px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: -0.1px 5px 9px rgb(229,229,229);
  cursor: default;
}
.header{
  width: 82%;
  padding-bottom: 15px;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(243,243,243);
}
.title{
  font-size: 20px;
  font-weight: bold;
  color: rgb(51,51,51);
  margin: 15px 0px;
}
.count{
  display: flex;
  justify-content: space-between;
}
.count>span:first-child{
  color: rgb(204,204,204);
  font-size: 12px;
}
.count>span:last-child{
  color: rgb(80,125,175);
  font-size: 13px;
  cursor: pointer;
}
.list{
  width: 100%;
  flex-grow: 1;
  background-color: rgb(255,255,255);
  overflow: hidden;
}
.item-list:hover{
  background-color: rgb(245,245,245);
}
.item-auto{
  width: 82%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  padding: 12px 0px;
}
.item-left{
  width: 46%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-center{
  flex-grow: 1;
}
.item-left,.item-center{
  color: rgb(50,50,50);
}
.item-right{
  color: rgb(200,200,200);
  width: 50px;
}
.list>div:nth-child(2n){
  background-color: rgb(249,249,249);
}
.active .item-left,.active .item-center{
  color: rgb(236,65,65);
}
.item-list{
  position: relative;
}
.before-div{
  position: absolute;
  top: 50%;
  margin-top: -6px;
  left: 6px;
}
.before-div>img{
  width: 15px;
}
.content{
  width: 100%;
  height: 100%;
  overflow: scroll;
}
/* 取消滚动条 */
.content::-webkit-scrollbar {display:none}
</style>