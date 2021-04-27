<template>
  <main>
    <filter-panel :count="resultCount.total" :sorting="sortings" :facets="facets" />
    <grid :products="products" />
  </main>
</template>

<script>

import filterPanel from '@/components/filter-panel';
import grid from '@/components/grid';
import { mapState } from 'vuex'

const reg = /sort=(.+)/i;

export default {
  components: {
    filterPanel,
    grid,
  },

  mounted() {
    this.$store.dispatch('GET_PRODUCTS')
  },

  computed: {
    ...mapState(['resultCount', 'sortings', 'facets', 'products']),
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
