<template>
  <div class="backdrop">
    <div class="modal">
      <p>Modal Content</p>
    </div>
  </div>
</template>

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
    background: darkslategrey;
    width: 100%;
    height: 100%;
  }
</style>
