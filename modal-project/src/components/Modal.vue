<template>
  <div class="backdrop" @click.self="hideModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['header', 'text', 'theme'],
  methods: {
    hideModal() {
      this.$emit('close')
    }
  }
}
</script>

<style>
  .modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: whitesmoke;
    border-radius: 8px;
  }
  .backdrop {
    top: 0;
    position: fixed;
    background: rgb(47, 79, 79, 0.5);
    width: 100%;
    height: 100%;
  }
  .modal h1 {
    border: none;
    color: maroon;
  }
  .modal.sale {
    background: salmon;
    color: darkolivegreen;
  }
  .modal.sale h1 {
    color: wheat;
  }
</style>
