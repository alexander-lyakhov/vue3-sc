<template>
  <main>
    <aside>
      <expander v-for="(facet, facetIndex) in listFacets" :key="facetIndex" :title="facet.title">
        <list :items="facet.values" :columns="getColomnCount(facet)">
          <template #default="{item}">
            <sc-checkbox-group :value="item.value" :name="facet.title" v-model="filter[facet.title]">
              {{item.value}}
            </sc-checkbox-group>
            <span class="count">({{item.count}})</span>
          </template>
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

console.log('products', products);

export default {
  components: {
    expander,
    scCheckboxGroup,
    list,
  },

  data() {
    return {
      filter: {},
      facets: products.facets
    }
  },

  computed: {
    listFacets() {
      return Object.values(this.facets).filter(el => el.type === 'list');
    }
  },

  methods: {
    getColomnCount(facet) {
      return facet.title.toLowerCase() === 'size'? 2:1;
    }
  }
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

.count {
  color: #08c;
  //color: #080;
  //background: #d8f0d8;
  text-align: right;
  //min-width: 32px;
  //display: inline-block;
  padding: 0 .25rem;
  float: right;
}


</style>
