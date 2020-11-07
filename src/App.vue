<template>
  <main>
    <aside>
      <expander v-for="(facet, facetIndex) in listFacets" :key="facetIndex" :title="facet.title">
        <list
          :name="facet.title"
          :items="facet.values"
          :columns="facet.title === 'Size'? 2:1"
        >
        </list>
      </expander>
    </aside>
  </main>
</template>

<script>
import expander from '@/components/expander';
import list from '@/components/list';
import scCheckboxGroup from '@/components/global/sc-checkbox/sc-checkbox-group.vue';

import products from '@/store/products.json';

export default {
  components: {
    expander,
    list,
  },

  data() {
    return {
      facets: products.facets
    }
  },

  computed: {
    listFacets() {
      return Object.values(this.facets).filter(el => el.type === 'list');
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

aside {
  background: #fff;
  box-shadow: 0 6px 8px rgba(0,0,0,0.4);
  border: 1px solid transparent;
  width: 336px;
}

</style>
