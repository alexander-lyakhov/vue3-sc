<template>
  <div class="dropdown" :class="{'is-open': isOpen}">
    <select class="selectElement" ref="selectElement">
      <slot></slot>
    </select>
    <div class="label" @click="toggleOpen">{{value}}</div>
    <ul class="list" @mouseup="change">
      <li v-for="(item, index) in options" :key="index" :data-index="index">{{item.value}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Dropdown',

  created() {
    document.body.addEventListener('click', () => this.close());
  },

  mounted() {
    this.options.push(
      ...Array.from(this.$refs.selectElement.options)
    );
    this.value = this.$refs.selectElement.value;
  },

  data() {
    return {
      options: [],
      isOpen: false,
      value: ''
    }
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
</style>