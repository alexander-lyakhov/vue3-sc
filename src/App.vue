<template>
  <main>
    <filter-panel :facets="facets" />
    <grid :products="products" />
  </main>
</template>

<script>

import filterPanel from '@/components/filter-panel';
import grid from '@/components/grid';
import products from '@/store/products.json';

console.log('products', products);

export default {
  components: {
    filterPanel,
    grid,
  },

  data() {
    return {
      facets: products.facets,
      products: products.products
    }
  },
}
</script>

<style lang="scss" scoped>

main {
  display: flex;
  min-width: 580px;
  min-height: 100vh;
}
</style>
