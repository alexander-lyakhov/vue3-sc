<template>
  <main>
    <filter-panel :facets="facets" />
  </main>
</template>

<script>

import filterPanel from '@/components/filter-panel';
import products from '@/store/products.json';

console.log('products', products);

export default {
  components: {
    filterPanel
  },

  data() {
    return {
      facets: products.facets
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
