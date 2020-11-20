<template>
  <div class="expander noselect">
    <div class="expander-header" @click="toggleShow" :class={isOpen}>
      {{title}}
    </div>
    <div class="expander-body" v-show="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Expander',

  props: {
    title: {
      type: String,
      default: 'Group'
    }
  },

  data() {
    return {
      isOpen: true
    }
  },
  methods: {
    toggleShow() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss" scoped>

.expander {
  color: #000;
  background: #fff;
  box-sizing: border-box;
  //width: 256px;
  margin: 1rem 1rem;

  &-header {
    font-weight: bold;
    border-bottom: 1px solid #ccc;
    box-sizing: content-box;
    height: 2rem;
    line-height: 2rem;
    display: block;
    position: relative;
    margin: 2px;
    cursor: pointer;

    &:after {
      content: '+';
      font-size: 1.5rem;
      font-weight: normal;
      text-align: center;
      display: block;
      width: 2rem;
      height: 2rem;
      position: absolute;
      top: 0;
      right: 0;
    }

    &.isOpen:after {
      content: '-';
    }
  }

  &-body {
    font-size: .875rem;
    margin: 2px;
    padding: .5rem 0;
  }
}
</style>