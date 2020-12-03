<template>
  <div class="modal">
    <div class="modal-overlay"></div>
    <div class="modal-dialog">
      <div class="modal-title">
        <slot name="modal-title">Modal Title</slot>
      </div>
      <div class="content-title">
        <slot name="title">Content Title</slot>
      </div>
      <p class="content-body">
        <slot name="body">Content Body</slot>
      </p>
    </div>
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

  &-dialog {
    color: #fff;
    background: #404040;
    border: 2px solid #eee;
    box-shadow: 0 8px 8px rgba(0,0,0,0.25);
    max-width: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 2rem;
  }

  &-title {
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  .content-title {
    font-size: 1.5rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }
}
</style>