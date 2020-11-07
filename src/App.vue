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
        <ul :class="{'colums-2': facet.title === 'Size'}">
          <li v-for="(item, itemIndex) in facet.values" :key="facetIndex + '_' + itemIndex">
            <sc-checkbox-group
              :value="item.value"
              :name="facet.title"
              v-model="filter[facet.title]"
            >
              {{item.value}} <span class="count">({{item.count}})</span>
            </sc-checkbox-group>
          </li>
        </ul>
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

.colums-2 {
  column-count: 2;
  //column-gap: 0;
  //column-rule: 1px solid #e0e0e0;
}
</style>
