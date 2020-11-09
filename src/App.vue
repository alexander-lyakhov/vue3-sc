<template>
  <main>
    <aside>
      <expander v-for="(facet, facetIndex) in listFacets" :key="facetIndex" :title="facet.title">
        <template v-if="isBreadcrumbed(facet)">
          <div class="breadcrumbs">
            <list :items="facet.breadcrumbs" #default="{item}">
              {{item.value}}
            </list>
          </div>
          <list :items="facet.values" #default="{item}">
            <a class="breadcrumb-link" href="#">
              {{item.value}}
            </a>
            <span class="count">({{item.count}})</span>
          </list>
        </template>

        <template v-if="isCheckList(facet)">
          <list :items="facet.values" :columns="getColomnCount(facet)">
            <template #default="{item}">
              <sc-checkbox-group :value="item.value" :name="facet.title" v-model="filter[facet.title]">
                {{item.value}}
              </sc-checkbox-group>
              <span class="count">({{item.count}})</span>
            </template>
          </list>
        </template>

        <template v-if="isColor(facet)">
          <color-palette :items="facet.values" />
        </template>
      </expander>
    </aside>
  </main>
</template>

<script>
import expander from '@/components/expander';
import list from '@/components/list';
import colorPalette from '@/components/color-palette';
import scCheckboxGroup from '@/components/global/sc-checkbox/sc-checkbox-group.vue';

import products from '@/store/products.json';

console.log('products', products);

export default {
  components: {
    expander,
    scCheckboxGroup,
    list,
    colorPalette
  },

  data() {
    return {
      filter: {},
      facets: products.facets
    }
  },

  computed: {
    listFacets() {
      //return Object.values(this.facets).filter(el => el.type === 'list');
      return this.facets;
    },
  },

  methods: {
    getColomnCount(facet) {
      return facet.title.toLowerCase() === 'size'? 2:1;
    },

    isBreadcrumbed(facet) {
      return facet.moduleType === 'FacetsTile' && facet.type === 'breadcrumbed';
    },

    isCheckList(facet) {
      return facet.moduleType === 'FacetsTile' && facet.type === 'list';
    },

    isColor(facet) {
      return facet.moduleType === 'FacetsColour';
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

.breadcrumbs {
  background: #f0f0f0;
  margin: 0 -0.5rem;
  padding: 0 0.5rem;

  &::v-deep li {
    position: relative;

    &:nth-child(n + 2):after {
      content: '';
      border-left: 1px solid #08c;
      border-bottom: 1px solid #08c;
      display: block;
      width: .5rem;
      height: .875rem;
      position: absolute;
      left: calc(-1rem + 2px);
      top: 0;
    }

    &:nth-child(n + 2) {
      margin-left: 1rem;
    }

    &:nth-child(n + 3) {
      margin-left: 2rem;
    }

    &:nth-child(n + 4) {
      margin-left: 3rem;
    }
  }
}

.breadcrumb-link:hover {
  text-decoration: underline!important;
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
