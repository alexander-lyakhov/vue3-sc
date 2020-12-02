<template>
  <div class="modal">
    <div class="modal-overlay"></div>
    <h2>
      <slot>Modal content</slot>
    </h2>
  </div>
</template>

<script>

export default {
  name: 'modal'
}
</script>

<style lang="scss" scoped>

.modal {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow-y: hidden;
  z-index: 1;

  &-overlay {
    background: #000;
    width: 100%;
    height: 100vh;
    opacity: .5;
  }

  h2 {
    color: #eee;
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>