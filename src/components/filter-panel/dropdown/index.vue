<template>
  <div class="dropdown noselect" :class="{'is-open': isOpen}">
    <select class="selectElement" ref="selectElement">
      <slot></slot>
    </select>
    <div class="dropdown-label" @click="toggleOpen">{{value}}</div>
    <ul class="dropdown-list" @mouseup="change">
      <li v-for="(option, index) in options" :key="index" :data-index="index">{{option.value}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Dropdown',

  data() {
    return {
      options: [],
      isOpen: false,
      value: ''
    }
  },

  created() {
    document.body.addEventListener('click', () => this.close());
  },

  mounted() {
    console.log(this.$refs.selectElement.options);

    this.options.push(
      ...Array.from(this.$refs.selectElement.options)
    );
    this.value = this.$refs.selectElement.value;
  },

  methods: {
    toggleOpen(e) {
      e.stopPropagation();
      this.isOpen = !this.isOpen;
    },

    close() {
      this.isOpen = false;
    },

    change(e) {
      this.$refs.selectElement.selectedIndex = e.target.dataset.index;
      this.value = this.$refs.selectElement.value;

      console.log('change', this.value, e.target.dataset.index)
    }
  }
}
</script>

<style lang="scss" scoped>

.dropdown {
  font-size: .875rem;
  color: #333;
  background: #fff;
  width: 100%;
  position: relative;

  select {
    width: 160px;
    margin: 1rem;
  }

  .selectElement {
    display: none;
  }

  &-label {
    box-sizing: border-box;
    border: 1px solid #09c;
    line-height: 32px;
    height: 32px;
    padding: 0 8px;
    cursor: pointer;
    position: relative;

    &:after {
      content: '';
      border-left: 2px solid #606060;
      border-top: 2px solid #606060;
      display: block;
      width: 8px;
      height: 8px;
      position: absolute;
      right: 10px;
      top: 10px;
      transform: rotate(-135deg);
    }
  }

  &-list {
    background: #fff;
    border: 1px solid #09c;
    display: none;
    width: 100%;
    position: absolute;
    left: 0;
    top: 100%;
    z-index: 1;

    li {
      padding: .5rem .5rem;

      &:hover {
        color: #fff;
        background: #09c;
        cursor: pointer;
      }
    }
  }

  &.is-open {
    .dropdown-label {
      background: #f0f0f0;

      &:after {
        top: 14px;
        transform: rotate(45deg);
      }
    }

    .dropdown-list {
      border-top: none;
      display: block;
    }
  }
}
</style>