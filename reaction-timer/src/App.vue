<template>
  <h1>Test Your Reactions!</h1>
  <button @click="start" :disabled="isPlaying">PLAY</button>
  <Block v-if="isPlaying" :delay="delay" @emitReactionTime="gameEnd" />

  <Results v-if="showResults" :score="score" />
</template>

<script>
import Block from './components/Block.vue'
import Results from './components/Results.vue'

export default {
  name: 'App',
  components: { Block, Results },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false
    }
  },
  methods: {
    start() {
      this.showResults = false
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
    },
    gameEnd(reactionTime) {
      this.score = reactionTime
      this.isPlaying = false
      this.showResults = true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: darkgoldenrod;
  margin-top: 60px;
}
button {
  background-color: whitesmoke;
  border: 2px solid darkgoldenrod;
  color: darkgoldenrod;
  padding: 16px;
  font-size: 16px;
  border-radius: 25px;
  font-family: Avenir;
}
button:disabled {
  opacity: 0.5;
}
</style>
