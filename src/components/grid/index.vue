<template>
  <div class="grid">
    <div class="grid-cell" v-for="product in products" :key="product.code" >
      <product-item :product="product" />
    </div>
  </div>
</template>

<script>

import productItem from '@/components/product-item';

export default {
  name: 'grid',

  components: {
    productItem
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

@media screen and (max-width: 1450px) {
  .grid .grid-cell {
      min-width: 33.33%;
    }
}

@media screen and (max-width: 1200px) {
  .grid .grid-cell {
      min-width: 50%;
    }
}

@media screen and (max-width: 920px) {
  .grid .grid-cell {
      min-width: 100%;
    }
}
</style>