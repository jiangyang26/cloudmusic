<template>
  <div class="user-list">
    <div class="item-list" v-for="item in userList" :key="item.id">
      <div class="img-box">
        <img :src="item.avatarUrl" alt="">
        <div class="avatarDetail" v-if="item.avatarDetail !== null"><img :src="item.avatarDetail.identityIconUrl" alt=""></div>
      </div>
      <div class="name-box">{{item.nickname}}</div>
      <div class="artist-box">{{item.description}}</div>
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
    userList: {
      type: Array,
      default() {
        return []
      }
    }
  }
};
</script>

<style scoped>
.item-list{
  display: flex;
  align-items: center;
  padding: 15px 0px;
}
.img-box{
  display: flex;
  align-items: center;
  position: relative;
}
.img-box>img{
  width: 75px;
  border-radius: 50%;
}
.name-box{
  margin-left: 30px;
  font-size: 14px;
  flex-grow: 1;
}
.artist-box{
  font-size: 13px;
  color: rgb(80,125,175);
}
.item-list:nth-child(2n){
  background-color: rgb(247, 247, 247);
}
.item-list:hover{
  background-color: rgb(240, 240, 240);
}
.alias{
  color: rgb(159,159,159);
}
.avatarDetail{
  position: absolute;
  bottom: 0px;
  right: 0px;
}
.avatarDetail>img{
  width: 20px;
}
</style>