<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name">
  <button @click="handleClick">Click Me!</button>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      title: "Let's Vue This"
    }
  },
  methods: {
    handleClick() {

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
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid blanchedalmond;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
