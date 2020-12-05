<template>
  <main>
    <filter-panel :count="resultCount.total" :facets="facets" />
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
      resultCount: products.resultCount,
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
