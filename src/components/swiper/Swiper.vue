<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in banners" :key="item.imageUrl">
        <img :src="item.imageUrl" alt="">
      </div>
    </div>
    <!-- 小圆点 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
// import 'swiper/swiper.min.css'
// 6.0以上版本引入下面这个css
// import 'swiper/swiper-bundle.css'
// 外部引入autoplay模块
// import SwiperCore, { Autoplay } from 'swiper'
// SwiperCore.use([Autoplay]);

export default {
  data() {
    return {

    }
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  mounted() {
    var mySwiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        // 手动操作依然自动轮播
        disableOnInteraction: false,
        delay: 3000
      },
      effect: 'coverflow', // 设置滚动效果
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
    })
  }
}
</script>

<style>
.swiper-container{
  width: 60%;
  margin: auto;
}
.swiper-slide>img{
  width: 100%;
  border-radius: 10px;
}
/* 改变小圆点分页器默认颜色 */
.swiper-pagination-bullet-active {
  background-color: rgb(236,65,65)
}
.swiper-slide{height:1px} /* 随意指定一个height值即可 */    
.swiper-slide-active { height:auto}
</style>