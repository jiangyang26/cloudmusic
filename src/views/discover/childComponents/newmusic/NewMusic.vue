<template>
  <div class="song">
    <div class="song-title">
      <span>最新音乐</span>
      <img src="~assets/img/right.png" alt="">
    </div>
    <div class="song-box">
      <item-music v-for="item in songList.slice(0, 12)" :key="item.id" :item-song="item"></item-music>
    </div>
  </div>
</template>

<script>
import ItemMusic from './ItemMusic.vue'

export default {
  data() {
    return {};
  },
  components: { ItemMusic },
  props: {
    songList: {
      type: Array,
      default() {
        return []
      }
    }
  }
};
</script>

<style scoped>
.song-title{
  font-size: 19px;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 15px;
  cursor: pointer;
}
.song-title>img{
  width: 17px;
  margin-left: 5px;
  margin-top: 2px;
}
.song-box{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 360px;
}
</style>