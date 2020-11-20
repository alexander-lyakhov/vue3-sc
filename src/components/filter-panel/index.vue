<template>
  <aside>
    <expander v-for="(facet, facetIndex) in facets" :key="facetIndex" :title="facet.title">
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
            <checkbox-group :value="item.value" :name="facet.title" v-model="filter[facet.title]">
              {{item.value}}
            </checkbox-group>
            <span class="count">({{item.count}})</span>
          </template>
        </list>
      </template>

      <template v-if="isColor(facet)">
        <color-palette :items="facet.values" />
      </template>

      <template v-if="isRange(facet)">
        <range :min="facet.min" :max="facet.max" :values="[facet.min, facet.max]" />
      </template>
    </expander>
  </aside>
</template>

<script>

import expander from './expander';
import list from './list';
import colorPalette from './color-palette';
import range from './range';
import checkboxGroup from './checkbox/checkbox-group.vue';

export default {
  name: 'filter-panel',

  components: {
    expander,
    checkboxGroup,
    list,
    colorPalette,
    range
  },

  props: {
    facets: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      filter: {},
    }
  },

  created() {
    this.$watch('filter', value =>
      {
        console.table({...value});
      },
      {
        deep: true
      }
    )
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
    },

    isRange(facet) {
      return facet.moduleType === 'FacetsPrice' && facet.type === 'range';
    }
  }
}
</script>

<style lang="scss" scoped>

aside {
  background: #fff;
  box-shadow: 0 6px 8px rgba(0,0,0,0.4);
  border: 1px solid transparent;
  min-width: 336px;
}

.breadcrumbs {
  background: #f0f0f0;
  border: 1px solid #9ce;
  margin: 0 -0.5rem;
  padding: 0 0.5rem;

  &::v-deep li {
    position: relative;

    &:nth-child(n + 1):after {
      content: '';
      background: #08c;
      display: block;
      width: 8px;
      height: 8px;
      position: absolute;
      left: -16px;
      top: 8px;
    }

    @for $i from 1 through 20 {
      &:nth-child(n + #{$i}) {
        margin-left: $i * 1rem;
      }
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
