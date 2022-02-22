<template>
  <h2>Your score is {{score}} ms.</h2>
  <h3>You are {{rank}}</h3>
</template>

<script>
export default {
  props: ['score'],
  data() {
    return {
      rank: null
    }
  },
  mounted() {
    if (this.score < 250) {
      this.rank = "the good."
    } else if (this.score < 400) {
      this.rank = 'the bad.'
    } else {
      this.rank = 'the ugly.'
    }
  }
}
</script>

<style>

</style>
