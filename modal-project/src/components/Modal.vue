<template>
  <div class="backdrop" @click.self="hideModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <slot></slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['theme'],
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
  .modal.sale .actions {
    color: wheat;
  }
  .modal p {
    font-style: normal;
  }
  .modal .actions {
    text-align: center;
    margin: 30px 0 10px 0;
  }
  .modal .actions a {
    color: orange;
    padding: 8px;
    border: 1px solid whitesmoke;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
  }
  .modal.sale .actions a {
    color: whitesmoke;
  }
</style>
