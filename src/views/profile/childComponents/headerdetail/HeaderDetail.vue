<template>
  <div class="header-detail">
    <div class="avatar">
      <img
        :src="user.avatarUrl"
        alt=""
      />
    </div>
    <div class="detail">
      <!-- nickname -->
      <div class="nickname">{{user.nickname}}</div>
      <!-- 等级信息 -->
      <div class="level-update">
        <div class="level">Lv{{user.level}}</div>
        <div class="update">
          <img src="~assets/img/update.png" alt="" />
          编辑个人信息
        </div>
      </div>
      <div class="trend">
        <div>
          <span class="left">{{user.authority}}</span>
          <span>动态</span>
        </div>
        <div>
          <span>{{user.follows}}</span>
          <span>关注</span>
        </div>
        <div>
          <span class="right">{{user.followeds}}</span>
          <span>粉丝</span>
        </div>
      </div>
      <!-- 个人介绍 -->
      <div class="introduce">
        <span>个人介绍: </span>
        <span>暂无介绍</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    user: {
      type: Object,
      default() {
        return {}
      }
    }
  }
};
</script>

<style scoped>
.header-detail {
  display: flex;
  margin-top: 50px;
}
.avatar > img {
  width: 180px;
  height: 180px;
  border-radius: 50%;
}
.detail {
  flex-grow: 1;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.nickname {
  font-size: 21px;
  font-weight: bold;
  color: rgb(55, 55, 55);
}
.level-update {
  border-bottom: 1px solid rgb(229, 229, 229);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.level {
  width: 35px;
  height: 20px;
  background-color: rgb(240, 240, 240);
  border-radius: 8px;
  color: rgb(51, 51, 51);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}
.update {
  display: flex;
  font-size: 14px;
  color: rgb(55, 55, 55);
  align-items: center;
  border: 1px solid rgb(216, 216, 216);
  border-radius: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  margin: 5px 0px;
}
.update:hover {
  background-color: rgb(242, 242, 242);
  cursor: pointer;
}
.update > img {
  width: 22px;
  margin-right: 8px;
}
.trend {
  display: flex;
  margin-top: 18px;
}
.trend > div {
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.trend > div > span:first-child {
  color: rgb(55, 55, 55);
  font-size: 18px;
  margin-bottom: 3px;
}
.trend > div > span:last-child {
  color: rgb(103, 103, 103);
  font-size: 12px;
}
.trend > div:nth-child(2) {
  align-items: center;
  border-left: 1px solid rgb(230, 230, 230);
  border-right: 1px solid rgb(230, 230, 230);
}
.trend > div:last-child {
  align-items: flex-end;
}
.left {
  margin-left: 7px;
}
.right {
  margin-right: 7px;
}
.introduce {
  margin-top: 13px;
  font-size: 13px;
}
.introduce > span:first-child {
  color: rgb(55, 55, 55);
}
.introduce > span:last-child {
  color: rgb(103, 103, 103);
}
</style>