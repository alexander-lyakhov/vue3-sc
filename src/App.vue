<template>
  <main>
    <aside>
      <!--
      <expander title="Brands">
        <sc-checkbox-group value="1" name="brands" v-model="filter['brands']">one</sc-checkbox-group>
        <sc-checkbox-group value="2" name="brands" v-model="filter['brands']">two</sc-checkbox-group>
        <sc-checkbox-group value="3" name="brands" v-model="filter['brands']">three</sc-checkbox-group>
        <sc-checkbox-group value="4" name="brands" v-model="filter['brands']">four</sc-checkbox-group>
      </expander>
      -->
      <expander v-for="(facet, facetIndex) in listFacets" :key="facetIndex" :title="facet.title">
        <sc-checkbox-group
          v-for="(item, itemIndex) in facet.values"
          :key="facetIndex + '_' + itemIndex"
          value="1"
          :name="facet.title"
          v-model="filter['item.value']"
        >
          {{item.value}}
        </sc-checkbox-group>
      </expander>
    </aside>
  </main>
</template>

<script>
import expander from '@/components/expander';
import scCheckboxGroup from '@/components/global/sc-checkbox/sc-checkbox-group.vue';

import products from '@/store/products.json';

export default {
  components: {
    expander,
    scCheckboxGroup
  },

  data() {
    return {
      //brands: []
      filter: {},
      facets: products.facets
    }
  },

  created() {
  },

  mounted() {
    console.log(this.facets)
  },

  watch: {
    filter(val) {
      console.log('filter', val)
    }
  },

  computed: {
    listFacets() {
      return Object.values(this.facets).filter(el => el.type === 'list');
    }
  },

  methods: {
    onChange(e) {
      console.log('onChange', e)
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
  width: 288px;
}
</style>
