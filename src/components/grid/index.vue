<template>
  <div class="grid">
    <grid-cell v-for="product in products" :key="product.code" :product="product" />
  </div>
</template>

<script>

import gridCell from './grid-cell.vue';

export default {
  name: 'grid',

  components: {
    gridCell
  },

  props: {
    products: {
      type: Array,
      default: []
    }
  },

  created() {
    console.log('Grid', this.products)
  }
}
</script>

<style lang="scss" scoped>

.grid {
  background: #808080;
  display: flex;
  flex-wrap: wrap;
  padding: 0 .5rem;

  &-cell {
    width: 25%;
  }
}

@media screen and (max-width: 1600px) {
  .grid .grid-cell {
      min-width: 25%;
    }
}

@media screen and (max-width: 1370px) {
  .grid .grid-cell {
      min-width: 33.33%;
    }
}

@media screen and (max-width: 1100px) {
  .grid .grid-cell {
      min-width: 50%;
    }
}

@media screen and (max-width: 900px) {
  .grid .grid-cell {
      min-width: 100%;
    }
}
</style>