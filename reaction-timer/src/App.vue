<template>
  <h1><em>For A Vue Dollars More</em></h1>
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
body {
  background-image: url('https://wallpapercave.com/wp/wp4639116.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
}
#app {
  font-family: 'Brygada 1918', 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
  margin-top: 60px;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.63);
}

#app h1 {
  font-size: 36px;
  color: whitesmoke;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.75);
}

button {
  background-color: whitesmoke;
  border: 2px solid firebrick;
  color: firebrick;
  padding: 16px;
  font-size: 20px;
  border-radius: 25px;
  font-family: Avenir;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.616);
  font-family: 'Brygada 1918';
  font-style: normal;
}
button:disabled {
  opacity: 0.5;
}
</style>
