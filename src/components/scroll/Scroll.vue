<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  
  data() {
    return {
      
    };
  },

  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      // 支持鼠标滚轮
      mouseWheel: true
    })
  },

  methods: {
    refresh() {
      this.scroll.refresh()
    }
  },
};
</script>

<style scoped>

</style>