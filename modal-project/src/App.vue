<template>
  <h1>{{ title }}</h1>
  <div v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Click this link</a>
        <a href="#">Or this one</a>
      </template>
      <h1>The Big Text</h1>
      <p>Here is the much smaller text </p>
    </Modal>
  </div>
  <div v-if="showModalTwo">
    <Modal theme="" @close="toggleModalTwo">
      <template v-slot:links>
        <a href="#">One</a>
        <a href="#">Two</a>
      </template>
      <h1>Some More Big Text</h1>
      <p>And look, the small text is back too</p>
    </Modal>
  </div>
  <div>
    <button @click="toggleModal">Click Me!</button>
    <button @click="toggleModalTwo">How about Me?</button>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: "Let's Vue This",
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
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
