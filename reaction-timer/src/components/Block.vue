<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
    CLICK ME
  </div>
</template>

<script>
export default {
  props: ['delay'],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0
    }
  },
  mounted() {
    setTimeout(() => {
        this.showBlock = true
        this.startTimer()
      }, this.delay)
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10
      }, 10)
    },
    stopTimer() {
      clearInterval(this.timer)
      this.$emit('emitReactionTime', this.reactionTime)
    }
  }
}
</script>

<style>
  .block {
    width: 400px;
    border-radius: 50px;
    background: darkgoldenrod;
    color: whitesmoke;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
  }
</style>
