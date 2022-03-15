<template>
  <div class="song">
    <div class="song-title">
      <span>推荐歌单</span>
      <img src="~assets/img/right.png" alt="">
    </div>
    <div class="song-box">
      <item-song v-for="item in songSheet" :key="item.id" :item-song="item"></item-song>
    </div>
  </div>
</template>

<script>
import ItemSong from './ItemSong.vue'

export default {
  data() {
    return {};
  },
  components: { ItemSong },
  props: {
    songSheet: {
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
  cursor: pointer;
}
.song-title>img{
  width: 17px;
  margin-left: 5px;
  margin-top: 2px;
}
.song-box{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>