import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  // 音频播放
  music: new Audio(),
  musicDetail: [],  // 播放列表信息
  index: 0,   // 当前播放下标
  isActive: false,  // 开始暂停按钮
  playing: false,    // 播放状态
  listIsShow: false,   // 播放列表显示
  indey: -1,

  // 登录
  loginStatus: false,         // 登录状态 0 未登录
  userId: 0,              // 用户id
  nickName: '未登录',     // 用户名
  avatarUrl: null
}

const store = new Vuex.Store({
  state, 
  mutations: {
    musicDetail(state, payload) {
      function handleEvent() {
        setTimeout(() => {
          // this.commit('nextPlay', 'auto');
          // state.music.pause()
          state.playing = false
          state.musicDetail[state.index].current_play = false
          state.index += 1
          if(state.index >= state.musicDetail.length) {
            state.index = 0
          }
          state.indey = state.index
          state.music.src = state.musicDetail[state.index].url
          setTimeout(() => {
            state.music.play().catch(err => {
              console.log(err);
            })
            state.playing = true
            state.musicDetail[state.index].current_play = true
          }, 200);
        }, 200);
      }

      if(state.musicDetail.length !== 0) {
        state.music.pause()
        state.playing = false
      }

      let product = null
      state.musicDetail.find((item, index) => {
        if (item.id == payload.id) {
          state.musicDetail[state.index].current_play = false
          state.index = index
          product = item
        }
      })
      if(product) {
        state.music.src = product.url
      }else {
        state.musicDetail.push(payload)
        state.musicDetail[state.index].current_play = false
        state.index = state.musicDetail.length - 1
        state.music.src = state.musicDetail[state.index].url
      }
      if(state.musicDetail){
        state.music.addEventListener("canplay", () => {
          let odd = null
          state.musicDetail.find(item => {
            if (item.duration == 0) {
              odd = item
            }
          })
          if(odd){
            odd.duration = state.music.duration
          }
        })
        setTimeout(() => {
          state.indey = state.index
          state.music.play()
          state.musicDetail[state.index].current_play = true
          state.playing = true
        }, 200);
        state.music.addEventListener("ended", handleEvent)
      }
    },
    // 播放状态
    startPlaying(state) {
      state.playing = true
    },
    // 暂停状态
    delayPlaying(state) {
      state.playing = false
    },
    // 上一首
    prevPlay(state) {
      state.music.pause()
      state.musicDetail[state.index].current_play = false
      state.playing = false
      if(state.index == state.musicDetail.length) {
        state.index -= 1
      }
      state.index -= 1
      if(state.index < 0) {
        state.index = (state.musicDetail.length - 1)
      }
      state.music.src = state.musicDetail[state.index].url
      state.indey = state.index
      state.music.play().catch(err => {
        console.log(err);
      })
      state.playing = true
      state.musicDetail[state.index].current_play = true
    },
    // 下一首
    nextPlay(state) {
      state.music.pause()
      state.playing = false
      state.musicDetail[state.index].current_play = false
      state.index += 1
      if(state.index >= state.musicDetail.length) {
        state.index = 0
      }
      state.music.src = state.musicDetail[state.index].url
      state.indey = state.index
      setTimeout(() => {
        state.music.play().catch(err => {
          console.log(err);
        })
        state.playing = true
        state.musicDetail[state.index].current_play = true
      }, 200);
    },
    // 播放列表显示状态
    listIsShowFun(state) {
      state.listIsShow = !state.listIsShow
    }, 
    // 清空播放列表 初始化
    clearList(state) {
      state.musicDetail = []
      state.playing = false
      state.isActive = false
      state.index = 0
      state.indey = -1
      state.music.pause()
      state.listIsShow = false
    },
    // 播放列表点击播放
    itemListPlayer(state, payload) {
      state.music.pause()
      state.playing = false
      state.musicDetail[state.index].current_play = false
      state.index = payload
      state.music.src = state.musicDetail[state.index].url
      setTimeout(() => {
        state.indey = state.index
        state.music.play()
        state.playing = true
        state.musicDetail[state.index].current_play = true
      }, 200);
    },

    /*-------- 登录 -------- */

    userDetailInit(state, payload) {
      state.loginStatus = true
      state.userId = payload.userId
      state.nickName = payload.nickName
      state.avatarUrl = payload.avatarUrl
    }
  },
  getters: {
    
  },
  actions: {

  }
})

export default store