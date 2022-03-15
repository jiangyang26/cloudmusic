<template>
  <div class="app-header">
    <div>
      <!-- 头部左侧盒子 -->
      <div class="app-header-left">
        <slot></slot>
      </div>
      <!-- 头部中间搜索盒子 -->
      <div class="app-header-center">
        <!-- 返回按钮 -->
        <div class="back-div" @click="back">
          <!-- <img v-if="length == 1" src="~assets/img/back.png" alt="" /> -->
          <img src="~assets/img/back_true.png" alt="" />
        </div>
        <!-- 前进按钮 -->
        <div class="forward-div" @click="forward">
          <!-- <img v-if="length == historyLength" src="~assets/img/forward.png" alt="" /> -->
          <img src="~assets/img/forward_true.png" alt="" />
        </div>
        <!-- 搜索 -->
        <div class="search-div">
          <img src="~assets/img/search.png" alt="" />
          <input
            ref="search"
            type="text"
            placeholder="搜索"
            @keyup.enter="search"
          />
        </div>
        <div class="voice-div"><img src="~assets/img/voice.png" alt="" /></div>
      </div>
      <!-- 头部右侧盒子 -->
      <div class="app-header-right">
        <div class="excl" @click="loginClick">
          <div class="profile-box">
            <img v-if="loginStatus" class="avatarUrl" :src="avatarUrl" alt="">
            <img v-else class="defaultUrl" src="~assets/img/profile.png" alt="">
          </div>
          <span>{{nickName}}</span>
        </div>
        <div class="row"><img src="~assets/img/theme.png" alt=""></div>
        <div class="row"><img src="~assets/img/set_up.png" alt=""></div>
        <div class="row"><img src="~assets/img/message.png" alt=""></div>
        <div class="row"><img src="~assets/img/narrow.png" alt=""></div>
        <div class="row"><img src="~assets/img/big_window.png" alt=""></div>
        <div class="row"><img src="~assets/img/close_window.png" alt=""></div>
        <login v-if="loginIsShow" @closeLogin="closeLogin" />
      </div>
    </div>
  </div>
</template>

<script>
import Login from 'views/login/Login.vue'

import { getCookies } from 'utils/utils.js'
import { getUserInfo } from 'network/login.js'

export default {
  data() {
    return {
      loginIsShow: false,
      // length: history.length,
      // historyLength: history.length
    };
  },

  mounted() {
    if(getCookies('nickName')) {
      getUserInfo(getCookies('userId')).then(res => {
        this.$store.commit('userDetailInit', {
          userId: getCookies('userId'),
          nickName: getCookies('nickName'),
          avatarUrl: res.data.profile.avatarUrl
        });
      })
    }
  },

  components: { Login },

  computed: {
    nickName() {
      return this.$store.state.nickName;
    },
    loginStatus() {
      return this.$store.state.loginStatus
    },
    state() {
      return this.$store.state
    },
    avatarUrl() {
      return this.state.avatarUrl
    }
  },

  methods: {
    // 搜索请求
    search() {
      const keywords = this.$refs.search.value
      if(keywords != '') {
        this.$router.push({
          path: '/cloudsearch',
          query: {
            keywords: keywords
          }
        })
      }
    },
    // 登录点击
    loginClick() {
      if(this.loginStatus) {
        // 用户信息页面
        this.$router.push({
          path: '/profile',
          query: {
            uid: this.state.userId
          }
        })
      }else {
        this.loginIsShow = true
      }
    },
    // 登录页面关闭
    closeLogin() {
      this.loginIsShow = false
    },
    back() {
      history.back()
    },
    forward() {
      history.forward()
    }
  },
};
</script>

<style scoped>
.app-header {
  width: 100%;
  height: 60px;
  background-color: rgb(236, 65, 65);
}
.app-header > div {
  width: 94%;
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.app-header-left {
  overflow: hidden;
  display: flex;
  overflow: hidden;
  align-items: center;
  width: 180px;
}
.app-header-center {
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.back-div,
.forward-div {
  width: 25px;
  height: 25px;
  background-color: rgb(217, 59, 59);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.back-div > img,
.forward-div > img {
  width: 14px;
}
.search-div {
  display: flex;
  align-items: center;
  background-color: rgb(225, 62, 62);
  height: 30px;
  width: 65%;
  border-radius: 20px;
}
.search-div > img {
  width: 13px;
  height: 13px;
  margin-left: 10px;
  margin-right: 7px;
}
.search-div > input {
  outline: none;
  flex-grow: 1;
  height: calc(100% - 2px);
  border: none;
  background-color: rgba(202, 153, 153, 0);
  font-size: 12px;
  color: rgb(255, 255, 255);
}
.voice-div {
  width: 28px;
  height: 28px;
  background-color: rgb(225, 62, 62);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.voice-div > img {
  width: 25px;
}

.app-header-right{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
}
.profile-box{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: rgb(219, 219, 219);
}
.excl{
  display: flex;
  align-items: center;
  cursor: pointer;
}
.excl span{
  font-size: 12px;
  color: white;
  margin-left: 10px;
}
.row{
  display: flex;
  align-items: center;
}
.row>img{
  width: 20px;
}
.avatarUrl{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.defaultUrl{
  width: 23px;
}
</style>