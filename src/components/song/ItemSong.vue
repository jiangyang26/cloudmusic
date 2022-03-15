<template>
  <div class="item-song">
    <div class="item-img">
      <img :src="itemSong.picUrl" alt="">
      <div class="broadcast-box">
        <img src="~assets/img/broadcast.png" @load="loadImage" alt="">
        <span>{{formatCount(itemSong.playCount)}}</span>
      </div>
    </div>
    <div class="item-text">{{itemSong.name}}</div>
  </div>
</template>

<script>
import {formatPlayCount} from './../../utils/utils'
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
  computed: {
    
  },
  methods: {
    loadImage() {
      this.$bus.$emit("loadImage")
    },
    formatCount(num) {
      return formatPlayCount(num)
    }
  }
};
</script>

<style scoped>
.item-song{
  width: 18%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  cursor: pointer;
}
.item-img{
  position: relative;
}
.item-img img{
  width: 100%;
  border-radius: 8px;
  margin-bottom: 8px;
}
.item-text{
  color: rgb(55,55,55);
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.broadcast-box{
  position: absolute;
  top: 5px;
  left: 0px;
  right: 0px;
  color: white;
  font-size: 12px;
  display: flex;
  justify-content: flex-end;
  padding: 0px 5px;
  box-sizing: border-box;
}
.broadcast-box>img{
  width: 15px;
}
.broadcast-box>span{
  margin-top: 0.5px;
}
</style>