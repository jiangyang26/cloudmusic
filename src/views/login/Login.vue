<template>
  <div class="login">
    <div class="login-header">
      <div @click="closeLogin"><img src="~assets/img/close_window_black.png" alt=""></div>
    </div>
    <div class="bg-login">
      <div><img src="~assets/img/bg_login.png" alt=""></div>
    </div>
    <div class="phone-login">
      <div class="login-box">
        <!-- 输入手机号 -->
        <div>
          <div class="phone_img"><img src="~assets/img/phone.png" alt=""></div>
          <input ref="phone" type="tel" placeholder="请输入手机号">
        </div>
        <!-- 输入密码 -->
        <div>
          <div class="pass_img"><img src="~assets/img/password.png" alt=""></div>
          <input ref="password" type="password" placeholder="请输入密码">
        </div>
      </div>
      <!-- 自动登录 输入提示 -->
      <div class="auto-login">
        <div><input type="checkbox" checked="true">自动登录</div>
        <span></span>
      </div>
      <!-- 登录按钮 -->
      <div class="submit" @click="loginRequest">登录</div>
      <div class="register">注册</div>
      <!-- 服务条款 -->
      <div class="check">
        <div><input type="checkbox"/>同意《服务条款》《隐私政策》《儿童隐私政策》</div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from 'network/login.js'

import { getCookies, removeCookie } from 'utils/utils.js'

export default {
  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    // 关闭登录页面
    closeLogin() {
      this.$emit('closeLogin');
    },
    // 移除cookies
    remove(userId, nickName, avatarUrl) {
      removeCookie('nickName')
      removeCookie('userId')
      removeCookie('avatarUrl')
    },
    // 添加cookies
    setCookies(userId, nickName, avatarUrl) {
      document.cookie = 'nickName=' + nickName
      document.cookie = 'userId=' + userId
      document.cookie = 'avatarUrl=' + avatarUrl 
    },
    // 登录请求
    loginRequest() {
      const phone = this.$refs.phone.value
      const password = this.$refs.password.value
      login(phone, password).then(res => {
        const userId = res.data.profile.userId
        const nickName = res.data.profile.nickname
        const avatarUrl = res.data.profile.avatarUrl
        this.$store.commit('userDetailInit', {
          userId: userId,
          nickName: nickName,
          avatarUrl: avatarUrl
        });
        if(getCookies('nickName') != null) {
          this.remove(userId, nickName, avatarUrl)
        }
        this.setCookies(userId, nickName, avatarUrl)
        this.closeLogin()
      })
    }
  },
};
</script>

<style scoped>
.login{
  width: 370px;
  height: 31.25rem;
  background-color: white;
  position: fixed;
  z-index: 30;
  top: 50%;
  left: 50%;
  margin-left: -200px;
  margin-top: -15.625rem;
  box-shadow: 0px 0px 8px rgb(202, 202, 202);
}
.login-header{
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.login-header>div{
  display: flex;
  margin-right: 5px;
  cursor: pointer;
}
.login-header img{
  width: 23px;
}
.bg-login{
  display: flex;
  justify-content: center;
  margin-top: 25px;
}
.bg-login img{
  width: 300px;
}
.login-box{
  width: 270px;
  border: 1px solid rgb(229,229,229);
  height: 70px;
  margin: auto;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
}
.login-box>div{
  height: 50%;
  display: flex;
}
.login-box input{
  outline: none;
  font-size: 13px;
  border: none;
  flex-grow: 1;
}
.login-box>div:first-child{
  border-bottom: 1px solid rgb(229,229,229);
}
.phone_img,.pass_img{
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0px 5px;
}
.phone_img>img,.pass_img>img{
  width: 20px;
}
.auto-login{
  width: 270px;
  height: 25px;
  display: flex;
  margin: 10px auto;
  justify-content: space-between;
  font-size: 13px;
}
.auto-login input{
  margin-top: 1px;
  margin-right: 3px;
}
.auto-login>div{
  display: flex;
  align-items: center;
}
.submit{
  width: 270px;
  height: 40px;
  margin: auto;
  border-radius: 5px;
  background-color: rgb(234,72,72);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  font-size: 14px;
}
.submit:hover{
  background-color: rgb(199,46,46);
}
.register{
  text-align: center;
  margin: 10px 0px;
  font-size: 14px;
  cursor: pointer;
}
.check{
  margin-top: 80px;
}
.check>div{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
}
.check>div input{
  margin-top: 2px;
  margin-right: 8px;
}
</style>