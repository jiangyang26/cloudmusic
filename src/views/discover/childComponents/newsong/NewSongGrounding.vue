<template>
  <div class="new-song-grounding">
    <div class="nav-box">
      <type-nav-bar @typeClick="typeClick"></type-nav-bar>
      <all-nav-bar @allClick="allClick" :areaList="['推荐', '全部']"></all-nav-bar>
    </div>
    <!-- 本周新碟 -->
    <div v-if="weekData.length > 0" class="week-data">
      <div class="week-title">本周新碟</div>
      <div class="week-list">
        <div class="item-list" v-for="item in weekData" :key="item.id">
          <div class="img-box"><img :src="item.picUrl" alt=""></div>
          <div class="al-box">{{item.name}}</div>
          <div class="art-box">{{item.artist.name}}</div>
        </div>
      </div>  
    </div>
    <div class="week-data">
      <div class="week-title">全部新碟</div>
      <div class="week-list">
        <div class="item-list" v-for="item in monthData" :key="item.id">
          <div class="img-box"><img :src="item.picUrl" alt=""></div>
          <div class="al-box">{{item.name}}</div>
          <div class="art-box">{{item.artist.name}}</div>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
import TypeNavBar from './../typenavbar/TypeNavBar.vue'
import AllNavBar from './../allnavbar/AllNarBar.vue'

import { getNewSongGrounding } from 'network/recommend.js'

export default {
  data() {
    return {
      area: 'ALL',
      type: 'hot',
      // 本周新碟
      weekData: [],
      // 全部新碟
      monthData: []
    };
  },  

  components: { TypeNavBar, AllNavBar },
  methods: {
    typeClick(index) {
      switch (index) {
        case 0:
          this.area = 'All'
          break;
        case 1:
          this.area = 'ZH'
          break;
        case 2:
          this.area = 'EA'
          break;
        case 3:
          this.area = 'KR'
          break;
        case 4:
          this.area = 'JP'
          break;
        default:
          break;
      }
    },
    allClick(index) {
      switch (index) {
        case 0:
          this.type = 'hot'
          break;
        case 1:
          this.type = 'new'
          break;
        default:
          break;
      }
    },
    // 请求新碟上架数据
    reqeustNewSongGrounding() {
      getNewSongGrounding({
        limit: 30,
        area: this.area,
        type: this.type
      }).then(res => {
        if(res.data.weekData !== undefined) {
          this.weekData = res.data.weekData
        }else {
          this.weekData = []
        }
        this.monthData = res.data.monthData
      })
    }
  },
  watch: {
    area() {
      this.reqeustNewSongGrounding()
    },
    type() {
      this.reqeustNewSongGrounding()
    }
  },
  mounted() {
    this.reqeustNewSongGrounding()
  },
  
};
</script>

<style  scoped>
.nav-box{
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
}
.week-data{
  display: flex;
}
.week-title{
  writing-mode: vertical-lr;
  font-size: 20px;
  color: rgb(55,55,55);
}
.week-list{
  flex-grow: 1;
  margin-left: 20px;
  display: flex;
  flex-wrap: wrap;
}
.item-list{
  width: 25%;
  margin-bottom: 30px;
}
.img-box>img{
  width: 150px;
  border-radius: 5px;
}
.al-box{
  width: 150px;
  color: rgb(55,55,55);
  font-size: 15px;
  margin: 8px 0px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.art-box{
  width: 150px;
  color: rgb(159,159,159);
  font-size: 14px;
}
</style>