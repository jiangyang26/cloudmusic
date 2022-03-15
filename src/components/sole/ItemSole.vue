<template>
  <div class="item-song">
    <div class="item-img">
      <img v-if="isMV == false" :src="itemSole.sPicUrl" @load="loadImage" alt="">
      <img v-if="isMV == true" :src="itemSole.picUrl" @load="loadImage" alt="">
      <div v-if="isMV == false" class="broadcast-box">
        <img src="~assets/img/broadcast_rc.png" alt="">
      </div>
      <div v-if="isMV == true" class="absolute-mv">
        <img src="~assets/img/broadcast.png" alt="">
        <span>{{formatCount(itemSole.playCount)}}</span>
      </div>
    </div>
    <div v-if="isMV == false" class="item-text">{{itemSole.name}}</div>
    <div v-if="isMV == true" class="mv-text">
      <div class="mv-name">{{itemSole.name}}</div>
      <div class="mv-title">{{itemSole.artists[0].name}}</div>
    </div>
  </div>
</template>

<script>
import { formatPlayCount } from 'utils/utils.js'

export default {
  props: {
    itemSole: {
      type: Object,
      default() {
        return {}
      }
    },
    isMV: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    loadImage() {
      this.$bus.$emit('loadImage')
    },
    formatCount(num) {
      return formatPlayCount(num)
    }
  },
};
</script>

<style scoped>
.item-song{
  width: 32%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  cursor: pointer;
}
.item-img{
  position: relative;
}
.item-img>img{
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
  display: flex;
  padding: 0px 5px;
  box-sizing: border-box;
}
.broadcast-box>img{
  width: 24px;
}
.mv-text{
  color: rgb(55,55,55);
}
.mv-name{
  font-size: 15px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mv-title{
  margin-top: 10px;
  font-size: 14px;
}
.absolute-mv{
  position: absolute;
  top: 0px;
  display: flex;
  align-items: center;
  font-size: 13px;
  width: 100%;
  justify-content: flex-end;
  color: white;
  padding-right: 8px;
  box-sizing: border-box;
  margin-top: 5px;
}
.absolute-mv>img{
  width: 17px;
  margin-right: 5px;
}
</style>