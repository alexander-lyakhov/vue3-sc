<template>
  <div class="colors">
    <div
      class="color"
      v-for="(color, index) in items"
      :key="index"
      :style="{background: color.value}"
    />
  </div>
</template>

<script>

export default {
  name:'color-palette',

  props: {
    items: {
      type: Array,
      default: [],
      required: true
    },
  },

  data() {
    return {
    }
  },

  mounted() {
  },

  computed: {
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>

.colors {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
}

.color {
  background: #fff;
  border: 1px solid #000;
  width: 24px;
  height: 24px;
  position: relative;
  margin: 0 4px 4px 0;
  transition: transform .1s;
  z-index: 0;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 4px rgba(0,0,0,.33);
    transform: scale(1.5);
    z-index: 1;
  }

  &:after {
    content: '';
    border: 1px solid #fff;
    display: block;
    width: 20px;
    height: 20px;
    position: absolue;
    left: 2px;
    top: 2px;
  }
}
</style>