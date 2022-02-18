<template>
  <h2>Your score is {{score}} ms.</h2>
  <h3>You have the speed of {{rank}}</h3>
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
      this.rank = "a demon's whisper."
    } else if (this.score < 400) {
      this.rank = 'an able seaman.'
    } else {
      this.rank = 'the most sluggish buffoon.'
    }
  }
}
</script>

<style>

</style>
