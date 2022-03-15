<template>
  <div class="nav-bar" :class="type == 'search' ? 'search' : ''">
    <div v-for="(item, index) in navTitle" 
         :key="index"
         @click="itemClick(index)"
         :class="index === currentIndex ? 'active' : ''">
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0
    };
  },

  props: {
    navTitle: {
      type: Array,
      default: () => {
        return [
          {title: '个性推荐', path: '/'},
          {title: '专属定制', path: '/'},
          {title: '歌单', path: '/'},
          {title: '排行榜', path: '/'},
          {title: '歌手', path: '/'},
          {title: '最新音乐', path: '/'}
        ]
      }
    },
    type: {
      type: String,
      default: 'discover'
    }
  },

  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('handleType', index);
    }
  },
};
</script>

<style scoped>
.nav-bar{
  width: 100%;
  display: flex;
  height: 60px;
  background-color: #fff;
  align-items: center;
  padding-left: 6.3%;
  box-sizing: border-box;
}
.nav-bar div{
  margin-right: 30px;
  color: rgb(55,55,55);
  cursor: pointer;
  padding-bottom: 5px;
}
.active{
  font-size: 20px;
  font-weight: bold;
  border-bottom: 4px solid rgb(236,65,65);
}
.search{
  font-size: 14px;
  padding-left: 0px;
}
.search .active{
  font-size: 16px;
  border-bottom: 3px solid rgb(236,65,65);
  box-sizing: border-box;

}
</style>