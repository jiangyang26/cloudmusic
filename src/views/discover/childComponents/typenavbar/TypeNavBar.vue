<template>
  <div class="type-nav">
    <div class="item" 
         v-for="(item, index) in title" 
         :key="index"
         @click="itemClick(index)"
         :class="currentIndex == index ? 'active' : ''">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ["全部", "华语", "欧美", "韩国", "日本"],
      currentIndex: 0,
    };
  },

  mounted() {},

  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('typeClick', index);
    }
  },
};
</script>

<style scoped>
.type-nav {
  display: flex;
  font-size: 14px;
  color: rgb(103, 103, 103);
  margin-bottom: 20px;
}
.type-nav > div {
  width: 60px;
  cursor: pointer;
}
.active{
  font-weight: bold;
  color: rgb(55,55,55);
}
</style>