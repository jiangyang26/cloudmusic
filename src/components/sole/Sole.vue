<template>
  <div class="song">
    <div class="song-title">
      <span v-if="isMV == false">独家发送</span>
      <span v-if="isMV == true">推荐MV</span>
      <img src="~assets/img/right.png" alt="">
    </div>
    <div class="song-box">
      <item-sole :isMV="isMV" v-for="item in soleList.slice(0, 3)" :key="item.id" :item-sole="item"></item-sole>
    </div>
  </div>
</template>

<script>
import ItemSole from './ItemSole.vue'

export default {
  data() {
    return {};
  },
  components: { ItemSole },
  props: {
    soleList: {
      type: Array,
      default() {
        return []
      }
    },
    isMV: {
      type: Boolean,
      default: false
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