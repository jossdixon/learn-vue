<template>
  <div class="block" v-if="showBlock">
    CLICK ME
  </div>
</template>

<script>
export default {
  props: ['delay'],
  data() {
    return {
      showBlock: false
    }
  },
  mounted() {
    console.log('component mounted')
    setTimeout(() => {
      this.showBlock = true
      console.log(this.delay)
    }, this.delay)
  },
  updated() {
    console.log('updated')
  },
  unmounted() {
    console.log('unmounted')
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
