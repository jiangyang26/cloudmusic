<template>
  <div class="singer-list">
    <div class="item-list" v-for="item in singerList" :key="item.id">
      <div class="img-box">
        <img :src="item.img1v1Url" alt="">
      </div>
      <div class="name-box">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  props: {
    singerList: {
      type: Array,
      default() {
        return []
      }
    }
  }
};
</script>

<style  scoped>
.item-list{
  display: flex;
  align-items: center;
  padding: 15px 0px;
}
.img-box{
  display: flex;
  align-items: center;
}
.img-box>img{
  width: 75px;
  border-radius: 7px;
}
.name-box{
  margin-left: 10px;
  font-size: 14px;
}
.item-list:nth-child(2n){
  background-color: rgb(247, 247, 247);
}
.item-list:hover{
  background-color: rgb(240, 240, 240);
}
</style>