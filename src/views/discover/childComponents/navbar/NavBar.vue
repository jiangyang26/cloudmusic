<template>
  <div class="nav-bar">
    <div
      v-for="(item, index) in title"
      :key="item"
      @click="itemClick(index)"
      :class="currentIndex == index ? 'active' : 'hide'">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ["新歌速递", "新碟上架"],
      currentIndex: 0,
    };
  },

  mounted() {},

  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('navClick', index);
    },
  },
};
</script>

<style scoped>
.nav-bar {
  width: 200px;
  height: 30px;
  border: 1px solid rgb(187, 187, 187);
  margin: auto;
  border-radius: 30px;
  display: flex;
}
.nav-bar > div {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: rgb(55, 55, 55);
  border-radius: 30px;
}
.active {
  color: white;
  background-color: rgb(187, 187, 187);
}
.hide:hover{
  background-color: rgb(244,244,244);
}
</style>