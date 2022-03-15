<template>
  <div class="all-nav-bar">
    <div 
        class="item" 
        v-for="(item, index) in areaList" 
        :key="index"
        @click="itemClick(index)"
        :class="currentIndex === index ? 'active' : ''">
      {{item}}
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
    areaList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('allClick', index);
    }
  },
};
</script>

<style scoped>
.all-nav-bar{
  display: flex;
}
.item{
  width: 45px;
  height: 20px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 25px;
  color: rgb(103,103,103);
  cursor: pointer;
  border-radius: 20px;
}
.active{
  color: rgb(236,65,65);
  background-color: rgb(253,245,245);
}
.active:hover{
  background-color: rgb(253,237,237);
}
</style>